import './Marquee.css'

const WORDS = ['wonder', 'sketch', 'build', 'debug', 'polish', 'ship', 'repeat']

function Track({ hidden }) {
  return (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {WORDS.map((word) => (
        <li key={word}>
          <span>{word}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2c.6 4.8 2.2 7.4 10 10-7.8 2.6-9.4 5.2-10 10-.6-4.8-2.2-7.4-10-10 7.8-2.6 9.4-5.2 10-10Z" />
          </svg>
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
