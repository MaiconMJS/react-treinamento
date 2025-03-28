/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const Incrementador = () => {
  const [numeroN1, setNumeroN1] = useState<{ n1: number }>({ n1: 0 });
  const [numeroN2, setNumeroN2] = useState<{ n2: number }>({ n2: 0 });
  const [manual, setManual] = useState<boolean>(false);
  const [zerar, setZerar] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);
  const [auto, setAuto] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function manualIncrement() {
    if (!intervalRef.current) {
      setManual(true);
      setTimeout(() => {
        setManual(false);
      }, 300);
      intervalRef.current = setTimeout(() => {
        setNumeroN1((prev) => ({
          n1: prev.n1 + 1,
        }));
        intervalRef.current = null;
      }, 1000);
    }
  }

  function automaticIncrement() {
    if (!intervalRef.current) {
      setAuto(true);
      setTimeout(() => {
        setAuto(false);
      }, 300);
      intervalRef.current = setInterval(() => {
        setNumeroN1((prev) => ({
          n1: prev.n1 + 1,
        }));
      }, 1000);
    }
  }

  function stopIncrement() {
    if (intervalRef.current) {
      setStop(true);
      setTimeout(() => {
        setStop(false);
      }, 300);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function zerarIncrement() {
    if (numeroN1.n1 !== 0 || numeroN2.n2 !== 0) {
      setZerar(true);
      setTimeout(() => {
        setZerar(false);
      }, 300);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setNumeroN1((prev) => ({
        n1: (prev.n1 = 0),
      }));
      setNumeroN2((prev) => ({
        n2: (prev.n2 = 0),
      }));
    } else {
      setNumeroN1((prev) => ({
        n1: (prev.n1 = 0),
      }));
      setNumeroN2((prev) => ({
        n2: (prev.n2 = 0),
      }));
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (numeroN2.n2 > 0) {
        setNumeroN2((prev) => ({
          n2: prev.n2 - 1,
        }));
      }
      setNumeroN2((prev) => ({
        n2: prev.n2 + numeroN1.n1,
      }));
    }, 500);
  }, [numeroN1.n1]);

  return {
    manualIncrement,
    numeroN1,
    numeroN2,
    manual,
    stop,
    auto,
    automaticIncrement,
    stopIncrement,
    zerarIncrement,
    zerar,
  };
};

export default Incrementador;
