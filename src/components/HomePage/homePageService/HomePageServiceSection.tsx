import ServiceCard from "@/components/Services/ServiceCard";
import { IServiceTypes } from "@/types/Service";

const HomePageServiceSection = () => {
  const serviceData: IServiceTypes[] = [
    {
      serviceName: "Pharmacy Services",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: "https://i.ibb.co/1f08g2g/medicin.jpg",
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Medical Specialist",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: "https://i.ibb.co/tCFyqHx/madical.jpg",
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Medical Checkup",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: "https://i.ibb.co/9rPKyFK/checkoup.jpg",
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Health Consultation",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: "https://i.ibb.co/sjqWY7P/Consultation.jpg",
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Ambulance Service",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: "https://i.ibb.co/qJKWk8j/Ambulance.jpg",
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Health Assurance",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: "https://i.ibb.co/V2XgtBr/Health.jpg",
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
  ];

  return (
    <div className="common pb-[100px]">
      <p className="text-primary md:text-[20px] text-[16px] font-semibold">
        OUR SERVICES
      </p>
      <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px] py-[30px] ">
        Amazing Medical Facilities Just for You
      </p>

      {/* service card */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-between">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomePageServiceSection;
