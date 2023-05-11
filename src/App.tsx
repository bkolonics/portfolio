import { Description } from "./Components/Description";
import { Navbar } from "./Components/Navbar";
import { Timeline } from "./Components/Timeline";

function App() {
    return (
      <>
        <div className="flex flex-col h-screen">
          <div className="flex">
            <Navbar />
          </div>
          <div className="flex flex-1 justify-center items-center lg:p-14">
            <Description age={0} />
          </div>
          <div className="flex justify-center">
            <Timeline />
          </div>
        </div>
      </>
    );
}

export default App;