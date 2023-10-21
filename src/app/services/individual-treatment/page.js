import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import TherapyTile from "@/components/Therapy/TherapyTile";
import { service3 } from "@/utils/Utils1";

const Therapy = {
  header: "Individual Treatment",
  details1:
    "Individual treatment is often termed as psychotherapy, and is meant to help people with their emotional issues, which can range in order of their severity or intensity. The main aim of this form of therapy is to change the quality of life by defining the path of life clearly, and bringing in more clarity. Whether it is the problem of repressed childhood that you are facing, or an emotional breakdown due to divorce, failure or loss of a loved one, a professional psychologist can help you revive your mental health through systematic counselling.",
  details2:
    "There are many emotional issues that find a corner in our heart, and refuse to die down. With time, these issues can transform into a sort of emotional tumor that impacts negatively on our daily life, such as lack of concentration, enthusiasm, self respect, will to change, encouragement, and so on. These issues can spiral into our lives in various ways and gets channelled into other zones, which can create problems in the relationships, professional life, and health. We address the root cause of the problem after carefully listening the patient.",
  image1: "/IndividualTreatment1.jpg",
  image2: "/IndividualTreatment2.jpg",
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
