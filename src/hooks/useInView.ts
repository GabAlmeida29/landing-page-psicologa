import { useEffect, useRef, useState } from 'react'
import { CONFIG } from '../constants'

export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: CONFIG.revealThreshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
