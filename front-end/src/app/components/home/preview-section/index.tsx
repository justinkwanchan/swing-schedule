'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import DanceEventPreviewCard from '../dance-event-preview-card';
import PreviousFlyerCard from '../previous-flyer-card';
import carouselScrollBack from 'public/carousel-scroll-back.svg';
import carouselScrollForward from 'public/carousel-scroll-forward.svg';
import { SOCIAL_DANCES } from '@/lib/constants';

import styles from '../Carousel.module.css';

type Props = {
  title: 'Upcoming Social Dances' | 'Previous Flyers';
};

export default function PreviewSection({ title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const tempEvent = {
    id: 'cats78',
    image: 'image',
    datetime: 'FRI OCT 16 @ 7:30PM',
    title: "Cat's Corner Weekly Dance",
    organizer: "Cat's Corner",
    location: 'Polish White Eagle Society',
    address: '1956 Rue Frontenac, Montréal, QC H2K 2Z1',
  };

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
        <div className="flex">
          <h1 className="font-bold text-xl mr-4">{title}</h1>
          <Link
            href={title === SOCIAL_DANCES ? '/events' : '/previous-flyers'}
            className="underline text-cyan-400 text-sm self-center"
          >
            View all
          </Link>
        </div>

        <div>
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="w-8 h-8 mr-4 disabled:opacity-30"
          >
            <Image
              src={carouselScrollBack}
              alt={'Scroll Back'}
              className="w-3/5 h-3/5 mx-auto"
            />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="w-8 h-8 disabled:opacity-30"
          >
            <Image
              src={carouselScrollForward}
              alt={'Scroll Forward'}
              className="w-3/5 h-3/5 mx-auto"
            />
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
          {title === SOCIAL_DANCES ? (
            <>
              <DanceEventPreviewCard event={tempEvent} />
              <DanceEventPreviewCard event={tempEvent} />
              <DanceEventPreviewCard event={tempEvent} />
              <DanceEventPreviewCard event={tempEvent} />
              <DanceEventPreviewCard event={tempEvent} />
            </>
          ) : (
            <>
              <PreviousFlyerCard dates="OCT 8 - OCT 14" />
              <PreviousFlyerCard dates="OCT 1 - OCT 7" />
              <PreviousFlyerCard dates="OCT 24 - OCT 30" />
              <PreviousFlyerCard dates="OCT 31 - NOV 6" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
