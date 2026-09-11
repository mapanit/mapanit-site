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
        <p>{item.summary}</p>
        <div className="term-stack">
          {item.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <a
          className="term-link"
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          write-up на GitHub →
        </a>
      </div>
    </div>
  )
}
