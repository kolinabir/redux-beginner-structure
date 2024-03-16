import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.counter.count);
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex border border-purple-300 rounded-md p-10 gap-10 bg-slate-200">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment By Value
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{state}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-400 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
