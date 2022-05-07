import "./App.css";
import { Routes, Route } from "react-router-dom";

import { MainComponent } from "./components/main/main.component";
import { UseStateExample1 } from "./components/use-state-example/use-state-example-1.component";
import { UseStateExample2 } from "./components/use-state-example/use-state-example-2.component";
import { UseEffectExample } from "./components/use-effect-example/use-effect-example.component";
import { UseLayoutEffectExample } from "./components/use-layout-effect-example/use-layout-effect-example.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/use-state-example-1" element={<UseStateExample1 />} />
        <Route path="/use-state-example-2" element={<UseStateExample2 />} />
        <Route path="/use-effect-example" element={<UseEffectExample />} />
        <Route
          path="/use-layout-effect-example"
          element={<UseLayoutEffectExample />}
        />
      </Routes>
    </div>
  );
};

export default App;
