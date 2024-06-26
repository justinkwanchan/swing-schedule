'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate, registerAndAuthenticate } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import alyssa from 'public/Alyssa.png';

export default function LoginForm({ isRegister }: { isRegister: boolean }) {
  const [loginErrorMessage, dispatchLogin] = useFormState(
    authenticate,
    undefined
  );
  const [registerErrorMessage, dispatchRegister] = useFormState(
    registerAndAuthenticate,
    undefined
  );
  const { pending } = useFormStatus();

  const inputLabelClasses = 'text-sm font-medium text-sub-text-grey';
  const inputFieldClasses =
    'w-full rounded-2xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6';

  return (
    <div className="flex min-h-[calc(100svh-238px)] w-full bg-dark-grey">
      <div className="flex justify-center gap-8 bg-white w-11/12 rounded-xl m-auto my-5 p-6">
        <div className="hidden md:flex w-1/2 md:max-w-lg">
          <Image
            src={alyssa}
            alt={'Alyssa dancing'}
            className="rounded-xl w-auto h-auto max-h-full m-auto"
          />
        </div>

        <div className="w-full md:w-1/2 md:max-w-lg">
          <div className="flex flex-col w-full md:w-5/6 m-auto">
            <h1 className="text-3xl font-medium self-center">
              {isRegister ? 'Create your account' : 'Welcome Back!'}
            </h1>

            <form action={isRegister ? dispatchRegister : dispatchLogin}>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2">
                {isRegister && (
                  <>
                    {/* <div>
                      <label htmlFor="given-name" className={inputLabelClasses}>
                        Given Name
                      </label>
                      <div>
                        <input
                          id="given-name"
                          name="given-name"
                          type="text"
                          autoComplete="given-name"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="family-name"
                        className={inputLabelClasses}
                      >
                        Family Name
                      </label>
                      <div>
                        <input
                          id="family-name"
                          name="family-name"
                          type="text"
                          autoComplete="family-name"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className={inputLabelClasses}
                    >
                      Full Name
                    </label>
                    <div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className={inputFieldClasses}
                      />
                    </div>
                  </div> */}
                  </>
                )}

                {isRegister ? (
                  <>
                    <div className="col-span-2">
                      <label htmlFor="email" className={inputLabelClasses}>
                        Email
                      </label>
                      <div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="new-password"
                        className={inputLabelClasses}
                      >
                        New Password
                      </label>
                      <div>
                        <input
                          id="new-password"
                          name="new-password"
                          type="password"
                          autoComplete="new-password"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="confirm-password"
                        className={inputLabelClasses}
                      >
                        Confirm Password
                      </label>
                      <div>
                        <input
                          id="confirm-password"
                          name="confirm-password"
                          type="password"
                          autoComplete="new-password"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div>

                    <div className="col-span-2 mt-4">
                      <button
                        type="submit"
                        className="font-medium bg-[#BDFFF3] w-full py-2 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)]"
                      >
                        Sign Up
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2">
                      <label htmlFor="email" className={inputLabelClasses}>
                        Email
                      </label>
                      <div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="current-password"
                        className={inputLabelClasses}
                      >
                        Password
                      </label>
                      <div>
                        <input
                          id="current-password"
                          name="current-password"
                          type="password"
                          autoComplete="current-password"
                          className={inputFieldClasses}
                        />
                      </div>
                    </div>

                    <div className="col-span-2 mt-4">
                      <button
                        type="submit"
                        className="font-medium bg-[#BDFFF3] w-full py-2 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)]"
                        aria-disabled={pending}
                      >
                        Log In
                      </button>
                    </div>
                    <div
                      className="flex h-8 items-end space-x-1"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {(loginErrorMessage || registerErrorMessage) && (
                        <>
                          <p className="text-sm text-red-500">
                            {loginErrorMessage || registerErrorMessage}
                          </p>
                        </>
                      )}
                    </div>
                  </>
                )}

                {/* <div className="col-span-2 flex gap-3 mt-4 items-center">
                  <div className="flex h-6 items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-transparent"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-xs text-sub-text-grey"
                  >
                    Remember me for 30 days
                  </label>
                </div> */}
              </div>
            </form>

            {/* <div className="relative flex w-full h-8 mt-4">
              <div className="w-full h-[1px] bg-gradient-to-r from-white via-light-grey to-white m-auto"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 bg-white border rounded-full text-xs text-sub-text-grey">
                OR
              </div>
            </div>

            <button className="w-full py-3 border rounded-2xl mt-6 text-sm text-sub-text-grey">
              Continue with Google
            </button> */}

            <div className="flex gap-1 self-center text-xs mt-12">
              <p className="text-sub-text-grey">
                {isRegister
                  ? 'Already have an account?'
                  : "Don't have an account?"}
              </p>
              <Link
                href={isRegister ? '/login' : '/register'}
                className="text-[#FF5678]"
              >
                {isRegister ? 'Login' : 'Sign Up'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
