import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import './Toolkit.css'

const STACKS = [
  {
    id: 'front',
    kicker: 'Interfaces',
    title: 'Frontend craft',
    blurb: 'Responsive, accessible UIs with motion that feels natural — never noisy.',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    id: 'back',
    kicker: 'Back of house',
    title: 'Logic & data',
    blurb: 'The plumbing that keeps the pretty parts honest.',
    tags: ['Node.js', 'Express', 'REST APIs', 'SQL', 'Git'],
  },
  {
    id: 'design',
    kicker: 'Design sense',
    title: 'Look & feel',
    blurb: 'Comfortable with a design file and with the details it forgot.',
    tags: ['Figma', 'Design systems', 'Prototyping', 'A11y'],
  },
]

const PROCESS = [
  { step: 'Wonder', note: 'ask why, map the problem' },
  { step: 'Sketch', note: 'explore ideas fast & loose' },
  { step: 'Build', note: 'clean, solid, tested code' },
  { step: 'Polish', note: 'sweat the tiny details' },
]

const EXPLORING = ['Micro-interactions & motion', 'Accessible component libraries', 'Creative coding with canvas']

function Shape({ variant }) {
  return <span className={`shape shape--${variant}`} aria-hidden="true" />
}

export default function Toolkit() {
  const [front, back, design] = STACKS
  return (
    <section className="section toolkit" id="toolkit">
      <div className="container">
        <div className="toolkit__head">
          <div>
            <Reveal>
              <SectionLabel index="02">Toolkit</SectionLabel>
            </Reveal>
            <Reveal as="h2" className="toolkit__title" delay={80}>
              What I reach for <em>when I build.</em>
            </Reveal>
          </div>
          <Reveal as="p" className="toolkit__intro" delay={160}>
            Tools change; taste and curiosity stick around. Here's the kit I'm most at home with right now.
          </Reveal>
        </div>

        <div className="bento">
          <StackCard stack={front} className="bento__card--front" shape="arch" delay={0} />

          <Reveal className="bento__card bento__card--process" delay={100}>
            <span className="bento__kicker">How I work</span>
            <h3 className="bento__title">A small loop, on repeat.</h3>
            <ol className="process">
              {PROCESS.map((p, i) => (
                <li key={p.step} className="process__item">
                  <span className="process__num">0{i + 1}</span>
                  <span className="process__step">{p.step}</span>
                  <span className="process__note">{p.note}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <StackCard stack={back} className="bento__card--back" shape="circle" delay={0} />
          <StackCard stack={design} className="bento__card--design" shape="blob" delay={100} />

          <Reveal className="bento__card bento__card--now" delay={200}>
            <div className="now__head">
              <span className="bento__kicker">
                <span className="pulse-dot" aria-hidden="true" /> Currently exploring
              </span>
              <span className="now__file">~/side-quests</span>
            </div>
            <ul className="now__list">
              {EXPLORING.map((item, i) => (
                <li key={item}>
                  <span className="now__idx">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                  <span className="now__arrow" aria-hidden="true">
                    ↗
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StackCard({ stack, className, shape, delay }) {
  return (
    <Reveal className={`bento__card ${className}`} delay={delay}>
      <Shape variant={shape} />
      <span className="bento__kicker">{stack.kicker}</span>
      <h3 className="bento__title">{stack.title}</h3>
      <p className="bento__blurb">{stack.blurb}</p>
      <ul className="tags">
        {stack.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
