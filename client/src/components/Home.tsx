import { useSelector } from "react-redux";
import { State } from "../redux/store";

export default function Home() {
  const counter = useSelector((state: State) => state.counter);

  return (
    <div>
      <p>{counter}</p>
    </div>
  )
}
