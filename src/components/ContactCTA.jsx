import Button from './Button'
import Reveal from './Reveal'
import Sticker from './Sticker'
import { profile } from '../data'
import './ContactCTA.css'

export default function ContactCTA() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal className="contact__card">
          <div className="contact__glow" aria-hidden="true" />
          <div className="contact__copy">
            <p className="contact__kicker">Let's connect</p>
            <h2 className="contact__title">
              Got an idea that needs a little code and a lot of <em>care?</em>
            </h2>
            <p className="contact__lead">
              I'm always happy to talk projects, collaborations, or the tiny UI details nobody else notices.
            </p>
            <div className="contact__ctas">
              <Button href={`mailto:${profile.email}`} variant="primary" arrow>
                Say hello
              </Button>
              <Button href={profile.github} variant="light" arrow="up-right" target="_blank" rel="noreferrer">
                GitHub
              </Button>
            </div>
          </div>
          <Sticker id="contact" className="contact__sticker" text="say hi · let's build · say hi · " />
        </Reveal>
      </div>
    </section>
  )
}
