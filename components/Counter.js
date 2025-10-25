// Project 03

"use client";

import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const handleIncrement = () => setCount(c => c + step);
  const handleDecrement = () => {
    if (count - step >= 0) setCount(c => c - step);
  };
  const handleReset = () => setCount(0);

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    setStep(value >= 1 ? value : 1);
  };

  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid #ccc",
        padding: "1.5rem",
        borderRadius: "12px",
        minWidth: "250px",
        background: "#fafafa",
      }}
    >
      <h3>
        Count:{" "}
        <span aria-live="polite" style={{ fontWeight: "bold" }}>
          {count}
        </span>
      </h3>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="step-input" style={{ marginRight: "0.5rem" }}>
          Step:
        </label>
        <input
          id="step-input"
          type="number"
          min="1"
          value={step}
          onChange={handleStepChange}
          style={{ width: "60px", textAlign: "center" }}
        />
      </div>

      <div>
        <button
          onClick={handleDecrement}
          disabled={count - step < 0}
          style={{
            margin: "0.25rem",
            padding: "0.5rem 1rem",
            background: count - step < 0 ? "#ddd" : "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: count - step < 0 ? "not-allowed" : "pointer",
          }}
        >
          –{step}
        </button>

        <button
          onClick={handleIncrement}
          style={{
            margin: "0.25rem",
            padding: "0.5rem 1rem",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          +{step}
        </button>

        <button
          onClick={handleReset}
          style={{
            margin: "0.25rem",
            padding: "0.5rem 1rem",
            background: "#666",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
