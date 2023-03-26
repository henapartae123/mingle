import React from "react";
import { Step, ProgressBar } from "react-step-progress-bar";
import "./Progress.css";

const Progress = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "basic") {
    stepPercentage = 0;
  } else if (page === "personality") {
    stepPercentage = 50;
  } else if (page === "lifestyle") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className="progress">
      <div className="progress-container">
        <ProgressBar percent={stepPercentage}>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
                onClick={() => onPageNumberClick("1")}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
                onClick={() => onPageNumberClick("2")}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
                onClick={() => onPageNumberClick("3")}
              >
                {index + 1}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
};

export default Progress;
