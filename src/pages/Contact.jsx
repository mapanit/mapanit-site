import PageTransition from '../components/PageTransition.jsx'
import { contacts, publicProfiles } from '../data/content.js'

export default function Contact() {
  return (
    <PageTransition>
      <div className="container page">
        <div className="eyebrow">контакты</div>
        <h2 className="section-title">Связаться</h2>

        <div className="contact-page">
          <p>
            Открыт к предложениям по стажировкам и позициям младшего
            специалиста по информационной безопасности, удалённо.
          </p>

          <div className="contact-list">
            <a
              className="contact-row"
              href={`mailto:${contacts.email}`}
            >
              <div>
                <div className="label">email</div>
                <div className="value">{contacts.email}</div>
              </div>
              <span className="arrow">→</span>
            </a>

            <a
              className="contact-row"
              href={`https://t.me/${contacts.telegram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="label">telegram</div>
                <div className="value">{contacts.telegram}</div>
              </div>
              <span className="arrow">→</span>
            </a>

            <a
              className="contact-row"
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="label">github</div>
                <div className="value">
                  {contacts.github.replace('https://', '')}
                </div>
              </div>
              <span className="arrow">→</span>
            </a>
             <a
              className="contact-row"
              href={contacts.hh}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="label">hh.ru</div>
                <div className="value">
                  {contacts.hh.replace('https://', '')}
                </div>
              </div>
              <span className="arrow">→</span>
            </a>
          </div>

          <h3 className="contact-subtitle">Публичные профили</h3>
          <div className="contact-list">
            {publicProfiles.map((profile) => (
              <a
                className="contact-row"
                href={profile.url}
                key={profile.label}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <div className="label">профиль</div>
                  <div className="value">{profile.label}</div>
                </div>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
