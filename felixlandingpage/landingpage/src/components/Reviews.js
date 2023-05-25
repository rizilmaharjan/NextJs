import ReviewCard from "./ReviewCard";
const Reviews = () => {
  const review =
    "Design is the method of putting form and content together; there is no single definition. Design can be aesthetics";
  return (
    <>
      <div id="review" className="h-screen bg-gray-100 pt-28">
        <div>
          <h1 className="capitalize text-4xl font-bold text-center">buyers about product</h1>
          <p className="text-gray-700 text-2xl pt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex w-screen justify-evenly mt-28">
          <ReviewCard name="james thornton" review={review} />
          <ReviewCard name="james thornton" review={review} />
          <ReviewCard name="james thorton" review={review} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
