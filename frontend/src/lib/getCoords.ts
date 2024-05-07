export default async function getCoords(
  street: string,
  city: string
): Promise<[number, number]> {
  const data = {
    street,
    city,
    country: 'canada',
    format: 'json',
  };

  const searchParams = new URLSearchParams(data);

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?${searchParams}`
  );

  if (!res.ok) throw new Error('Fetch request failed');

  const [response] = await res.json();

  if (!response) throw new Error('Failed to fetch coordinates');

  return [response.lat, response.lon];
}
