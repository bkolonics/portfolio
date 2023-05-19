import photo from '../assets/photo.jpg';
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { RefObject } from "react";


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


interface DescriptionProps {
    age: number;
}

function calculateMyAge() {
    const today = new Date();
    const birthDate = new Date(2001, 3, 11);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}

export function Description({age}: DescriptionProps) {

    age = calculateMyAge();
    return (
      <>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <AnimateLeft>
            <img
              src={photo}
              alt="photo"
              className="rounded-image w-6/12 justify-center items-center block mx-auto xl:border-image border-mobile border-Glaucous shadow-2xl"
            />
            </AnimateLeft>
          </div>
          <div className="lg:w-1/2">
            <AnimateRight>
              <h1 className="text-3xl lg:text-4xl font-bold text-center mt-7 lg:mt-0 dark:text-Columbia-blue">
                Hi, I'm <span className="text-Glaucous">Bence</span>
              </h1>
              <h1 className="text-justify xl:m-20 m-5">
                <span className="text-2xl lg:text-3xl font-semibold text-center dark:text-Columbia-blue">
                  I'm a <span className="text-Glaucous"> {age}</span> years old
                  Developer. Molestiae tenetur ipsum voluptas qui rerum
                  praesentium dolores. Omnis occaecati quod ea a. Veritatis
                  animi laudantium delectus autem quia. Qui totam aut itaque et
                  voluptatem eum illo odit. Voluptatem nostrum impedit
                  reprehenderit. Nesciunt distinctio enim illo et.
                </span>
              </h1>
            </AnimateRight>
          </div>
        </div>
      </>
    );
}