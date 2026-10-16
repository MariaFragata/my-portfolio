import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import './About.css'

const NOTES = [
  {
    label: 'Currently',
    text: 'Exploring motion design and building UI components that are accessible by default.',
    tone: 'pink',
  },
  {
    label: 'Off-screen',
    text: 'Movies, slow mornings, and playlists that are way too specific to share.',
    tone: 'cream',
  },
  {
    label: 'Always asking',
    text: '“Could this feel simpler?” — the question behind most of my favorite work.',
    tone: 'sage',
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal>
          <SectionLabel index="01">About me</SectionLabel>
        </Reveal>

        <div className="about__grid">
          <Reveal as="h2" className="about__statement" delay={80}>
            I write code the way some people <em>sketch</em> — to figure out what an idea really wants to{' '}
            <span className="about__highlight">become</span>.
          </Reveal>

          <div className="about__body">
            <Reveal as="p" delay={160}>
              I'm Christine, a developer who lives right where design meets engineering. I care about the parts
              of a product people actually touch — how a button responds, how a page eases in, whether an error
              message feels kind — and about the logic that keeps it all running quietly underneath.
            </Reveal>
            <Reveal as="p" delay={240}>
              Most of what I know, I learned by being stubbornly curious: taking things apart, rebuilding them,
              and asking <span className="serif-em">"what if it worked like this instead?"</span> That habit
              still shapes every project I start.
            </Reveal>
            <Reveal className="about__sign" delay={320}>
              <span className="about__sign-name">Christine</span>
              <svg viewBox="0 0 120 24" aria-hidden="true">
                <path d="M2 16c18-10 30 6 48-2s26-10 40-2 16 6 28 0" />
              </svg>
            </Reveal>
          </div>
        </div>

        <ul className="about__notes">
          {NOTES.map((note, i) => (
            <Reveal as="li" key={note.label} delay={i * 110} className={`note note--${note.tone}`}>
              <span className="note__pin" aria-hidden="true" />
              <span className="note__label">{note.label}</span>
              <p className="note__text">{note.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
