'use server';

import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('login', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function registerAndAuthenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('register', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function getSession() {
  return await auth();
}

export async function logOut() {
  await signOut();
}

export async function createEvent(formData: CreateEventFormData) {
  const { dateTime, ...restOfData } = formData;
  const [startDateTime, endDateTime] = dateTime;
  const cancelled = false;
  const adjustedRepeatedUntil = restOfData.repeated
    ? dayjs(restOfData.repeatedUntil).endOf('day').toISOString()
    : '';
  const session = await auth();
  const email = session?.user?.email;

  const createEventData = {
    ...restOfData,
    startDateTime,
    endDateTime,
    cancelled,
    repeatedUntil: adjustedRepeatedUntil,
    email,
  };

  const response = await fetch(
    'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/createEvent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createEventData),
    }
  );
  const responseParsed = await response.json();
  console.log(responseParsed);
  revalidatePath('/');
  revalidatePath('/manage-events');
}

export async function cancelEvent(id: string, weekOf: string) {
  /* Slice removes 'EVENT#' from the partition key to get id */
  const deleteObj = {
    id: id.slice(6),
    weekOf,
    cancelled: true,
  };

  const response = await fetch(
    'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/updateEvent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteObj),
    }
  );
  const responseParsed = await response.json();
  console.log(responseParsed);
  revalidatePath('/');
  revalidatePath('/manage-events');
}

export async function getEventsByUser(): Promise<EventFromDB[]> {
  const session = await auth();
  const email = session?.user?.email;

  const response = await fetch(
    'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/queryEventsByUser',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  );

  const { events }: { events: EventFromDB[] } = await response.json();
  const weekOf = dayjs().isoWeekday(1).startOf('day').toISOString();

  return events
    .filter(
      (event) => !event.cancelled && dayjs(event.startDateTime).isAfter(weekOf)
    )
    .sort((a, b) =>
      dayjs(a.startDateTime).isAfter(dayjs(b.startDateTime)) ? 1 : -1
    );
}

export async function getEventsByWeekOf(
  weekOf: string
): Promise<EventFromDB[]> {
  const response = await fetch(
    'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/queryEventsByWeekOf',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weekOf }),
    }
  );

  const { events }: { events: EventFromDB[] } = await response.json();

  return events
    .filter((event) => !event.cancelled)
    .sort((a, b) =>
      dayjs(a.startDateTime).isAfter(dayjs(b.startDateTime)) ? 1 : -1
    );
}

export async function getEvent(
  id: string,
  weekOf: string
): Promise<EventFromDB> {
  const response = await fetch(
    'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/queryEvent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, weekOf }),
    }
  );

  const { event }: { event: EventFromDB } = await response.json();

  return event;
}
