import { useState, useEffect } from 'react'

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

function calcTimeLeft(targetDate) {
  const diff = new Date(targetDate) - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}
