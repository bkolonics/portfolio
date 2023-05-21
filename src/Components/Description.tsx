import photo from '../assets/photo.webp';
import photoS from '../assets/photos/photoS.webp';
import photoM from '../assets/photos/photoM.webp';
import photoL from '../assets/photos/photoL.webp';
import photoXL from '../assets/photos/photoXL.webp';
import photoXXL from '../assets/photos/photoXXL.webp';
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";


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


function calculateMyAge() {
    const today = new Date();
    const birthDate = new Date(2001, 3, 11);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}

export function Description() {
    const { t } = useTranslation();
    return (
      <>
        <div className="flex flex-col lg:flex-row items-center overflow-hidden">
          <div className="lg:w-1/2">
            <AnimateLeft>
              <img
                src={photo}
                alt="photo"
                className="rounded-image w-6/12 justify-center items-center block mx-auto xl:border-image border-mobile border-Glaucous shadow-2xl"
                srcSet={`${photoS} 256w,
                        ${photoM} 690w,
                        ${photoL} 980w,
                        ${photoXL} 1200w,
                        ${photoXXL} 1380w`}
                sizes="(max-width: 256px) 256px,
                        (max-width: 690px) 690px,
                        (max-width: 980px) 980px,
                        (max-width: 1200px) 1200px,
                        1380px"
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
                  I'm a {calculateMyAge()} years old student from. I
                  {t("greeting")}
                </span>
              </h1>
            </AnimateRight>
          </div>
        </div>
      </>
    );
}