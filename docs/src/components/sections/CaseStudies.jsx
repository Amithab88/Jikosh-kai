import { Slide } from "../ui/Slide";
import { CaseCard } from "./CaseCard";
import { CASE_STUDIES } from "../../data/portfolioData";

export function CaseStudies() {
  return (
    <section id="case-studies" className="section sec-dark">
      <Slide className="cs-head">
        <span className="sec-label-pill">
          Case Studies <span className="kanji-tag">事例</span>
        </span>
        <h2 className="sec-title light">
          Problems I've solved
          <br />
          with data
        </h2>
        <p className="cs-sub">
          Flip each card to see how I approached and solved each business problem.
        </p>
      </Slide>
      <div className="flip-grid">
        {CASE_STUDIES.map((c, i) => (
          <CaseCard key={c.title} {...c} index={i} />
        ))}
      </div>
    </section>
  );
}
