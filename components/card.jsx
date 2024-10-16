import {
  Card,
  CardHeader,
  CardBody,
  //Link,
} from "@nextui-org/react";

const Cards = ({ heading, text, Icon }) => {
  return (
    <Card
      isBlurred
      className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
    >
      <CardHeader className="flex gap-3 pb-0">
        <div className="rounded-full bg-secondary-400/20 w-12 h-12 justify-center items-center flex">
          <span className=" font-bold text-lg tracking-tight inline from-[#FF1CF7] to-[#b249f8] text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-b">
            {" "}
            {Icon}
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-white">{heading}</h2>
        </div>
      </CardHeader>

      <CardBody>
        <p className="text-neutral-200 font-normal text-md">{text}</p>
      </CardBody>
    </Card>
  );
};

export default Cards;
