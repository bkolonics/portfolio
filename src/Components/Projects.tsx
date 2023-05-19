import React, { FC, PropsWithChildren, useEffect, useRef, useState, RefObject } from "react";


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
          <div className="mb-24 text-justify dark:text-Columbia-blue">
            <p>{description}</p>
          </div>
        </div>
      </>
    );
}

export function Projects() {
    return (
      <>
        <div id="projects">
          <div className="flex justify-center">
            <div className="text-2xl lg:text-4xl font-bold text-Glaucous mb-10">
              Projects
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 overflow-hidden">
            <AnimateLeft>
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
            </AnimateLeft>
            <AnimateUp>
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
            </AnimateUp>
            <AnimateRight>
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
            </AnimateRight>
            <AnimateLeft>
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
            </AnimateLeft>
            <AnimateDown>
              <ProjectsInput
                title="High School"
                category="Cybersecurity"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
              />
            </AnimateDown>
            <AnimateRight>
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
            </AnimateRight>
          </div>
        </div>
      </>
    );
}