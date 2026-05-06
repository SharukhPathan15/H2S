import { useEffect, useRef, memo } from 'react'

export function StarField({ count = 180 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random(),
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      opacitySpeed: Math.random() * 0.008 + 0.002,
    }))

    // Shooting stars
    const shoots = []
    const spawnShoot = () => {
      shoots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.5),
        len: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 4,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      })
    }
    const shootInterval = setInterval(spawnShoot, 3000)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((s) => {
        s.opacity += s.opacityDir * s.opacitySpeed
        if (s.opacity >= 1) { s.opacity = 1; s.opacityDir = -1 }
        if (s.opacity <= 0.1) { s.opacity = 0.1; s.opacityDir = 1 }
        s.y -= s.speed
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 180, 255, ${s.opacity})`
        ctx.fill()
      })

      // Draw shooting stars
      for (let i = shoots.length - 1; i >= 0; i--) {
        const sh = shoots[i]
        const ex = sh.x + Math.cos(sh.angle) * sh.len
        const ey = sh.y + Math.sin(sh.angle) * sh.len
        const grad = ctx.createLinearGradient(sh.x, sh.y, ex, ey)
        grad.addColorStop(0, `rgba(255,255,255,0)`)
        grad.addColorStop(1, `rgba(200,150,255,${sh.opacity})`)
        ctx.beginPath()
        ctx.moveTo(sh.x, sh.y)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
        sh.x += Math.cos(sh.angle) * sh.speed
        sh.y += Math.sin(sh.angle) * sh.speed
        sh.opacity -= 0.015
        if (sh.opacity <= 0) shoots.splice(i, 1)
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootInterval)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
