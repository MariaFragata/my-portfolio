import SparkIcon from './SparkIcon'
import './Marquee.css'

const WORDS = ['wonder', 'sketch', 'build', 'debug', 'polish', 'ship', 'repeat']

function Track({ hidden }) {
  return (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {WORDS.map((word) => (
        <li key={word}>
          <span>{word}</span>
          <SparkIcon />
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__inner">
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}
