import { education } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SparkIcon from './SparkIcon'
import Tags from './Tags'
import './Education.css'

function EducationCard({ item, delay }) {
  return (
    <Reveal as="article" className="edu-card" delay={delay}>
      <div className="edu-card__main">
        <div className="edu-card__school">
          <span className="edu-card__crest" aria-hidden="true">
            {item.monogram}
          </span>
          <div>
            <p className="edu-card__school-name">{item.school}</p>
            <p className="edu-card__location">{item.location}</p>
          </div>
        </div>

        <h3 className="edu-card__degree">
          {item.degree} <em>{item.field}</em>
        </h3>
        <p className="edu-card__desc">{item.description}</p>

        <div className="edu-card__details">
          {item.highlights?.length > 0 && (
            <div>
              <p className="edu-card__subhead">Highlights</p>
              <ul className="edu-card__highlights">
                {item.highlights.map((h, i) => (
                  <li key={h} style={{ '--i': i }}>
                    <SparkIcon />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.focusAreas?.length > 0 && (
            <div>
              <p className="edu-card__subhead">Focus areas</p>
              <Tags items={item.focusAreas} className="edu-card__tags" />
            </div>
          )}
        </div>
      </div>

      <aside className="edu-card__stub" aria-label={`${item.start} to ${item.end}`}>
        <span className="edu-card__status">
          <span className="pulse-dot" aria-hidden="true" />
          {item.status}
        </span>
        <div className="edu-card__class">
          <span className="edu-card__class-label">Class of</span>
          <span className="edu-card__year">
            <span className="edu-card__apos">’</span>
            {item.end.slice(-2)}
          </span>
        </div>
        <p className="edu-card__dates">
          <time>{item.start}</time>
          <span className="edu-card__dates-line" aria-hidden="true" />
          <time>{item.end}</time>
        </p>
        <span className="edu-card__stub-art" aria-hidden="true">
          <span className="edu-card__sun" />
        </span>
      </aside>
    </Reveal>
  )
}

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="education__inner">
          <SectionHeading
            index="03"
            label="Education"
            accent="rose"
            title={
              <>
                Where curiosity <em>got a syllabus.</em>
              </>
            }
            intro="The classroom side of the story — where tinkering turned into fundamentals."
          />
          {education.map((item, i) => (
            <EducationCard key={`${item.school}-${item.field}`} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
