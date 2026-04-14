import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="seeking-banner">
        Seeking product management and AI-enabled client solution roles <span>|</span> Discovery, requirements, delivery, and user-centered execution
      </div>
      <header className="site-header">
        <NavLink to="/" className="monogram">VM</NavLink>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Victor Mikell. Built with React, Vite, and Sass.</p>
      </footer>
    </>
  )
}
