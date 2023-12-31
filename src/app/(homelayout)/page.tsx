/* eslint-disable @next/next/no-img-element */
import AppointmentSection from "@/components/HomePage/Appointment/AppointmentSection";
import BlogPage from "@/components/HomePage/BlogPage/BlogPage";
import HeroSection from "@/components/HomePage/HeroSection";
import HighlightSection from "@/components/HomePage/HighlightSection";
import HomepageAboutSection from "@/components/HomePage/HomepageAboutSection";
import AboutOurStories from "@/components/HomePage/Stories/AboutOurStories";
import ClientsReview from "@/components/HomePage/clients-review/ClientsReview";
import Faqs from "@/components/HomePage/faqs/Faqs";
import appImage from "@/assets/app.jpg";

import HomePageServiceSection from "@/components/HomePage/homePageService/HomePageServiceSection";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Med-Sphere - Home",
  description: "Created By Shafinur Islam(@shourovr82)",
};

export default function Home() {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto">
          <HeroSection />
        </div>
        <div className="">
          <HighlightSection />
        </div>
        <div className="max-w-7xl mx-auto">
          <HomepageAboutSection />
        </div>
        <div className="max-w-7xl mx-auto">
          <HomePageServiceSection />
        </div>
        <div className="max-w-7xl mx-auto">
          <AppointmentSection />
        </div>

        <div className="max-w-7xl mx-auto">
          <ClientsReview />
        </div>
        <div className="max-w-7xl mx-auto">
          <BlogPage />
        </div>
        <div className="max-w-7xl mx-auto">
          <AboutOurStories />
          <div className="max-w-7xl mx-auto">
            <Faqs />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <section className="">
            <div className=" flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
              <div className="flex justify-center xl:w-1/2">
                <Image
                  width={200}
                  height={200}
                  className="w-[350px] h-[350px] rounded-full"
                  src={appImage}
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
                  Download our free mobile app
                </h2>

                <p className="block max-w-2xl mt-4 text-gray-600 ">
                  Elevate your healthcare experience with our free mobile app,
                  designed exclusively for you. Seamlessly manage your health
                  with personalized insights, book appointments effortlessly,
                  and receive medication reminders on the go. Our app ensures
                  secure access to your health records, putting your well-being
                  in the palm of your hand. Enjoy the convenience of telehealth
                  consultations from anywhere, fostering a stronger connection
                  with your healthcare provider. With a user-friendly interface,
                  top-notch security, and zero costs, our app is your trusted
                  companion on the journey to a healthier lifestyle. Join our
                  community, share experiences, and embrace a future of
                  well-being. Your path to optimal health starts with a simple
                  click. Download our app now and empower your wellness journey!
                </p>

                <div className="mt-6 sm:-mx-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                  >
                    <svg
                      className="w-5 h-5 mx-2 fill-current"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <g>
                          <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                        </g>
                      </g>
                    </svg>

                    <span className="mx-2">Get it on the App Store</span>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  >
                    <svg
                      className="w-5 h-5 mx-2 fill-current"
                      viewBox="-28 0 512 512.00075"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path>
                    </svg>

                    <span className="mx-2">Get it on Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <h2 className="text-center py-4 text-4xl font-semibold">
            Testimonial
          </h2>
        </div>
        <div className="border max-w-7xl mx-auto">
          <section className="text-gray-600 body-font">
            <div className=" px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <p className="leading-relaxed">
                      I cant thank Med Sphere enough for the invaluable
                      healthcare information they provide. As someone who is
                      always been health-conscious, I rely on Med Sphere
                      articles and resources to make informed decisions about my
                      well-being. The content is not only well-researched but
                      also easy to understand, which makes it a go-to resource
                      for anyone seeking to improve their health. Med Sphere has
                      truly become my trusted partner on my health journey
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Sarah T.
                    </h2>
                    <p className="text-gray-500"> Med Sphere User</p>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <p className="leading-relaxed">
                      Med Sphere is a game-changer in the healthcare information
                      landscape. As a healthcare professional, I greatly
                      appreciate the depth and accuracy of their articles. It is
                      an incredible resource not only for my personal knowledge
                      but also for sharing with my patients. Med Sphere has
                      consistently delivered high-quality, up-to-date
                      information thats truly beneficial in my practice. Thank
                      you for being an essential part of my work
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Dr. Michael R.
                    </h2>
                    <p className="text-gray-500">Healthcare Provider</p>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 p-4">
                  <div className="h-full text-center">
                    <p className="leading-relaxed">
                      Med Sphere has been a lifeline for me during my health
                      journey. The information they provide is not just
                      comprehensive but also presented in a way thats easy to
                      grasp. Its like having a knowledgeable friend in the
                      healthcare field whos always there to guide you. Thanks to
                      Med Sphere, Ive been able to make better decisions about
                      my health, and Im grateful for their dedication to
                      empowering individuals like me.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Mark L.
                    </h2>
                    <p className="text-gray-500">Med Sphere Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
