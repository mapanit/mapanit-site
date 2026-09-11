import PageTransition from '../components/PageTransition.jsx'
import { profile, skills, contacts } from '../data/content.js'

export default function Home() {
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
      </div>
    </PageTransition>
  )
}
