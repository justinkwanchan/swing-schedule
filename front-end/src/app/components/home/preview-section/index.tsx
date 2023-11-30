'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';

import DanceEventPreviewCard from '../dance-event-preview-card';

import styles from '../Carousel.module.css';

type Props = {
  title: string;
};

export default function PreviewSection({ title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 80);
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div className="embla overflow-hidden">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <div>
          <button
            className="w-8 h-8 mr-4 disabled:opacity-30"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <svg className="w-3/5 h-3/5" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>
          <button
            className="w-8 h-8 disabled:opacity-30"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <svg className="w-3/5 h-3/5" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.embla__progress}>
        <div
          className={styles.embla__progress__bar}
          style={{ transform: `translateX(${scrollProgress}cqw)` }}
        />
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex -ml-8">
          <DanceEventPreviewCard />
          <DanceEventPreviewCard />
          <DanceEventPreviewCard />
          <DanceEventPreviewCard />
          <DanceEventPreviewCard />
        </div>
      </div>
    </div>
  );
}
