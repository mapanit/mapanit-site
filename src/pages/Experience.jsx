import PageTransition from '../components/PageTransition.jsx'
import { experience, education } from '../data/content.js'

export default function Experience() {
  return (
    <PageTransition>
      <div className="container page">
        <div className="eyebrow">опыт</div>
        <h2 className="section-title">Практика и стажировки</h2>

        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.period + item.org}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-marker">
                <span />
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <div className="timeline-org">{item.org}</div>
                <div className="timeline-place">{item.place}</div>
                <ul>
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="education-block">
          <div className="eyebrow">образование</div>
          <h3>{education.school}</h3>
          <div className="school-meta">
            {education.program} · {education.year}
          </div>
          <p>{education.diploma}</p>
        </div>
      </div>
    </PageTransition>
  )
}
