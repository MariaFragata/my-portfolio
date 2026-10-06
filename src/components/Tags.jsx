import './Tags.css'

export default function Tags({ items, className = '' }) {
  return (
    <ul className={`tags ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}
