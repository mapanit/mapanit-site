import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import PageTransition from '../components/PageTransition.jsx'
import { portfolio } from '../data/content.js'

const writeupUrls = import.meta.glob('../Write-ups/*.md', {
  eager: true,
  query: '?url',
  import: 'default',
})

function prepareMarkdown(markdown) {
  return markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
    .replace(/^!\[\[([^\]]+)\]\]\s*$/gm, (_, reference) => {
      const filename = reference.split('|')[0]
      return `> Скриншот «${filename}» не включён в файлы сайта.`
    })
}

function transformUrl(url) {
  if (/^data:image\/(?:png|jpe?g|gif|webp);base64,/i.test(url)) {
    return url
  }

  return defaultUrlTransform(url)
}

export default function WriteUp() {
  const { writeup } = useParams()
  const item = portfolio.find((entry) => entry.id === writeup && entry.writeupFile)
  const markdownUrl = item && writeupUrls[`../Write-ups/${item.writeupFile}`]
  const [markdown, setMarkdown] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadWriteUp() {
      setLoading(true)
      setError('')
      setMarkdown('')

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

        setMarkdown(prepareMarkdown(await response.text()))
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
  }, [markdownUrl])

  return (
    <PageTransition>
      <div className="container page writeup-page">
        <Link className="writeup-back" to="/portfolio">
          ← Назад к портфолио
        </Link>

        {!item && <p role="alert">Такого write-up нет в портфолио.</p>}
        {loading && <p>Загружаю write-up…</p>}
        {error && <p className="writeup-error" role="alert">{error}</p>}
        {!loading && !error && markdown && (
          <article className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              urlTransform={transformUrl}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </PageTransition>
  )
}
