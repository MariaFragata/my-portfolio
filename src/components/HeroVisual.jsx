import { useRef } from 'react'
import useTypewriter from '../hooks/useTypewriter'
import SparkIcon from './SparkIcon'
import Sticker from './Sticker'
import './HeroVisual.css'

const STATUSES = ['shipping', 'tinkering', 'polishing', 'learning', 'daydreaming']

const S = ({ children }) => <span className="tk-s">{children}</span>
const K = ({ children }) => <span className="tk-k">{children}</span>
const P = ({ children }) => <span className="tk-p">{children}</span>

export default function HeroVisual() {
  const ref = useRef(null)
  const status = useTypewriter(STATUSES)

  const handleMove = (e) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`)
    el.style.setProperty('--px', `${(x * 14).toFixed(1)}px`)
    el.style.setProperty('--py', `${(y * 14).toFixed(1)}px`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    ;['--rx', '--ry', '--px', '--py'].forEach((v) => el.style.removeProperty(v))
  }

  return (
    <div className="hv anim-rise" style={{ '--d': '280ms' }} ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave}>
      <div className="hv__arch" aria-hidden="true">
        <span className="hv__sun" />
        <span className="hv__horizon" />
      </div>

      <figure className="hv__card" aria-label="A playful code snippet describing Christine">
        <div className="hv__bar">
          <span className="hv__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="hv__file">christine.js</span>
          <span className="hv__lang" aria-hidden="true">
            JS
          </span>
        </div>
        <pre className="hv__code">
          <code>
            <span className="ln tk-c">{'// hello, world — nice to meet you'}</span>
            <span className="ln">
              <K>const</K> <span className="tk-v">christine</span> <P>=</P> <P>{'{'}</P>
            </span>
            <span className="ln ln--i">
              builds<P>:</P> <P>[</P>
              <S>'apps'</S>
              <P>,</P> <S>'tools'</S>
              <P>,</P> <S>'joy'</S>
              <P>],</P>
            </span>
            <span className="ln ln--i">
              fueledBy<P>:</P> <S>'curiosity'</S>
              <P>,</P>
            </span>
            <span className="ln ln--i">
              believes<P>:</P> <S>'details matter'</S>
              <P>,</P>
            </span>
            <span className="ln ln--i">
              status<P>:</P>{' '}
              <span className="tk-s">
                '{status}
                <span className="hv__caret" aria-hidden="true" />'
              </span>
              <P>,</P>
            </span>
            <span className="ln">
              <P>{'};'}</P>
            </span>
          </code>
        </pre>
      </figure>

      <p className="hv__note">
        ideas in, <em>experiences</em> out
      </p>

      <Sticker id="hero" className="hv__sticker" text="christine · compiled with care · " />

      <SparkIcon className="hv__spark" />
    </div>
  )
}
