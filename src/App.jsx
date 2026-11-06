import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, NavLink } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import { contacts, publicProfiles } from './data/content.js'

const WriteUp = lazy(() => import('./pages/WriteUp.jsx'))

const navItems = [
  { to: '/', label: 'главная' },
  { to: '/experience', label: 'опыт' },
  { to: '/portfolio', label: 'портфолио' },
  { to: '/contact', label: 'контакты' },
]

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <span>pavel@security:~$</span>
          <span className="cursor" />
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Цветков Павел</span>
        <nav className="footer-links" aria-label="Ссылки на профили и связь">
          <a href={contacts.github} target="_blank" rel="noreferrer">GitHub</a>
          <a
            href={`https://t.me/${contacts.telegram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          {publicProfiles.map((profile) => (
            <a href={profile.url} key={profile.label} target="_blank" rel="noreferrer">
              {profile.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="shell">
      <Nav />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/portfolio/:writeup"
              element={
                <Suspense fallback={<p className="container page">Открываю write-up…</p>}>
                  <WriteUp />
                </Suspense>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
