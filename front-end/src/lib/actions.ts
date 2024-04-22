'use server';

import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);
import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';

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
  const id = crypto.randomUUID();
  const cancelled = false;
  const weekOf = dayjs(startDateTime).startOf('isoWeek').format();
  const adjustedRepeatedUntil = restOfData.repeated
    ? dayjs(restOfData.repeatedUntil).endOf('day').format()
    : '';
  const session = await auth();
  const email = session?.user?.email;

  const createEventData = {
    ...restOfData,
    id,
    startDateTime,
    endDateTime,
    cancelled,
    repeatedUntil: adjustedRepeatedUntil,
    weekOf,
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
  revalidatePath('/create-event');
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

  return events.filter(
    (event) => !event.cancelled && dayjs(event.startDateTime).isAfter(dayjs())
  );
}
