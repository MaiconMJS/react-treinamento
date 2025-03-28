import ButtonProps from "@/props/ButtonProps";
import DisplayProps from "@/props/DisplayProps";

const Display: React.FC<DisplayProps> = ({ n1, n2 }) => {
  return (
    <section className="flex space-x-10 space-y-5">
      <h1 className="text-5xl font-semibold text-blue-600/100 dark:text-blue-500/100">
        N1: {n1}
      </h1>
      <h2 className="text-5xl font-semibold text-blue-600/100 dark:text-blue-500/100">
        N2: {n2}
      </h2>
    </section>
  );
};

const ButtonAuto: React.FC<ButtonProps> = ({ onClick, isPressed }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-150} ${
        isPressed ? "scale-110" : "scale-100"
      } text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2`}
    >
      Automatic Increment
    </button>
  );
};

const ButtonStop: React.FC<ButtonProps> = ({ onClick, isPressed }) => {
  return (
    <button
      className={`transition-transform duration-150} ${
        isPressed ? "scale-110" : "scale-100"
      } text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10`}
      onClick={onClick}
    >
      Stop Increment
    </button>
  );
};

const ButtonZerar: React.FC<ButtonProps> = ({ onClick, isPressed }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-150} ${
        isPressed ? "scale-110" : "scale-100"
      } text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
    >
      Zerar
    </button>
  );
};

const ButtonManual: React.FC<ButtonProps> = ({ onClick, isPressed }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-150 ${
        isPressed ? "scale-110" : "scale-100"
      } text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
    >
      Manual Increment
    </button>
  );
};

export { Display, ButtonManual, ButtonAuto, ButtonStop, ButtonZerar };
