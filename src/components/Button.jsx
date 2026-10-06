import './Button.css'

export function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      className={`btn__arrow btn__arrow--${direction}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Button({ href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant} ${className}`.trim()} {...rest}>
      <span className="btn__label">{children}</span>
      {arrow && <ArrowIcon direction={arrow === true ? 'right' : arrow} />}
    </a>
  )
}
