import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 40, hold = 1700 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion] = useState(prefersReducedMotion)
  const word = words[index % words.length]

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(() => setIndex((i) => i + 1), hold + 800)
      return () => clearTimeout(t)
    }

    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === word) delay = hold

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, word, reduceMotion, typeSpeed, deleteSpeed, hold])

  return reduceMotion ? word : text
}
