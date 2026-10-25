import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import TerminalCard from '../components/TerminalCard.jsx'
import { portfolio } from '../data/content.js'

export default function Portfolio() {
  const [platform, setPlatform] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const prefersReducedMotion = useReducedMotion()
  const projects = portfolio.filter((item) => !item.writeupFile)
  const writeups = portfolio.filter((item) => item.writeupFile)
  const difficulties = ['easy', 'medium']
  const filteredWriteups = writeups.filter(
    (item) =>
      (platform === 'all' || item.platform === platform) &&
      (difficulty === 'all' || item.difficulty === difficulty),
  )

  return (
    <PageTransition>
      <div className="container page">
        <div className="eyebrow">портфолио</div>
        <h2 className="section-title">Проекты и write-ups</h2>

        <section className="portfolio-section" aria-labelledby="projects-title">
          <h3 className="portfolio-section-title" id="projects-title">
            Проекты
          </h3>
          <div className="portfolio-grid">
            {projects.map((item) => (
              <div key={item.id}>
                <TerminalCard item={item} />
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section" aria-labelledby="writeups-title">
          <h3 className="portfolio-section-title" id="writeups-title">
            Write-ups
          </h3>
          <div className="portfolio-filters">
            <label className="portfolio-filter">
              <span>Платформа</span>
              <select
                value={platform}
                onChange={(event) => setPlatform(event.target.value)}
              >
                <option value="all">Все платформы</option>
                <option value="VulnHub">VulnHub</option>
                <option value="Hack The Box">Hack The Box</option>
              </select>
            </label>
            <label className="portfolio-filter">
              <span>Уровень</span>
              <select
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
              >
                <option value="all">Все уровни</option>
                {difficulties.map((level) => (
                  <option value={level} key={level}>
                    {level === 'easy' ? 'Easy' : 'Medium'}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="portfolio-grid">
            <AnimatePresence initial={false} mode="popLayout">
              {filteredWriteups.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.22,
                    layout: { duration: prefersReducedMotion ? 0 : 0.28 },
                  }}
                >
                  <TerminalCard item={item} />
                </motion.div>
              ))}
              {filteredWriteups.length === 0 && (
                <motion.p
                  className="portfolio-empty"
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                >
                  По выбранным фильтрам разборов нет.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
