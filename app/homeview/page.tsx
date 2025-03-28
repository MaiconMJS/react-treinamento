"use client";

import {
  ButtonAuto,
  ButtonManual,
  ButtonStop,
  ButtonZerar,
  Display,
} from "@/components/TesteComponents";
import Incrementador from "@/hooks/Incrementador";

const HomeView = () => {
  const {
    manualIncrement,
    numeroN1,
    numeroN2,
    automaticIncrement,
    manual,
    zerar,
    stop,
    auto,
    stopIncrement,
    zerarIncrement,
  } = Incrementador();
  return (
    <main className="flex flex-col bg-black h-screen items-center justify-center">
      <article className="flex flex-col items-center justify-center h-screen">
        <Display n1={numeroN1.n1} n2={numeroN2.n2} />
        <ButtonManual onClick={manualIncrement} isPressed={manual} />
        <ButtonAuto onClick={automaticIncrement} isPressed={auto} />
      </article>
      <ButtonZerar onClick={zerarIncrement} isPressed={zerar} />
      <ButtonStop onClick={stopIncrement} isPressed={stop} />
    </main>
  );
};

export default HomeView;
