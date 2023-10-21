import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import { service3 } from "@/utils/Utils1";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-10 py-8 bg-white shadow-md">
        <div className="flex flex-col gap-2 pb-6 mb-6 border-b">
          <h2 className=" font-bold text-3xl text-gray-700">About Me</h2>
          <p className=" text-sm text-gray-400">A little something about me.</p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-y-6">
          <div className="w-full lg:w-[50%]">
            <p className=" text-sm text-gray-400 pr-4">
              I am a New York based Psychologist, and was born and raised in New
              Jersey. I completed my Masters in Clinical Psychology from Rutgers
              University, New Jersey in 1987, and have a diploma in Cognitive
              Psychology and Neurosciences. Over the years, I have developed a
              unique combination of interpersonal psychoanalysis, mind-body
              stimulation and cognitive behavioral techniques, which helps me to
              diagnose my patients in an elaborate manner.
              <br />
              <br />
              In my 20 years of experience, I have worked with hundreds of
              patients from all walks of life, which has provided with a deep
              insight and a practical view of the problems the people are facing
              in their contemporary times, with regards to their professional
              and personal life. Whether it is depression due to lack of respect
              and recognition at work, death of a close family member, emotional
              distress due to separation, addiction, hypersensitivity, obsessive
              compulsive disorder, hyperactivity, sex addiction, loss of job, or
              just any other issues that is affecting your mental health
              negatively.
              <br />
              <br />
              My approach towards treating my patients is a combination of
              medical route and counselling, which collectively helps in
              bringing that much needed mental and physical balance,
              irrespective of what kind of psychological issues you are facing.
              I aim to revive my patients from the current positions in their
              lives, and channelizing their negative energy to its way out in a
              well coordinated manner. It helps bring in the much needed harmony
              in the lives, and infuses positivity.
            </p>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col gap-y-4 justify-start ml-0 lg:ml-6">
              <Image
                className="w-full overflow-hidden object-cover"
                src="/image51.jpg"
                alt=""
                height={400}
                width={800}
              />
              <Image
                className="w-full overflow-hidden object-cover"
                src="/image52.jpg"
                alt=""
                height={400}
                width={800}
              />
              <Image
                className="w-full overflow-hidden object-cover"
                src="/image53.jpg"
                alt=""
                height={400}
                width={800}
              />
            </div>
          </div>
        </div>
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
