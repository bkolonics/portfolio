import { Description } from "./Components/Description";
import { Navbar } from "./Components/Navbar";

function App() {
    return (
      <>
      <div className="flex flex-col h-screen">
        <div className="flex">
          <Navbar />
        </div>
        <div className="flex flex-1 justify-center items-center">
            <Description age={0} />
        </div>
      </div>
      </>
    );
}

export default App;