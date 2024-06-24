export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-black px-4 py-14 md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col space-x-6 space-x-reverse lg:flex-row-reverse">
          <div className="space-y-6 lg:w-full">
            <p className="text-sm font-bold uppercase text-gray-600">
              sign up for yocci updates
            </p>
            <p className="text-sm text-white">
              By entering your email address below, you consent to receiving our
              newsletter with access to our latest collections, events and
              initiatives. More details on this are provided in our Privacy
              Policy.
            </p>
            <form>
              <div className="relative z-0 w-full">
                <input
                  className="peer block w-full appearance-none bg-transparent px-2 pb-4 pt-6 text-base border-b border-gray-700 text-white focus:border-white focus:outline-none"
                  placeholder=" "
                  required
                  id="email"
                  name="email"
                  value=""
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-5 -z-10 origin-[0] -translate-y-4 scale-75 transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600"
                >
                  Email*
                </label>
              </div>
            </form>
          </div>
          <div className="my-20 lg:hidden">
            <div className="border-b py-6 border-gray-700">
              <button
                className="flex w-full justify-between text-left font-bold focus:outline-none"
                id="headlessui-disclosure-button-:r3:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="text-xs uppercase text-gray-400">
                  my orders
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className=" h-5 w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="border-b py-6 border-gray-700">
              <button
                className="flex w-full justify-between text-left font-bold focus:outline-none"
                id="headlessui-disclosure-button-:r5:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="text-xs uppercase text-gray-400">
                  the company
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className=" h-5 w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden w-full grid-cols-2 gap-x-12 gap-y-16 lg:grid">
            <div>
              <span className="text-xs font-bold uppercase text-gray-400">
                my orders
              </span>
              <ul className="space-y-5 pt-5">
                <li>
                  <a
                    className="text-sm text-white underline underline-offset-4 hover:no-underline"
                    href="/my-orders"
                  >
                    My Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-gray-400">
                the company
              </span>
              <ul className="space-y-5 pt-5">
                <li>
                  <a
                    className="text-sm text-white underline underline-offset-4 hover:no-underline"
                    href="/"
                  >
                    About Yocci
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="py-10 text-center text-sm font-bold text-white lg:py-20">
          © 2016-2022 Yocci Yocci S.p.A. - All rights reserved.
        </p>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 758.8 200"
            className="fill-white"
          >
            <text
              transform="translate(0 163.4)"
              fontFamily="Granjon, Granjon"
              fontSize="200"
              letterSpacing=".16em"
            >
              <tspan x="0" y="0">
                YOCCI
              </tspan>
            </text>
          </svg>
        </a>
      </div>
    </footer>
  );
}
