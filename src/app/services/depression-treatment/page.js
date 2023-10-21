import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import TherapyTile from "@/components/Therapy/TherapyTile";
import { service3 } from "@/utils/Utils1";

const Therapy = {
  header: "Depression Treatment",
  details1:
    "Depression is a mental illness, which one should not confuse with the short-term emotional distress, anxiety attacks or feeling low, which also are constituents of depression. Anyone can feel low for a brief period of time, or have anxiety attacks once in a while, but that does not mean they are suffering from depression. Depression is much more serious than that, and is a persistent feeling of sadness, loneliness, grief, uselessness, and emotional pain. If not treated at the right time, it can lead to a person turning suicidal, and may try to harm himself/herself or commit suicide.",
  details2:
    "We approach patients with depression through various routes at one time to make the treatment effective, and help patients recover from their disruptive mental state sooner. First of all, we listen, understand, analyze and evaluate the problems of the patient through verbal counselling sessions, and then categorize the depression level medically to define the treatment path to follow. Depression is treatable, and there are many effective treatments available.",
  image1: "/DepressionTreatment1.jpg",
  image2: "/DepressionTreatment2.jpg",
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
