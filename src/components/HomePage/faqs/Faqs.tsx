import Image from "next/image";

import FaqComponent from "./FaqComponent";

const Faqs = () => {
  const items = [
    {
      key: "1",
      label: "How do I make an appointment at Meddic?",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.
        </p>
      ),
    },
    {
      key: "2",
      label: "Do you have a pediatrician?",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.
        </p>
      ),
    },
    {
      key: "3",
      label: "Does your place provide health insurance?",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.
        </p>
      ),
    },
    {
      key: "4",
      label: "What payment methods do you provide?",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.
          Etiam erat arcu, dapibus at bibendum eget, blandit ut eros. Cras
          feugiat, sapien eget
        </p>
      ),
    },
  ];

  return (
    <div className="relative grid grid-cols-2 gap-10 items-center mb-[60px]">
      <Image
        src="https://askproject.net/meddic/wp-content/uploads/sites/156/2023/10/team-of-doctors-discussing-something-at-hospital-c-FHAY6CS.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-full rounded-xl  border-2 "
      />

      {/* FAQS */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col md:h-[400px] justify-around md:w-[400px]">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          ABOUT MED-SPHERE
        </p>
        <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
          We Collaborate for Better Healthcare
        </p>
        <p className="md:w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of MEDDPICC are that it allows sellers to quickly qualify
          or disqualify opportunities.
        </p>

        <FaqComponent size="large" itemData={items} />
      </div>
    </div>
  );
};

export default Faqs;
