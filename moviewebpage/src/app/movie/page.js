import MovieCard from "../components/MovieCard";
const page = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <div className="px-32">
        <h1 className="text-center font-bold text-3xl py-10">Series & Movie</h1>
        <div className="grid grid-cols-3 gap-24 py-10 place-items-center">
          {main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default page;
