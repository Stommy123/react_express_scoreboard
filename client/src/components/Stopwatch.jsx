import React, { useState, useEffect } from 'react';

const Stopwatch = _ => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0);

  const tick = _ => {
    if (!isRunning) return;

    setElapsedTimeInSeconds(prevElapsedTimeInSeconds => prevElapsedTimeInSeconds + 1);
  };

  const handleStopwatch = _ => setIsRunning(!isRunning);

  const handleReset = _ => setElapsedTimeInSeconds(0);

  useEffect(() => {
    const interval = setInterval(_ => tick(), 1000);

    return _ => clearInterval(interval);
  }, [isRunning, elapsedTimeInSeconds]);

  return (
    <div className='stopwatch'>
      <div>
        <h2>Stopwatch</h2>
        <span className='stopwatch-time'>{elapsedTimeInSeconds}</span>
      </div>
      <button onClick={handleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
