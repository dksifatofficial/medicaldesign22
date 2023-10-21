import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import TherapyTile from "@/components/Therapy/TherapyTile";
import { service3 } from "@/utils/Utils1";

const Therapy = {
  header: "Post-divorce Recovery",
  details1:
    "Our systematic approach towards couple therapy is defined on the lines of enhancing the communication between the partners, and establishing short term and long term goals, where both the partners would be given their own schedules of expectations to be fulfilled, effectively working towards improving the relationship. With the help of third and neutral perspective, we help bring in clarity in the relationship by clearly defining the mistakes each other have made, and where the overreaction caused the emotional outburst, which in turn, deepened the hole in the relationship.",
  details2:
    "We define the treatment path in couples therapy after patiently listening and carefully understanding the problems couple is facing. Our practical and scientific approach, while balancing and weighing the emotions at stake, helps us bring in the much needed transparency and attachment among the partners. It definitively helps in doing the right thing, and taking the right decision, not only for the relationship, but personally as well.",
  image1: "/PostDivorceRecovery1.jpg",
  image2: "/PostDivorceRecovery2.jpg",
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
