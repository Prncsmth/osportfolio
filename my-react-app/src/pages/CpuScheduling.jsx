import React, { useState } from "react";
import "./CpuScheduling.css";

export default function CPUScheduling() {
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [processName, setProcessName] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [priority, setPriority] = useState("");
  const [quantum, setQuantum] = useState("");

  const [processes, setProcesses] = useState([]);
  const [results, setResults] = useState([]);
  const [avgWT, setAvgWT] = useState(null);
  const [avgTAT, setAvgTAT] = useState(null);

  // ---------------------------
  // ADD PROCESS
  // ---------------------------
  const addProcess = () => {
    if (!processName || arrivalTime === "" || burstTime === "") return;

    const newProcess = {
      name: processName,
      at: Number(arrivalTime),
      bt: Number(burstTime),
      pr: Number(priority),
    };

    setProcesses([...processes, newProcess]);
    setProcessName("");
    setArrivalTime("");
    setBurstTime("");
    setPriority("");
  };

  // ---------------------------
  // FCFS ALGORITHM
  // ---------------------------
  const runFCFS = () => {
    const sorted = [...processes].sort((a, b) => a.at - b.at);

    let time = 0;
    let res = [];
    let totalWT = 0;
    let totalTAT = 0;

    sorted.forEach((p) => {
      let start = Math.max(time, p.at);
      let finish = start + p.bt;
      let wt = start - p.at;
      let tat = finish - p.at;

      totalWT += wt;
      totalTAT += tat;
      res.push({ name: p.name, start, finish, wt, tat });

      time = finish;
    });

    setResults(res);
    setAvgWT((totalWT / sorted.length).toFixed(2));
    setAvgTAT((totalTAT / sorted.length).toFixed(2));
  };

  // ---------------------------
  // MAIN EXECUTION
  // ---------------------------
  const visualize = () => {
    if (processes.length === 0) return;

    if (algorithm === "FCFS") runFCFS();

    // other algorithms can be added here
  };

  // ---------------------------
  const resetAll = () => {
    setProcesses([]);
    setResults([]);
    setAvgWT(null);
    setAvgTAT(null);
  };

  // ---------------------------
  return (
    <div className="cpu-wrapper">
      <h1 className="cpu-heading">CPU Scheduler: FCFS, SJF, RR, Priority</h1>
      
        {/* MAIN CARD */}
      <div className="cpu-feature-card">
        <div className="cpu-left">
          <div className="cpu-role">
            <span className="cpu-dot"></span> Scheduling Algorithms
          </div>

          <h2 className="cpu-title">{algorithm} Algorithm</h2>

          <p className="cpu-description">
            Add processes (Arrival Time / Burst Time), choose an algorithm, and visualize
            the timeline with your portfolio’s neon-purple theme.
          </p>

          {/* SELECT ALGO */}
          <select
            className="cpu-select"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="FCFS">FCFS (First Come First Serve)</option>
            <option value="SJF">SJF (Non-Preemptive)</option>
            <option value="SJF_PRE">SJF (Preemptive)</option>
            <option value="PRIORITY">Priority Scheduling</option>
            <option value="RR">Round Robin</option>
          </select>
        </div>

        {/* PROCESS INPUTS */}
        <div className="cpu-right">
          <div className="cpu-input-row">
            <input
              type="text"
              placeholder="Process Name (e.g. P1)"
              value={processName}
              onChange={(e) => setProcessName(e.target.value)}
            />

            <input
              type="number"
              placeholder="AT"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />

            <input
              type="number"
              placeholder="BT"
              value={burstTime}
              onChange={(e) => setBurstTime(e.target.value)}
            />

            {/* Show priority only if needed */}
            {algorithm === "PRIORITY" && (
              <input
                type="number"
                placeholder="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
            )}

            {/* Quantum only for RR */}
            {algorithm === "RR" && (
              <input
                type="number"
                placeholder="Quantum"
                value={quantum}
                onChange={(e) => setQuantum(e.target.value)}
              />
            )}

            <button className="cpu-add-btn" onClick={addProcess}>+ Add</button>
          </div>

          <div className="cpu-queue">
            <h4>Process Queue</h4>
            {processes.length === 0 ? (
              <p className="cpu-empty">No processes added</p>
            ) : (
              <ul>
                {processes.map((p, i) => (
                  <li key={i}>{p.name} — AT:{p.at}, BT:{p.bt} {p.pr ? `PR:${p.pr}` : ""}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="cpu-btn-row">
            <button className="cpu-visualize" onClick={visualize}>▶ Visualize</button>
            <button className="cpu-reset" onClick={resetAll}>⟳ Reset</button>
          </div>
        </div>
      </div>

      {/* GANTT CHART */}
      <div className="cpu-gantt-card">
        <h3>Gantt Chart</h3>
        {results.length === 0 ? (
          <p className="cpu-empty">Run visualization to generate chart.</p>
        ) : (
          <div className="cpu-gantt">
            {results.map((r, i) => (
              <div key={i} className="cpu-gantt-block">
                <strong>{r.name}</strong>
                <small>{r.start} - {r.finish}</small>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RESULTS */}
      <div className="cpu-results-section">
        <div className="cpu-results-card">
          <h3>Process Results</h3>
          {results.length === 0 ? (
            <p className="cpu-empty">No results yet</p>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={i}>
                  {r.name} — WT: {r.wt} • TAT: {r.tat}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cpu-stats-card">
          <h3>Statistics</h3>
          <p className="cpu-stat">Average Waiting Time: <span>{avgWT}</span></p>
          <p className="cpu-stat">Average Turnaround Time: <span>{avgTAT}</span></p>
        </div>
      </div>
    </div>
  );
}
