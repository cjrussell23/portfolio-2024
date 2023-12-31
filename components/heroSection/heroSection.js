import Window from "./window/window";
import Desk from "./desk/desk";
import Lamp from "./lamp/lamp";
import Cat from "./cat/cat";
import HangingLamp from "./hangingLamp/hangingLamp";
import AnalogClock from "./analogClock/analogClock";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="tw-flex tw-flex-col tw-justify-end md:tw-px-16 lg:tw-flex-row lg:tw-justify-around tw-items-center tw-w-full tw-px-1 tw-gap-0 lg:tw-gap-4 lg:tw-px-8 tw-bg-background"
    >
      <div className="tw-flex tw-flex-col tw-justify-between tw-pb-10 tw-items-center tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-2xl tw-gap-4">
        <div className="tw-flex tw-flex-row tw-justify-between tw-w-full tw-px-4 tw-items-start">
          <div className="tw-flex tw-flex-row tw-justify-start tw-w-full">
            <HangingLamp />
          </div>
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-pt-4 lg:tw-items-end">
            <AnalogClock />
          </div>
        </div>
        <Desk />
        <div className="lg:tw-hidden tw-flex tw-flex-row tw-justify-end tw-items-end tw-w-full tw-px-4">
          <Cat />
        </div>
      </div>
      <div className="tw-flex-col tw-justify-between tw-pb-10 tw-pt-8 tw-items-center tw-w-1/4 tw-h-full tw-hidden lg:tw-flex lg:tw-w-1/4">
        <Window />
        <Cat />
      </div>
    </section>
  );
}
