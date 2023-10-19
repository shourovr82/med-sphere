const AboutOurStories = () => {
  return (
    <div className="mb-10">
      <section className="py-10 rounded-3xl  shadow-lg sm:py-16 lg:py-24">
        <div className=" ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Numbers tell our story
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-8">
              Delve into the heartbeat of Med Sphere, where our story unfolds in
              the language of numbers. With a legacy spanning 10 years, we have
              been dedicated to transforming healthcare. 2013 lives impacted,
              breakthroughs achieved—each digit encapsulates our commitment to
              your well-being. Our journey is etched in the data: A successful
              surgeries, patients served, and innovations driving medical
              excellence. Beyond statistics, these numbers weave a narrative of
              compassion, resilience, and a shared mission for a healthier
              world. At Med Sphere, we invite you to explore the profound story
              told by our numbers—a testament to the vitality, care, and
              innovation ingrained in our DNA.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {" "}
                  10+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                Creating the successful path
              </p>
            </div>

            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {" "}
                  4821{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Operations Completed
              </p>
              <p className="text-base mt-0.5 text-gray-500">In last 10 years</p>
            </div>

            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {" "}
                  21+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">Doctors</p>
              <p className="text-base mt-0.5 text-gray-500">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOurStories;
