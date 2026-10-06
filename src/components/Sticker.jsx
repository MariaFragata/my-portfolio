import SparkIcon from './SparkIcon'
import './Sticker.css'

export default function Sticker({ id, text, className = '' }) {
  const pathId = `sticker-path-${id}`
  return (
    <div className={`sticker ${className}`.trim()} aria-hidden="true">
      <svg className="sticker__ring" viewBox="0 0 120 120">
        <defs>
          <path id={pathId} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text>
          <textPath href={`#${pathId}`} textLength="274" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="sticker__core">
        <SparkIcon size={22} />
      </span>
    </div>
  )
}
