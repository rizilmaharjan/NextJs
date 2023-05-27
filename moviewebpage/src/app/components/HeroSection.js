import Image from "next/image";
import Link from "next/link";
const HeroSection = ({ title, imageUrl }) => {
  return (
    <>
      <main>
        <div className="md:grid md:grid-cols-2 h-[34rem] md:place-items-center px-28 py-28 bg-blue-300">
          <div>
            <h1 className="text-3xl text-black md:text-5xl font-bold">{title}</h1>
            <p className="pt-5 text-justify">
              From award-winning dramas to blockbuster action movies we've got
              you covered. Browse our selection of the latest and greatest
              movies and find your new favorite today.
            </p>
            <Link href="/movie">
              <div className="pt-10">
                <button className="bg-black border border-black text-white font-semibold px-6 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:ease-in-out hover:duration-300">
                  Explore Movies
                </button>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <Image
              src={imageUrl}
              alt="home_logo"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
