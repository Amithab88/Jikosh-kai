import { Slide } from "../ui/Slide";
import { JourneyNode } from "./JourneyNode";
import { JOURNEY_EVENTS } from "../../data/portfolioData";

export function Journey() {
  return (
    <section id="journey" className="section sec-cream">
      <Slide className="journey-head">
        <span className="sec-label-pill dark">
          Timeline <span className="kanji-tag">道程</span>
        </span>
        <h2 className="sec-title">The Data Journey</h2>
      </Slide>
      <div className="journey-scroll">
        <div className="journey-rail">
          <div className="journey-track-line" />
          {JOURNEY_EVENTS.map((j, i) => (
            <JourneyNode key={j.label + i} {...j} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
