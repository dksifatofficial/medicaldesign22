import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import TherapyTile from "@/components/Therapy/TherapyTile";
import { service3 } from "@/utils/Utils1";

const Therapy = {
  header: "Couples Therapy",
  details1:
    "A relationship goes through numerous phases during its life cycle, and it is obvious for it to have a few rough patches. The strength of a relationship is reflected in how the couples deal with rough patches and move ahead. The lifestyle of the people and the modern day thinking has changed the pattern of thinking of people in respect to relationships. This has turned the statistics for divorce and marriage upside down. While divorce and separation is necessary in many cases, if the problems are not only circumstantial, but also irrecoverable and irreversible.",
  details2:
    "We believe that love should be given a chance, and that there are relationships that can be saved, if only the people involved take that first step and make that last ditch effort to save their relationship. And, this is where the couple therapy comes in. Our approach towards couples therapy is oriented not only towards solving the problems the couple is facing with each other, but to revive the feeling of love and affection they have towards each other.",
  image1: "/couplesTherapy1.jpg",
  image2: "/couplesTherapy2.jpg",
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
