import './Tags.css'

export default function Tags({ items, className = '' }) {
  return (
    <ul className={`tags ${className}`.trim()}>
      {items.map((item, i) => (
        <li key={item} className="tag" style={{ '--t': i }}>
          {item}
        </li>
      ))}
    </ul>
  )
}
