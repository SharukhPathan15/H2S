import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('section-hidden')
          el.classList.add('section-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    el.classList.add('section-hidden')
    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
