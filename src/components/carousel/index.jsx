import { Carousel } from "@material-tailwind/react";
import classNames from "classnames";

import style from "./styles.module.css";
export default function CarouselTransition() {
  return (
    <Carousel 
      transition={{ duration: 1 }} 
      className={classNames(style.container)} 
      loop={true}
      autoplayDelay={4000}
      autoplay={true}
      prevArrow={() => {}}
      nextArrow={() => {}}
      navigation={() => {}}
      >
      <img
        src="img/my-photos/1.jpg"
        alt="1"
        className="h-full w-full object-cover"
      />
      <img
        src="img/my-photos/2.jpg"
        alt="2"
        className="h-full w-full object-cover"
      />
      <img
        src="img/my-photos/3.jpg"
        alt="3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}