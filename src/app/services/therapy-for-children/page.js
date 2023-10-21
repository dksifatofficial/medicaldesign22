import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import TherapyTile from "@/components/Therapy/TherapyTile";
import { service3 } from "@/utils/Utils1";

const Therapy = {
  header: "Therapy for Children",
  details1:
    "There are many emotional issues that find a corner in our heart, and refuse to die down. With time, these issues can transform into a sort of emotional tumor that impacts negatively on our daily life, such as lack of concentration, enthusiasm, self respect, will to change, encouragement, and so on. These issues can spiral into our lives in various ways and gets channelled into other zones, which can create problems in the relationships, professional life, and health.",
  details2:
    "We address the root cause of the problem after carefully listening the patients, and help in changing the pattern of their thinking and beliefs. It helps in fighting back the problems at hand with much more confidence. However, we do not only try to motivate, but follow the scientific guidelines of psychology to rejuvenate the mental health of the patient, and even follow the medical treatment, wherever necessary to help the patients free themselves from the emotional burden, stress and anxiety that are causing life changing issues.",
  image1: "/TherapyforChildren1.jpg",
  image2: "/TherapyforChildren2.jpg",
};

const page = () => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-10 py-8 bg-white shadow-md">
        <TherapyTile item={Therapy} />
      </div>

      {/* Service Tile section */}
      <ul className="flex flex-col lg:flex-row lg:flex-wrap w-full gap-4 justify-between mt-6">
        {service3.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <li className="w-full lg:w-[48%] xl:w-[32%] relative">
            <ServiceTile3 item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
