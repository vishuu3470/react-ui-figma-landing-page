import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import bannerImage from "./../assets/banner.webp";
import fishImage from "./../assets/fishImage.webp";
import  memberImage1 from "./../assets/member_image1.webp"
import  memberImage2 from "./../assets/member_image2.webp"
import  memberImage3 from "./../assets/member_image3.webp"
import  memberImage4 from "./../assets/member_image4.webp"

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    {
      title: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: fishImage,
    },
    {
      title: "Fly Fishing Experiences",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
        image: fishImage,
    },
    {
      title: "Gear Up and Catch More",
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
        image: fishImage,
    },
  ];

  const stories = [
    {
      title: "John's Story",
      image: memberImage1,
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    },
    {
      title: "The Journey",
      image: memberImage2,
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      title: "Catch Day",
      image: memberImage3,
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    },
    {
      title: "Trout Tales",
      image: memberImage4,
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    },
  ];

  return (
    <div>
      {/* main section */}
      <section className="container m-auto mt-0 mb-12 md:my-20    flex flex-col-reverse sm:flex-row gap-6 sm:gap-10">
        <div className="flex items-center px-[24px] xl:px-0  basis-full sm:basis-3/5">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-[56px] font-semibold leading-[48px] sm:leading-[56px] md:leading-[63px] text-brown-default">
              Central Texas <br />
              Fly Fishing
            </h1>
            <p className="text-[20px] leading-8 font-normal text-brown-light">
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
              cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <Button
              variant="default"
              className="bg-brown font-normal  text-[16px] hover:bg-brown-dark text-neutral-0"
            >
              Get started
            </Button>
          </div>
        </div>
        <div className="flex justify-center sm:px-[24px] xl:px-0  sm:justify-start">
          <img
            src={bannerImage}
            alt="Fly fishing at sunset"
            loading="lazy"
            className="object-cover h-full sm:h-[300px] w-full sm:w-[400px]"
          />
        </div>
      </section>

      {/* feature option */}
      <section className="bg-tan-lighter py-10 px-[24px] xl:px-0 lg:py-20">
        <div className="container m-auto">
          <h2 className="text-[40px] md:text-[48px] font-semibold mb-8 ">
            Featured options
          </h2>

          {isDesktop ? (
            <Accordion type="single" collapsible className="space-y-4">
              {features.map((feature) => (
                <AccordionItem
                  key={feature.title}
                  value={feature.title.toLowerCase().replace(/\s+/g, "-")}
                  className="border-b border-brown-light !mt-0 data-[state=open]:border-b-0"
                >
                  <AccordionTrigger className="text-brown-default">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-b-0">
                    <div className="flex">
                      <div className="basis-full sm:basis-2/5 gap-6 ">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className=" w-[400px] h-[220px]"
                        />
                      </div>

                      <div className="space-y-4 flex  items-center basis-full sm:basis-3/5">
                        <div className="">
                          <span className="text-black font-semibold text-[32px]">
                            {feature.title}
                          </span>
                          <p className="text-brown-light text-[20px] leading-6 py-4">
                            {feature.description}
                          </p>
                          <Button
                            variant="outline"
                            className=" bg-neutral-10 px-2 py-0  h-8 hover:text-white hover:bg-brown-lighter"
                          >
                            Learn more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative overflow-hidden  h-fit"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-[294px] sm:h-[260px]"
                  />
                  <div className="absolute inset-0 bg-[#f1ece1d1] justify-between p-6 flex flex-col ">
                    <div>
                      <h3 className="font-semibold leading-9 text-black text-[32px] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[20px] leading-7 text-neutral-60">
                        {feature.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="self-start mt-4 bg-neutral-10 hover:text-white hover:bg-brown-lighter"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* member storiess */}
      <section className="lg:py-20 py-10  px-[24px] xl:px-0 container m-auto">
        <h2 className="text-[40px] md:text-[48px] font-semibold mb-8 border-b border-neutral-20 pb-4 md:border-none ">
          Member stories
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
          {stories.map((story) => (
            <div
              key={story.title}
              className="border-b border-neutral-20 pb-6 sm:pb-12 md:border-none md:pb-0"
            >
              <h3 className="text-black sm:hidden block font-gluten text-xl mb-4">
                {story.title}
              </h3>

              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-black sm:block hidden font-gluten text-xl lg:mb-2 xl:mb-4">
                    {story.title}
                  </h3>
                  <p className="text-[14px] text-brown-light mb-4">
                    {story.description}
                  </p>
                  <Button
                    variant="link"
                    className="bg-neutral-10 px-2 sm:block hidden py-0 h-8 hover:text-white hover:bg-brown-lighter self-start"
                  >
                    Read more
                  </Button>
                </div>
              </div>
              <Button
                variant="link"
                className=" border-neutral-40 border block sm:hidden mt-4 h-10 px-4 py-0 hover:text-white hover:bg-brown-lighter self-start"
              >
                Read more
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
