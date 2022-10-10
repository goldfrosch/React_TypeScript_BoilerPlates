import origin from "assets/origin.jpg";
import { testState } from "modules/rootAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function App() {
  const [test, setTest] = useRecoilState(testState);

  useEffect(() => {
    console.log(test);
  }, []);

  return (
    <div>
      <img src={origin} alt="logo" />
    </div>
  );
}

export default App;
