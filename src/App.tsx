import { lazy, Suspense } from "react";

const Navbar = lazy(() =>
  import("./Components/Navbar").then((module) => ({
    default: module.default,
  }))
);
const Description = lazy(() =>
  import("./Components/Description").then((module) => ({
    default: module.default,
  }))
);
const Footer = lazy(() =>
  import("./Components/Footer").then((module) => ({
    default: module.default,
  }))
);

const Timeline = lazy(() =>
  import("./Components/Timeline").then((module) => ({
    default: module.default,
  }))
);
const Projects = lazy(() =>
  import("./Components/Projects").then((module) => ({
    default: module.default,
  }))
);
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
            <Suspense
              fallback={
                <div className="flex flex-1 justify-center items-center lg:p-14 text-Glaucous">
                  Loading...
                </div>
              }
            >
              <Timeline />
            </Suspense>
          </div>
          <div className="flex justify-center mx-5 md:mx-10 xl:mx-36">
            <Suspense
              fallback={
                <div className="flex flex-1 justify-center items-center lg:p-14 text-Glaucous">
                  Loading...
                </div>
              }
            >
              <Projects />
            </Suspense>
          </div>
          <div>
            <Suspense
              fallback={
                <div className="flex flex-1 justify-center items-center lg:p-14 text-Glaucous">
                  Loading...
                </div>
              }
            >
              <Footer year={0} />
            </Suspense>
          </div>
        </div>
      </I18nextProvider>
    </>
  );
}

export default App;
