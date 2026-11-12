import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import TerminalCard from '../components/TerminalCard.jsx'
import { difficultyLabels, portfolio } from '../data/content.js'

export default function Portfolio() {
  const [platform, setPlatform] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const prefersReducedMotion = useReducedMotion()
  const projects = portfolio.filter((item) => !item.writeupFile)
  const writeups = portfolio.filter((item) => item.writeupFile)
  const platforms = [...new Set(writeups.map((item) => item.platform))].sort()
  const platformWriteups =
    platform === 'all'
      ? writeups
      : writeups.filter((item) => item.platform === platform)
  const academyDifficulties =
    platform === 'all' || platform === 'PortSwigger'
      ? ['Apprentice', 'Practitioner', 'Expert']
      : []
  const difficulties = [
    ...new Set([
      ...platformWriteups.map((item) => item.difficulty),
      ...academyDifficulties,
    ]),
  ].sort(
    (first, second) =>
      (difficultyLabels[first] || first).localeCompare(
        difficultyLabels[second] || second,
        'ru',
      ),
  )
  const filteredWriteups = writeups.filter(
    (item) =>
      (platform === 'all' || item.platform === platform) &&
      (difficulty === 'all' || item.difficulty === difficulty),
  )
  const machineWriteups = filteredWriteups.filter(
    (item) => item.platform !== 'PortSwigger',
  )
  const academyWriteups = filteredWriteups.filter(
    (item) => item.platform === 'PortSwigger',
  )
  const renderWriteups = (items) => (
    <div className="portfolio-grid">
      <AnimatePresence initial={false} mode="popLayout">
        {items.map((item) => (
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
      </AnimatePresence>
    </div>
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
            Разборы и лабораторные
          </h3>
          <div className="portfolio-filters">
            <label className="portfolio-filter">
              <span>Платформа</span>
              <select
                value={platform}
                onChange={(event) => setPlatform(event.target.value)}
              >
                <option value="all">Все платформы</option>
                {platforms.map((name) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
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
                    {difficultyLabels[level] || level}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {machineWriteups.length > 0 && (
            <section className="writeup-group" aria-labelledby="machines-title">
              <h4 className="writeup-group-title" id="machines-title">
                Виртуальные машины
              </h4>
              {renderWriteups(machineWriteups)}
            </section>
          )}
          {academyWriteups.length > 0 && (
            <section className="writeup-group" aria-labelledby="portswigger-title">
              <h4 className="writeup-group-title" id="portswigger-title">
                PortSwigger Web Security Academy
              </h4>
              <p className="writeup-group-description">
                Практика по отдельным темам веб-безопасности
              </p>
              {renderWriteups(academyWriteups)}
            </section>
          )}
          {filteredWriteups.length === 0 && (
            <p className="portfolio-empty">
              По выбранным фильтрам разборов нет.
            </p>
          )}
        </section>
      </div>
    </PageTransition>
  )
}
