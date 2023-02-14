import classNames from "classnames";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GiFlamingArrow } from "react-icons/gi";
import { useCarousel } from "../hooks/useCarousel";

export enum Direction {
  RIGHT = "right",
  LEFT = "left",
}

interface CarouselProp {
  direction?: Direction.LEFT | Direction.RIGHT;
}
export const Carousel = ({ direction = Direction.RIGHT }: CarouselProp) => {
  const { slides, currentIndex, goToSlide, prevSlide, nextSlide } =
    useCarousel();

  return (
    <div
      className={classNames(
        "z-40 w-64 h-screen transition-transform -translate-x-full fixed top-0 sm:translate-x-0 aria-label=Sidebar absolute static group ",
        direction === Direction.RIGHT ? "right-0 sm:translate-x-96 " : "left-0 "
      )}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex left-4 justify-center  ">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer "
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <GiFlamingArrow />
          </div>
        ))}
      </div>
    </div>
  );
};
