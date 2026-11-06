import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import TerminalCard from '../components/TerminalCard.jsx'
import { profile, skills, contacts, portfolio, publicProfiles } from '../data/content.js'
import stepikCertificateUrl from '../Certificate/stepik-certificate-169003-d2d4ebb.pdf?url'

export default function Home() {
  const projects = portfolio.filter((item) => !item.writeupFile)
  const featuredWriteups = portfolio.filter((item) =>
    ['management', 'orion'].includes(item.id),
  )

  return (
    <PageTransition>
      <div className="container page">
        <div className="hero">
          <div>
            <h1>{profile.name}</h1>
            <div className="role">{profile.role}</div>
            <p className="tagline">{profile.tagline}</p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={`https://t.me/${contacts.telegram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </a>
              <a
                className="btn btn-ghost"
                href={contacts.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>готов к удалённой работе</span>
            </div>
          </div>

          <div className="scan-panel">
            <div className="scan-panel-head">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span style={{ marginLeft: 6 }}>summary.log</span>
            </div>
            <div className="scan-panel-body">
              {profile.stats.map((s) => (
                <div className="stat-row" key={s.label}>
                  <span className="stat-value mono">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-block">
          <div className="eyebrow">обо мне</div>
          <p>{profile.about}</p>
        </div>

        <section className="portfolio-section home-section" aria-labelledby="writeups-title">
          <h2 className="portfolio-section-title" id="writeups-title">
            Write-ups / Разборы
          </h2>
          <div className="portfolio-grid">
            {featuredWriteups.map((item) => (
              <div key={item.id}>
                <TerminalCard item={item} />
              </div>
            ))}
          </div>
          <Link className="home-section-link" to="/portfolio">
            Все разборы →
          </Link>
        </section>

        <section className="portfolio-section home-section" aria-labelledby="projects-title">
          <h2 className="portfolio-section-title" id="projects-title">
            Проекты
          </h2>
          <div className="portfolio-grid">
            {projects.map((item) => (
              <div key={item.id}>
                <TerminalCard item={item} />
              </div>
            ))}
          </div>
          <Link className="home-section-link" to="/portfolio">
            Все проекты →
          </Link>
        </section>

        <section className="portfolio-section home-section" aria-labelledby="certificates-title">
          <h2 className="portfolio-section-title" id="certificates-title">
            Сертификаты / Обучение
          </h2>
          <div className="certificate-card">
            <div>
              <h3>Stepik</h3>
              <p>Сертификат о прохождении обучения</p>
            </div>
            <a
              className="btn btn-ghost"
              href={stepikCertificateUrl}
              target="_blank"
              rel="noreferrer"
            >
              Открыть сертификат (PDF) ↗
            </a>
          </div>
        </section>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, tags]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="skill-tags">
                {tags.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <nav className="home-profiles" aria-label="Публичные профили">
          <span>Профили:</span>
          {publicProfiles.map((publicProfile) => (
            <a
              href={publicProfile.url}
              key={publicProfile.label}
              target="_blank"
              rel="noreferrer"
            >
              {publicProfile.label} ↗
            </a>
          ))}
        </nav>
      </div>
    </PageTransition>
  )
}
