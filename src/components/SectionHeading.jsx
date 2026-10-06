import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import './SectionHeading.css'

export default function SectionHeading({ index, label, title, intro, accent = 'sage' }) {
  return (
    <div className={`section-heading section-heading--${accent}`}>
      <div>
        <Reveal>
          <SectionLabel index={index}>{label}</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="section-heading__title" delay={80}>
          {title}
        </Reveal>
      </div>
      {intro && (
        <Reveal as="p" className="section-heading__intro" delay={160}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}
