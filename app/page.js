import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        {/* Left Side */}
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps,
            projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              method="GET"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Tailwind CSS components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>
      <hr className="mx-20 my-10" />
      <section>
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Choose Your Plan</p>
              <p className="mt-4 max-w-2xl text-lg text-gray-400 lg:mx-auto">Find the perfect plan for your needs.</p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Basic Plan */}
                <div className="border shadow-xl rounded-xl p-6 transform transition duration-500 hover:scale-105">
                  <h3 className="text-lg leading-6 font-medium text-center">Basic</h3>
                  <p className="mt-4 text-gray-400 font-bold text-center">$10/month</p>
                  <ul className="mt-6 space-y-4">
                    <li className="text-gray-500 text-center">Feature 1</li>
                    <li className="text-gray-500 text-center">Feature 2</li>
                    <li className="text-gray-500 text-center">Feature 3</li>
                  </ul>
                  <div className="mt-6">
                  <button className="block w-full text-center rounded-full bg-purple-700 hover:bg-purple-800 text-white py-2">Buy Now</button>
                  </div>
                </div>
                {/* Standard Plan */}
                <div className="border border-purple-800 shadow-xl rounded-xl p-6 transform transition duration-500 hover:scale-105">
                  <h3 className="text-lg text-purple-800 leading-6 font-bold text-center">Standard</h3>
                  <p className="mt-4 border mx-24 rounded-full bg-purple-800 font-bold text-center">$20/month</p>
                  <ul className="mt-6 space-y-4">
                    <li className="text-gray-500 text-center">Feature 1</li>
                    <li className="text-gray-500 text-center">Feature 2</li>
                    <li className="text-gray-500 text-center">Feature 3</li>
                  </ul>
                  <div className="mt-6">
                    <button className="block w-full text-center rounded-full bg-purple-700 hover:bg-purple-800 text-white py-2">Buy Now</button>
                  </div>
                </div>
                {/* Premium Plan */}
                <div className="border shadow-xl rounded-xl p-6 transform transition duration-500 hover:scale-105">
                  <h3 className="text-lg leading-6 font-medium text-center">Premium</h3>
                  <p className="mt-4 text-gray-400 font-bold text-center">$30/month</p>
                  <ul className="mt-6 space-y-4">
                    <li className="text-gray-500 text-center">Feature 1</li>
                    <li className="text-gray-500 text-center">Feature 2</li>
                    <li className="text-gray-500 text-center">Feature 3</li>
                  </ul>
                  <div className="mt-6">
                  <button className="block w-full text-center rounded-full bg-purple-700 hover:bg-purple-800 text-white py-2">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
