type Address = {
  street: string;
  city: string;
};

export default async function getCoords(
  address: Address
): Promise<[number, number]> {
  const data = {
    ...address,
    country: 'canada',
    format: 'json',
  };

  const searchParams = new URLSearchParams(data);

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?${searchParams}`
  );

  if (!res.ok) throw new Error('Failed to fetch coordinates');

  const [response] = await res.json();

  return [response.lat, response.lon];
}
