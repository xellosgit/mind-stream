import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import Star from "./Star"; // Імпорт компонента Star
import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundStars = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = [
    { rotation: "rotate-[46deg]", size: "w-6 h-6", ml: "-ml-3", mt: "-mt-36" },
    { rotation: "-rotate-[56deg]", size: "w-8 h-8", ml: "-ml-3", mt: "-mt-32" },
    {
      rotation: "rotate-[54deg]",
      size: "w-8 h-8 hidden xl:block",
      ml: "-ml-3",
      mt: "mt-[12.9rem]",
    },
    { rotation: "-rotate-[65deg]", size: "w-7 h-7", ml: "-ml-3", mt: "mt-52" },
    {
      rotation: "-rotate-[85deg]",
      size: "w-10 h-10",
      ml: "-ml-5",
      mt: "-mt-3",
    },
    { rotation: "rotate-[70deg]", size: "w-10 h-10", ml: "-ml-5", mt: "-mt-3" },
    { rotation: "rotate-[80deg]", size: "w-8 h-8", ml: "-ml-4", mt: "-mt-20" },
    { rotation: "rotate-[100deg]", size: "w-7 h-7", ml: "-ml-3", mt: "mt-28" },
    { rotation: "-rotate-[90deg]", size: "w-5 h-5", ml: "-ml-2", mt: "mt-16" },
    { rotation: "rotate-[120deg]", size: "w-9 h-9", ml: "-ml-4", mt: "-mt-30" },
  ];

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-transparent rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {stars.map((star, index) => (
          <div
            key={index}
            className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom ${star.rotation}`}
          >
            <Star
              className={`${star.size} ${star.ml} ${
                star.mt
              } transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};
