import Card from "./card";
const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card
        heading={"Software Development"}
        text={
          "We deliver powerful and unique software solutions for your business. We provide services for all businesses ranging from large to small sizes."
        }
        Icon={"01."}
      />
      <Card
        heading={"Marketing"}
        text={
          "Flexore Group LTD is a leading digital marketing agency due to our strong marketing strategy execution in promoting your business brands."
        }
        Icon={"02."}
      />
      <Card
        heading={"Game Servers Development"}
        text={
          "We are team of market-leading dedicated game server developers with in-house experts to manage all processes."
        }
        Icon={"03."}
      />
      <Card
        heading={"Hosting Services"}
        text={
          "At Flexore Group LTD , we specialize in understanding your goals and engineering a tailored solution that helps you reach your business goals faster."
        }
        Icon={"04."}
      />
      <Card
        heading={"Domain Name Sales"}
        text={
          "Flexore Group LTD offer you the largest selection of selling options in the domain market – then you can decide which is the best for your domain!"
        }
        Icon={"05."}
      />
      <Card
        heading={"Game Servers Management"}
        text={
          "Get the Flexore Group LTD game server management professionals to do the job for your next gaming sensation."
        }
        Icon={"06."}
      />
    </div>
  );
};
export default Cards;
