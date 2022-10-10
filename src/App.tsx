import origin from "assets/origin.jpg";
import { testState } from "modules/rootAtom";
import { useRecoilState } from "recoil";

function App() {
  const [test, setTest] = useRecoilState(testState);
  return (
    <div>
      <img src={origin} alt="logo" />
    </div>
  );
}

export default App;
