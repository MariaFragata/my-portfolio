import Button from './Button'
import HeroVisual from './HeroVisual'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow anim-rise" style={{ '--d': '0ms' }}>
            <span className="hero__eyebrow-tag">Hi, I'm Christine</span>
            <span>developer &amp; creative coder</span>
          </p>

          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__word" style={{ '--d': '120ms' }}>
                Soft
              </span>{' '}
              <span className="hero__word" style={{ '--d': '200ms' }}>
                pixels,
              </span>
            </span>
            <span className="hero__line">
              <span className="hero__accent">
                <span className="hero__word" style={{ '--d': '300ms' }}>
                  solid
                </span>{' '}
                <span className="hero__word" style={{ '--d': '380ms' }}>
                  logic.
                </span>
                <svg className="hero__squiggle" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 13c22-9 40-9 58 0s38 9 58 0 38-9 58 0 38 9 58 0 38-9 58 0" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero__lead anim-rise" style={{ '--d': '520ms' }}>
            I build web experiences that feel as good as they work — thoughtful, tactile interfaces on the
            surface, with clean and dependable code holding everything together underneath.
          </p>

          <div className="hero__ctas anim-rise" style={{ '--d': '640ms' }}>
            <Button href="#work" variant="primary" arrow>
              View my work
            </Button>
            <Button href="#contact" variant="ghost">
              Let's connect
            </Button>
          </div>

          <p className="hero__meta anim-rise" style={{ '--d': '760ms' }}>
            <span className="hero__meta-item">
              <span className="pulse-dot" aria-hidden="true" />
              Open to new projects
            </span>
            <span className="hero__meta-sep" aria-hidden="true" />
            <span className="hero__meta-item">Frontend · UI engineering · Full-stack</span>
          </p>
        </div>

        <HeroVisual />
      </div>

      <a href="#about" className="hero__scroll anim-rise" style={{ '--d': '1100ms' }}>
        <span>scroll</span>
        <span className="hero__scroll-track" aria-hidden="true">
          <span />
        </span>
      </a>
    </section>
  )
}
