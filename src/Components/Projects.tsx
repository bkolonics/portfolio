import { FC, PropsWithChildren, useEffect, useRef, useState, RefObject } from "react";
import { useTranslation } from "react-i18next";


interface ProjectsProps {
    title: string;
    category: string;
    status: string;
    description: string;
}

// categories = [
//     "Sysadmin",
//     "Development",
//     "Cybersecurity",
//     "DevOps",
//     "Other"
// ]

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateRight: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "10rem 0",
        transition: "600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

const AnimateLeft: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "-10rem 0",
        transition: "600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

const AnimateUp: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 -10rem",
        transition: "600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

const AnimateDown: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 10rem",
        transition: "600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
};


function ProjectsInput({title, category, status, description}: ProjectsProps) {
    return (
      <>
        <div className="bg-Columbia-blue rounded-3xl p-3 dark:bg-Jet dark:border-Columbia-blue dark:border-2">
          <div className="flex mb-3 items-end justify-around text-Glaucous font-semibold">
            <div className="text-xl justify-start">{title}</div>
            <div className="text-sm justify-end">{category}</div>
          </div>
          <div className="text-Glaucous">
            <span className="font-semibold">Status: </span>
            {status}
          </div>
          <div className="text-justify dark:text-Columbia-blue">
            <p>{description}</p>
          </div>
        </div>
      </>
    );
}

export default function Projects() {
    const { t } = useTranslation();
    return (
      <>
        <div id="projects">
          <div className="flex justify-center">
            <div className="text-2xl lg:text-4xl font-bold text-Glaucous mb-10">
              {t("Projects")}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 overflow-hidden">
            <AnimateLeft>
              <ProjectsInput
                title={t("Title project 1")}
                category={t("Category project 1")}
                status={t("Status project 1")}
                description={t("Description project 1")}
              />
            </AnimateLeft>
            <AnimateUp>
              <ProjectsInput
                title={t("Title project 2")}
                category={t("Category project 2")}
                status={t("Status project 2")}
                description={t("Description project 2")}
              />
            </AnimateUp>
            <AnimateRight>
              <ProjectsInput
                title={t("Title project 3")}
                category={t("Category project 3")}
                status={t("Status project 3")}
                description={t("Description project 3")}
              />
            </AnimateRight>
            <AnimateLeft>
              <ProjectsInput
                title={t("Title project 4")}
                category={t("Category project 4")}
                status={t("Status project 4")}
                description={t("Description project 4")}
              />
            </AnimateLeft>
            <AnimateDown>
              <ProjectsInput
                title={t("Title project 5")}
                category={t("Category project 5")}
                status={t("Status project 5")}
                description={t("Description project 5")}
              />
            </AnimateDown>
            {/* <AnimateRight>
              <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
              />
            </AnimateRight> */}
          </div>
        </div>
      </>
    );
}