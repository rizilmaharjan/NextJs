const PriceCards = ({ title, plan, detail1, detail2, detail3, bg, op }) => {
  return (
    <>
      <div className="w-80 py-4 sm:pb-10 sm:w-96 bg-white ">
        <div className={`bg-${bg}-${op} w-full py-4 `}>
          <h1 className="text-black capitalize font-bold text-lg ml-7">
            {title}
          </h1>
        </div>
        <div className="ml-14">
          <h1 className="text-black capitalize font-bold text-5xl py-9">
            {plan}
          </h1>
        </div>
        <hr />
        <div className="w-full ml-14">
          <p className="text-black pt-8 capitalize">{detail1}</p>
          <p className="text-black pt-8 capitalize">{detail2}</p>
          <p className="text-black pt-8 capitalize">{detail3}</p>
        </div>
        <div className="flex justify-center">
          <button
            className={`py-3 px-20 uppercase mt-8 border-2 border-${bg}-${op} rounded-full hover:bg-${bg}-${op} hover:cursor-pointer`}
          >
            select plan
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceCards;
