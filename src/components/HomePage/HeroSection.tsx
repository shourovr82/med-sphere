import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" px-6 py-16 min-h-screen mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              <span className="text-[#47177e]"> Welcome to Med Sphere</span>
            </h1>
            <p>Your Gateway to Exceptional Medical Care</p>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Your Health, Our Priority: Exceptional Medical Treatments at Med
              Sphere Your
              <span className="font-medium text-[#47177e]"> well-being</span> is
              at the forefront of our care philosophy. We tailor treatments to
              your unique needs.
            </p>

            <div className="flex justify-start mt-6">
              <Link href="/services">
                <button className=" px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#47177e] rounded-lg  hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Get Services
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full max-w-md"
            src="https://merakiui.com/images/components/Email-campaign-bro.svg"
            alt="email illustration vector art"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
