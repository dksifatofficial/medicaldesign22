import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import TherapyTile from "@/components/Therapy/TherapyTile";
import { service3 } from "@/utils/Utils1";

const Therapy = {
  header: "Anxiety Treatment",
  details1:
    "Whether it is social phobia, specific phobia, post traumatic stress disorder, general anxiety disorder, obsessive compulsive disorder, or similar, it falls under the category of anxiety disorder, and calls for clinical and therapeutic treatment. And, this is where our expertise can help you. We have a systematic approach to dealing with our patients' problems, and help them through a round of clinical counselling session to firstly, introduce them to their problems, and then show them the way to dealing with and confront those conflicting issues, without fear or phobia.",
  details2:
    "It has been medically proven that when the people confront what they fear repeatedly without getting the negative outcome they actually feared, the sense of phobia would gradually subside. This does not only help in changing the mental frame of a person in a natural manner, but also helps in building back the lost confidence and sensitivity towards self. In severe cases, we take the help of medicines and therapies that would help our patients to fight back the physical symptoms caused by the anxiety.",
  image1: "/AnxietyTreatment1.jpg",
  image2: "/AnxietyTreatment2.jpg",
};

const page = () => {
  return (
    <>
      <div className="px-10 py-8 bg-white shadow-md">
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
