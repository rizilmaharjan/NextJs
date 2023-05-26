import PriceCards from "./PriceCards";
import image1 from "../../public/face1.jpg";
const Pricing = () => {
  const detail1 = "enhanced security";
  const detail2 = "no time tracking";
  const detail3 = "enhanced security";
  return (
    <>
      <div id="price" className="bg-gradient-to-r from-black to-gray-500 h-[100rem] sm:h-[80vh] relative">
        <img
          src="/pricing.jpg"
          className="h-full w-full object-cover mix-blend-overlay"
        />
        <div className="absolute grid place-items-center top-0 left-0 w-full h-full sm:flex sm:justify-evenly sm:items-center">
          <PriceCards
            title="basic"
            plan="free"
            detail1={detail1}
            detail2={detail2}
            detail3={detail3}
            bg={"gray"}
            img={image1}
            op={50}
          />
          <PriceCards
            title="optimal"
            plan="$40/mo"
            detail1={detail1}
            detail2={detail2}
            detail3={detail3}
            bg={"red"}
            op={400}
          />
          <PriceCards
            title="premium"
            plan="$100/mo"
            detail1={detail1}
            detail2={detail2}
            detail3={detail3}
            bg={"gray"}
            op={50}
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
