'use server';

import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);
import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

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
  const { startDateTime, repeated } = formData;
  const id = crypto.randomUUID();
  const cancelled = false;
  const weekOf = dayjs(startDateTime).startOf('isoWeek').format();
  const session = await auth();
  const email = session?.user?.email;

  if (!repeated) {
    formData.repeatedUntil = '';
  }

  const createEventData = {
    ...formData,
    id,
    cancelled,
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
