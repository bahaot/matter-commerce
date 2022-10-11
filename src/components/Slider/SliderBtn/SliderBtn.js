import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import "./SliderBtn.css";

const SliderBtn = () => {
  return (
    <div className="btn-slider__box">
      <button className="btn-slider btn-slider__left">
        <ChevronLeftIcon className="icon-slider__left" />
      </button>
      <button className="btn-slider btn-slider__right">
        <ChevronRightIcon className="icon-slider__right" />
      </button>
    </div>
  );
};

export default SliderBtn;
