import useInView from '../hooks/useInView'
import Button from './Button'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { profile } from '../data'
import './WorkTeaser.css'

const PREVIEWS = [
  { id: '01', kind: 'Web app', title: 'Something useful', progress: 72, art: 'sunrise' },
  { id: '02', kind: 'Design system', title: 'Something systematic', progress: 48, art: 'grid' },
  { id: '03', kind: 'Experiment', title: 'Something playful', progress: 23, art: 'orbit' },
]

function Art({ variant }) {
  return (
    <div className={`art art--${variant}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

export default function WorkTeaser() {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work__head">
          <Reveal>
            <SectionLabel index="03">Selected work</SectionLabel>
          </Reveal>
          <Reveal as="h2" className="work__title" delay={80}>
            Currently <em>compiling</em>
            <span className="work__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </Reveal>
          <Reveal as="p" className="work__intro" delay={160}>
            A handful of case studies, side projects, and experiments are getting their final polish — along with
            the stories of how they came together.
          </Reveal>
        </div>

        <ul ref={ref} className={`work__deck ${inView ? 'is-in' : ''}`}>
          {PREVIEWS.map((p, i) => (
            <li key={p.id} className="preview" style={{ '--i': i, '--progress': `${p.progress}%` }}>
              <Art variant={p.art} />
              <div className="preview__body">
                <div className="preview__meta">
                  <span>No. {p.id}</span>
                  <span className="preview__kind">{p.kind}</span>
                </div>
                <h3 className="preview__title">{p.title}</h3>
                <div className="preview__status">
                  <span className="preview__bar">
                    <span />
                  </span>
                  <span className="preview__pct">{p.progress}%</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Reveal className="work__foot" delay={120}>
          <p>
            Projects page coming soon. <span className="serif-em">Peek at the commits in the meantime.</span>
          </p>
          <Button href={profile.github} variant="ghost" arrow="up-right" target="_blank" rel="noreferrer">
            Follow along on GitHub
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
