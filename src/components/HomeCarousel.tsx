import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GiFlamingArrow } from "react-icons/gi";
import { useCarousel } from "../hooks/useCarousel";

export const HomeCarousel = () => {
  const { slides, currentIndex, goToSlide, prevSlide, nextSlide } =
    useCarousel();

  return (
    <div className={"max-w-[1600px] h-[480px] w-full my-px static group "}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={50} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={50} />
      </div>
      <div className="flex top-4 justify-center py-2">
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
