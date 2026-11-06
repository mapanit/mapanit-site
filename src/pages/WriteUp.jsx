import { memo, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import PageTransition from '../components/PageTransition.jsx'
import { portfolio } from '../data/content.js'

const writeupUrls = import.meta.glob('../Write-ups/**/*.md', {
  eager: true,
  query: '?url',
  import: 'default',
})
const writeupImageUrls = import.meta.glob(
  '../Write-ups/**/*.{png,jpg,jpeg,gif,webp,svg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

function prepareMarkdown(markdown, markdownPath) {
  return markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
    .replace(/^!\[\[([^\]]+)\]\][ \t]*\r?$/gm, (_, reference) => {
      const filename = reference.split('|')[0].trim().replace(/\\/g, '/')
      const directory = markdownPath.slice(0, markdownPath.lastIndexOf('/') + 1)
      const relativePath = filename.startsWith('../Write-ups/')
        ? filename
        : `${directory}${filename}`
      const imageUrl =
        writeupImageUrls[relativePath] ||
        Object.entries(writeupImageUrls).find(([path]) =>
          path.endsWith(`/${filename}`),
        )?.[1]

      return imageUrl
        ? `![${filename}](${imageUrl})`
        : `> Скриншот «${filename}» не включён в файлы сайта.`
    })
}

function splitMarkdownSections(markdown) {
  const sections = []
  let currentSection = []
  let codeFence

  for (const line of markdown.split(/\r?\n/)) {
    const fence = line.match(/^ {0,3}(`{3,}|~{3,})/)
    if (fence) {
      if (!codeFence) {
        codeFence = { character: fence[1][0], length: fence[1].length }
      } else if (
        fence[1][0] === codeFence.character &&
        fence[1].length >= codeFence.length
      ) {
        codeFence = undefined
      }
    }

    if (!codeFence && /^ {0,3}#{1,6}\s/.test(line) && currentSection.length) {
      sections.push(currentSection.join('\n'))
      currentSection = []
    }
    currentSection.push(line)
  }

  if (currentSection.length) {
    sections.push(currentSection.join('\n'))
  }

  return sections.filter((section) => section.trim())
}

function transformUrl(url) {
  if (/^data:image\/(?:png|jpe?g|gif|webp);base64,/i.test(url)) {
    return url
  }

  return defaultUrlTransform(url)
}

const markdownComponents = {
  img: ({ node, ...props }) => (
    <img {...props} loading="lazy" decoding="async" />
  ),
}

const MarkdownSection = memo(function MarkdownSection({ markdown }) {
  return (
    <article className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        urlTransform={transformUrl}
        components={markdownComponents}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  )
})

export default function WriteUp() {
  const { writeup } = useParams()
  const item = portfolio.find((entry) => entry.id === writeup && entry.writeupFile)
  const markdownPath = item && Object.keys(writeupUrls).find((path) =>
    path.endsWith(`/${item.writeupFile}`),
  )
  const markdownUrl = markdownPath && writeupUrls[markdownPath]
  const [sections, setSections] = useState([])
  const [visibleSections, setVisibleSections] = useState(0)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const loadMoreRef = useRef(null)

  useEffect(() => {
    if (
      loading ||
      error ||
      visibleSections >= sections.length ||
      !loadMoreRef.current
    ) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSections((count) => Math.min(count + 1, sections.length))
        }
      },
      { rootMargin: '500px 0px' },
    )
    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [error, loading, sections.length, visibleSections])

  useEffect(() => {
    const controller = new AbortController()

    async function loadWriteUp() {
      setLoading(true)
      setError('')
      setSections([])
      setVisibleSections(0)

      if (!markdownUrl) {
        setError('Не удалось найти файл этого write-up.')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(markdownUrl, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Сервер вернул ошибку ${response.status}.`)
        }

        const content = prepareMarkdown(await response.text(), markdownPath)
        const nextSections = splitMarkdownSections(content)
        setSections(nextSections)
        setVisibleSections(Math.min(1, nextSections.length))
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(`Не удалось загрузить write-up. ${loadError.message}`)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadWriteUp()
    return () => controller.abort()
  }, [markdownPath, markdownUrl])

  const remainingSections = sections.length - visibleSections
  const progress = sections.length
    ? Math.round((visibleSections / sections.length) * 100)
    : 0

  return (
    <PageTransition>
      <div className="container page writeup-page">
        <Link className="writeup-back" to="/portfolio">
          ← Назад к портфолио
        </Link>

        {!item && <p role="alert">Такого write-up нет в портфолио.</p>}
        {loading && (
          <div className="writeup-loading" role="status" aria-live="polite">
            <span className="writeup-spinner" aria-hidden="true" />
            <span>Загружаю write-up…</span>
          </div>
        )}
        {error && <p className="writeup-error" role="alert">{error}</p>}
        {!loading && !error && sections.length > 1 && (
          <div
            className="writeup-progress"
            role="progressbar"
            aria-label="Прогресс отображения write-up"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div className="writeup-progress-label">
              <span>
                Показано разделов: {visibleSections} из {sections.length}
              </span>
              <span>
                {remainingSections
                  ? `Осталось: ${remainingSections}`
                  : 'Отчёт загружен'}
              </span>
            </div>
            <div className="writeup-progress-track" aria-hidden="true">
              <div
                className="writeup-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        {!loading && !error && sections.length > 0 && (
          <div className="writeup-content">
            {sections.slice(0, visibleSections).map((section, index) => (
              <MarkdownSection markdown={section} key={index} />
            ))}
            {remainingSections > 0 && (
              <div
                className="writeup-load-sentinel"
                ref={loadMoreRef}
                aria-hidden="true"
              />
            )}
          </div>
        )}
      </div>
    </PageTransition>
  )
}
