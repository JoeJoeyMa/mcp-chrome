import React from 'react';

const ProgressIndicator = ({ visible = true, text, showSpinner = true }) => {
  if (!visible) return null;

  return (
    <div className="progress-section">
      <div className="progress-indicator">
        {showSpinner && <div className="spinner"></div>}
        <span className="progress-text">{text}</span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
