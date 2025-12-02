import React, { useState } from "react";
import "./CpuScheduling.css";

export default function CPUScheduling() {
  const [processName, setProcessName] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [processes, setProcesses] = useState([]);
  const [results, setResults] = useState([]);
  const [avgWT, setAvgWT] = useState(null);
  const [avgTAT, setAvgTAT] = useState(null);

  const addProcess = () => {
    if (!processName || arrivalTime === "" || burstTime === "") return;

    const newProcess = {
      name: processName,
      at: Number(arrivalTime),
      bt: Number(burstTime),
    };

    setProcesses([...processes, newProcess]);
    setProcessName("");
    setArrivalTime("");
    setBurstTime("");
  };

  const visualize = () => {
    if (processes.length === 0) return;

    const sorted = [...processes].sort((a, b) => a.at - b.at);

    let currentTime = 0;
    let res = [];
    let totalWT = 0;
    let totalTAT = 0;

    for (let p of sorted) {
      let start = Math.max(currentTime, p.at);
      let finish = start + p.bt;
      let wt = start - p.at;
      let tat = finish - p.at;

      totalWT += wt;
      totalTAT += tat;

      res.push({ name: p.name, start, finish, wt, tat });
      currentTime = finish;
    }

    setResults(res);
    setAvgWT((totalWT / sorted.length).toFixed(2));
    setAvgTAT((totalTAT / sorted.length).toFixed(2));
  };

  const resetAll = () => {
    setProcesses([]);
    setResults([]);
    setAvgWT(null);
    setAvgTAT(null);
  };

  return (
    <div className="cpu-page">
      <h1 className="page-title">CPU Scheduling • FCFS Visualizer</h1>

      <div className="page-layout">
        {/* LEFT CARD */}
        <div className="info-card glass-card">
          <h3>FCFS Visualizer</h3>
          <h1>First-Come, First-Served</h1>
          <p>
            Add processes (AT/BT), then visualize scheduling. The UI matches your
            portfolio theme with soft glass backgrounds and neon accent colors.
          </p>
        </div>

        {/* RIGHT INPUT CARD */}
        <div className="input-card glass-card">
          <h3>Add Process</h3>

          <div className="input-row">
            <input
              type="text"
              placeholder="Process name (e.g. P1)"
              value={processName}
              onChange={(e) => setProcessName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Arrival Time (AT)"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />

            <input
              type="number"
              placeholder="Burst Time (BT)"
              value={burstTime}
              onChange={(e) => setBurstTime(e.target.value)}
            />

            <button className="add-btn" onClick={addProcess}>+ Add Task</button>
          </div>

          <div className="queue-section">
            <h4>Process Queue</h4>
            {processes.length === 0 ? (
              <p className="empty">No processes added yet.</p>
            ) : (
              <ul>
                {processes.map((p, i) => (
                  <li key={i}>{p.name} — AT: {p.at}, BT: {p.bt}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="btn-row">
            <button className="visualize-btn" onClick={visualize}>▶ Visualize FCFS</button>
            <button className="reset-btn" onClick={resetAll}>⟳ Reset All</button>
          </div>
        </div>
      </div>

      {/* GANTT CHART */}
      <div className="gantt-card glass-card">
        <h3>Gantt Chart</h3>
        {results.length === 0 ? (
          <p className="empty">No timeline yet — click Visualize FCFS.</p>
        ) : (
          <div className="gantt-bar">
            {results.map((r, i) => (
              <div key={i} className="gantt-block">
                <span>{r.name}</span>
                <small>
                  {r.start} - {r.finish}
                </small>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RESULTS */}
      <div className="results-section">
        <div className="results-card glass-card">
          <h3>Process Results</h3>
          {results.length === 0 ? (
            <p className="empty">No results — click Visualize.</p>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={i}>
                  {r.name}: WT = {r.wt}, TAT = {r.tat}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="stats-card glass-card">
          <h3>Statistics</h3>
          <div className="stat">Average Waiting Time: <span>{avgWT}</span></div>
          <div className="stat">Average Turnaround Time: <span>{avgTAT}</span></div>
        </div>
      </div>
    </div>
  );
}
