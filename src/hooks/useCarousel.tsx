import { useState } from "react";

const slides = [
  {
    url: "https://thumbs.gfycat.com/LameMemorableAlligatorgar.webp",
  },
  {
    url: "https://thumbs.dreamstime.com/z/milan-italy-august-dota-logo-website-homep-milan-italy-august-dota-logo-website-homepage-106078551.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/z/epicenter-moscow-dota-cybersport-event-may-main-scene-auditorium-russia-72676617.jpg",
  },

  {
    url: "https://thumbs.dreamstime.com/z/epicenter-moscow-dota-cybersport-event-may-main-scene-auditorium-russia-72674344.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/z/epicenter-moscow-dota-cybersport-event-may-game-picks-heroes-screen-team-alliance-russia-72674772.jpg",
  },
];

export const useCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return { goToSlide, nextSlide, prevSlide, slides, currentIndex };
};
