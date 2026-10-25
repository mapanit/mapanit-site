import { Link } from 'react-router-dom'
import SeverityBadge from './SeverityBadge.jsx'

export default function TerminalCard({ item }) {
  return (
    <div className="term-card">
      <div className="term-head">
        <div className="term-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <SeverityBadge severity={item.severity} />
      </div>

      <div className="term-body">
        {item.terminalLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="term-info">
        <h3>{item.title}</h3>
        {item.platform && item.difficulty && (
          <div className="term-meta">
            {item.platform} · {item.difficulty}
          </div>
        )}
        <p>{item.summary}</p>
        <div className="term-stack">
          {item.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        {item.writeupFile ? (
          <Link className="term-link" to={`/portfolio/${item.id}`}>
            Читать write-up →
          </Link>
        ) : (
          <a
            className="term-link"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Проект на GitHub →
          </a>
        )}
      </div>
    </div>
  )
}
