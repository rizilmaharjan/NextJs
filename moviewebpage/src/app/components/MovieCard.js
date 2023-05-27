import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {
  const {jawSummary } = curElem;
  return (
    <>
      <div className="w-11/12 lg:w-64 bg-white border drop-shadow-lg px-2 py-2 rounded-lg">
        <div>
          <Image
          className="rounded-lg"
            src={jawSummary.backgroundImage.url}
            alt={jawSummary.title}
            height={200}
            width={250}
          />
        </div>
        <div className="py-3">
          <h2 className="text-lg md:text-2xl font-bold capitalize text-center">{jawSummary.title}</h2>
        </div>
        <div>
          <p className="text-justify">{jawSummary.synopsis.substring(0,66)}...</p>
        </div>
        <div className="flex justify-center w-full py-4">
          <Link href={`/movie/${jawSummary.id}`}>
            <button className="border bg-black border-black py-2 px-5 text-white font-semibold rounded-full">Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
