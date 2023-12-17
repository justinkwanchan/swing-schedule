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

  const [response] = await res.json();

  if (!res.ok || !response) throw new Error('Failed to fetch coordinates');

  return [response.lat, response.lon];
}
