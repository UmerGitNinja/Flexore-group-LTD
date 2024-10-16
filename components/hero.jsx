import { Button, Image } from "@nextui-org/react";
import Tilt from "react-parallax-tilt";
const Hero = () => {
  return (
    <section className={`flex h-[800px] items-center justify-between`}>
      <div className="flex-1">
        <div className="text-center text-white font-bold leading-8 md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className="tracking-tight inline text-[2.5rem] lg:text-5xl">
              Innovative&nbsp;
            </h1>
            <h1 className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              IT solutions &nbsp;
            </h1>
          </div>
          <h1 className="tracking-tight inline text-[2.5rem] lg:text-5xl">
            powering your business forward.
          </h1>
        </div>
        <p className="text-neutral-500 text-xl my-6">
          Flexore Group LTD: Global IT solutions for stunning results.
          Connecting creativity, tech, commerce.
        </p>
        <Button
          color="primary"
          className="px-8 py-6 rounded-full font-bold text-md"
        >
          Get started
        </Button>
      </div>
      {/* <div className="flex-1 flex justify-end relative">
        <img
          src="/Images/businext-img33.png"
          className="absolute left-[100%] top-0 translate-y-[-16.5%] translate-x-[-83%] w-[700px] h-[600px]"
        />
        <Image
          src="/Images/businext-img34.jpg"
          className="w-[400px] h-[400px] rounded-full"
        />
      </div> */}
      <div className="flex-1 flex justify-end">
        <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4}>
          <div
            style={{
              height: "500px",
              width: "500px",
              backgroundColor: "transparent",
              userSelect: "none",
            }}
          >
            <Image
              src="/Images/3d-sphere.png"
              width={500}
              height={500}
              draggable="false"
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
