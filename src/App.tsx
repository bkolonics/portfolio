import { Description } from "./Components/Description";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Timeline } from "./Components/Timeline";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function App() {
    return (
      <>
        <I18nextProvider i18n={i18n}>
          <div className="flex flex-col h-screen">
            <div className="flex">
              <Navbar />
            </div>
            <div className="flex flex-1 justify-center items-center lg:p-14">
              <Description />
            </div>
            <div className="flex justify-center">
              <Timeline />
            </div>
            <div className="flex justify-center mx-5 md:mx-10 xl:mx-36">
              <Projects />
            </div>
            <div>
              <Footer year={0} />
            </div>
          </div>
        </I18nextProvider>
      </>
    );
}

export default App;