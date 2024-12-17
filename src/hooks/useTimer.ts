import { useRef, useState } from "react";

export const useTimer = (maxTimer: number) => {
  const [time, setTime] = useState(maxTimer);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    // start count down
    setTime(maxTimer);
    interval.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return {
    time,
    startTimer,
    stopTimer,
  };
};
