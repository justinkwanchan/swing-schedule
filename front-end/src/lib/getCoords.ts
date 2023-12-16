export default async function getCoords(): Promise<[number, number]> {
  const data = {
    street: '7755 st laurent',
    city: 'montreal',
    country: 'canada',
    format: 'json',
  };

  const searchParams2 = new URLSearchParams(data);

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?${searchParams2}`
  );

  if (!res.ok) throw new Error('Failed to fetch coordinates');

  const [response] = await res.json();

  return [response.lat, response.lon];
}
