
import { Link } from 'react-router-dom'

const variants = {
  primary: 'rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/40',
  outline: 'rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500/20',
  ghost: 'rounded-full text-purple-300 hover:text-white hover:bg-purple-800/30',
  // Your new tech variant
  tech: 'relative group overflow-visible text-white tracking-wide transition-all active:scale-95',
}

const sizes = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-10 py-3 text-base',
  lg: 'px-12 py-4 text-xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  gradientStyles, // Optional: for passing custom gradients like your 131deg one
  ...props
}) {
  const isTech = variant === 'tech';
  
  const base = `inline-flex items-center justify-center font-medium
    transition-all duration-300 cursor-pointer focus-visible:outline-2
    focus-visible:outline-purple-400 focus-visible:outline-offset-2 
    ${variants[variant]} ${sizes[size]} ${className}`

  // The content wrapper logic
  const content = (
    <>
      {isTech && (
        <>
          {/* Main Background with custom or default tech gradient */}
          <div 
            className="absolute inset-0  bg-gradient-to-br from-[#7C3AED] via-[#A78BFA] to-[#EEE7FB]" 
            style={gradientStyles}
          />
          {/* Brackets */}
          <span className="absolute top-0 left-0 w-5 h-full border-t-2 border-l-2 border-white" />
          <span className="absolute top-0 right-0 w-5 h-full border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-0 left-0 w-5  border-b-2 border-l-2 border-white" />
          <span className="absolute bottom-0 right-0 w-5  border-b-2 border-r-2 border-white" />
        </>
      )}
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    // If it's an external link or hash link, use 'a' tag, else 'Link'
    const isExternal = href.startsWith('http') || href.startsWith('#');
    if (isExternal) {
      return (
        <a href={href} className={base} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={base} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={base} {...props}>
      {content}
    </button>
  )
}