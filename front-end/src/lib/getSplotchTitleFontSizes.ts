export default function getSplotchTitleFontSizes(title: string) {
  const fontSize = {
    short: 'text-7xl sm:text-8xl lg:text-9xl',
    medium: 'text-6xl sm:text-7xl lg:text-8xl',
    long: 'leading-none text-[54px] sm:text-[66px] md:text-6xl lg:text-7xl xl:text-8xl',
    xLong: 'text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl',
  };

  return title.length > 30
    ? fontSize['xLong']
    : title.length > 20
    ? fontSize['long']
    : title.length > 10
    ? fontSize['medium']
    : fontSize['short'];
}
