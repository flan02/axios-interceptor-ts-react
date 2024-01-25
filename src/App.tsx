import "./App.css";
import { UsingState } from "./errorHanlding/usingState";
import {
  StandardErrorBoundary,
  UsingErrorBoundaries,
} from "./errorHanlding/usingErrorBoundaries";
import { UsingTheRightWay } from "./errorHanlding/usingTheRightWay";
import { ErrorBoundary } from "react-error-boundary";
import { ProductsFetchingError } from "./components/errors/ErrorBoundrayComponent";

function App() {
  return (
    <div className="App">
      {/* <UsingState /> */}
      {/* <StandardErrorBoundary>
        <UsingErrorBoundaries />
      </StandardErrorBoundary> 
      */}

      {/* MODERN REACT ERRORBUNDARIES HANDLER */}
      <h1 className="to-cyan-700">Modern React ErrorBoundaries Handler</h1>
      <ErrorBoundary
        FallbackComponent={ProductsFetchingError}
        onError={() => console.log("Error happened!")}
      >
        <UsingTheRightWay />
      </ErrorBoundary>
    </div>
  );
}

export default App;
