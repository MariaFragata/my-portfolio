import useTheme from '../hooks/useTheme'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      type="button"
      className={`theme-toggle${isDark ? ' is-dark' : ''}`}
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <span className="theme-toggle__thumb" aria-hidden="true">
        <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="3.4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M8 1v1.8M8 13.2V15M1 8h1.8M13.2 8H15M3 3l1.3 1.3M11.7 11.7 13 13M13 3l-1.3 1.3M4.3 11.7 3 13" />
          </g>
        </svg>
        <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 16 16">
          <path
            d="M14 9.7A6.5 6.5 0 0 1 6.3 2a6.5 6.5 0 1 0 7.7 7.7Z"
            fill="currentColor"
          />
          <circle cx="11.4" cy="4.4" r="1.1" fill="currentColor" />
        </svg>
      </span>
    </button>
  )
}
