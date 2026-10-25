import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PageTransition from '../components/PageTransition.jsx'
import TerminalCard from '../components/TerminalCard.jsx'
import { portfolio } from '../data/content.js'

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <PageTransition>
      <div className="container page">
        <div className="eyebrow">портфолио</div>
        <h2 className="section-title">
          Проекты и write-ups
        </h2>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {portfolio.map((item) => (
              <div className="embla__slide" key={item.id}>
                <TerminalCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="embla-controls">
          <button
            className="embla-btn"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canPrev}
            aria-label="Предыдущий проект"
          >
            ←
          </button>
          <button
            className="embla-btn"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canNext}
            aria-label="Следующий проект"
          >
            →
          </button>
        </div>
      </div>
    </PageTransition>
  )
}
