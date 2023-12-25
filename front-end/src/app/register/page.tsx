import Image from 'next/image';
import Link from 'next/link';
import alyssa from 'public/Alyssa.png';

export default function Register() {
  return (
    <div className="flex h-[calc(100svh-238px)] w-full bg-dark-grey">
      <div className="flex gap-8 bg-white w-11/12 h-[95%] rounded-xl m-auto p-6">
        <div className="hidden md:flex w-1/2">
          <Image
            src={alyssa}
            alt={'Alyssa dancing'}
            className="rounded-xl w-auto h-auto max-h-full m-auto"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col w-full md:w-5/6 m-auto">
            <h1 className="text-3xl font-medium self-center">
              Create your account
            </h1>

            <form>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-sub-text-grey"
                  >
                    Full Name
                  </label>
                  <div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="w-full rounded-2xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-sub-text-grey"
                  >
                    Email
                  </label>
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="w-full rounded-2xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="new-password"
                    className="text-sm font-medium text-sub-text-grey"
                  >
                    New Password
                  </label>
                  <div>
                    <input
                      id="new-password"
                      name="new-password"
                      type="password"
                      autoComplete="new-password"
                      className="w-full rounded-2xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="new-password"
                    className="text-sm font-medium text-sub-text-grey"
                  >
                    Confirm Password
                  </label>
                  <div>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      className="w-full rounded-2xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
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

                <div className="col-span-2 flex gap-3 mt-4 items-center">
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
                </div>
              </div>
            </form>

            <div className="relative flex w-full h-8 mt-4">
              <div className="w-full h-[1px] bg-gradient-to-r from-white via-light-grey to-white m-auto"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 bg-white border rounded-full text-xs text-sub-text-grey">
                OR
              </div>
            </div>

            <button className="w-full py-3 border rounded-2xl mt-6 text-sm text-sub-text-grey">
              Continue with Google
            </button>

            <div className="flex gap-1 self-center text-xs mt-12">
              <p className="text-sub-text-grey">Already have an account?</p>
              <Link href="/login" className="text-[#FF5678]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
