import { memo } from 'react'

export function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-[#7C3AED] text-[28px] font-medium uppercase font-display ${className}`}>
      {children}
    </p>
  )
}
