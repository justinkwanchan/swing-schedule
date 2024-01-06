'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import DanceEventPreviewCard from '../dance-event-preview-card';
import PreviousFlyerCard from '../previous-flyer-card';
import carouselScrollBack from 'public/carousel-scroll-back.svg';
import carouselScrollForward from 'public/carousel-scroll-forward.svg';
import { SOCIAL_DANCES, PREVIOUS_FLYERS } from '@/lib/constants';

import styles from '../Carousel.module.css';

type Props = {
  title: typeof SOCIAL_DANCES | typeof PREVIOUS_FLYERS;
};

export default function PreviewSection({ title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const tempEvents = [
    {
      id: 'lapin1',
      image: 'image',
      datetime: 'MON DEC 18 @ 8:15PM',
      title: 'Swing Lapin Lundi',
      organizer: 'Swing Lapin Lundi',
      location: 'La Cenne',
      address: '7755 St Laurent Blvd Suite 300, Montreal, Quebec H2R 1X1',
    },
    {
      id: '88swing1',
      image: 'image',
      datetime: 'TUE JAN 2 @ 8:00PM',
      title: 'Les Mardis 88-Swing Chez Ernest',
      organizer: 'Studio 88 Swing',
      location: 'Chez Ernest - Comptoir de curiosités',
      address: '6596 Rue St-Hubert, Montreal, QC H2S 2M3',
    },
    {
      id: 'cats1',
      image: 'image',
      datetime: 'FRI DEC 15 @ 7:30PM',
      title: 'Downtown Stomp',
      organizer: "Cat's Corner",
      location: 'Polish White Eagle Society',
      address: '1956 Rue Frontenac, Montréal, QC H2K 2Z1',
    },
    {
      id: 'hochela1',
      image: 'image',
      datetime: 'WED JAN 3 @ 8:00PM',
      title: 'Hochela SWING',
      organizer: 'Hochela SWING',
      location: 'Taverne Lady Davidson',
      address: '3400 Ontario St E, Montreal, Quebec H1W 1P9',
    },
    {
      id: 'bhc1',
      image: 'image',
      datetime: 'FRI JAN 12 @ 8:30PM',
      title: 'Soirée Blues et Slow Jazz',
      organizer: 'Barrelhouse Club',
      location: 'Studio Tango Montréal',
      address: '7755 Boul. Saint-Laurent #200-A&B, Montreal, QC H2R 1X1',
    },
  ];

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
        <div className="flex w-11/12 mx-auto md:w-max md:mx-0">
          <h1 className="font-bold text-xl mr-4">{title}</h1>
          <Link
            href={title === SOCIAL_DANCES ? '/events' : '/previous-flyers'}
            className="underline text-cyan-400 text-sm self-center"
          >
            View all
          </Link>
        </div>

        <div className="hidden md:block">
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

      <div
        className={`${styles.embla__progress} w-11/12 mx-auto md:w-full md:mx-0`}
      >
        <div
          className={styles.embla__progress__bar}
          style={{ transform: `translateX(${scrollProgress}cqw)` }}
        />
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex mr-4 md:-ml-8 md:mr-0">
          {title === SOCIAL_DANCES ? (
            <>
              {tempEvents.map((tempEvent) => (
                <DanceEventPreviewCard
                  isCarouseled={true}
                  event={tempEvent}
                  key={tempEvent.id}
                />
              ))}
            </>
          ) : (
            <>
              <PreviousFlyerCard isCarouseled={true} dates="OCT 8 - OCT 14" />
              <PreviousFlyerCard isCarouseled={true} dates="OCT 1 - OCT 7" />
              <PreviousFlyerCard isCarouseled={true} dates="OCT 24 - OCT 30" />
              <PreviousFlyerCard isCarouseled={true} dates="OCT 31 - NOV 6" />
              <PreviousFlyerCard isCarouseled={true} dates="OCT 31 - NOV 6" />
              <PreviousFlyerCard isCarouseled={true} dates="OCT 31 - NOV 6" />
              <PreviousFlyerCard isCarouseled={true} dates="OCT 31 - NOV 6" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
