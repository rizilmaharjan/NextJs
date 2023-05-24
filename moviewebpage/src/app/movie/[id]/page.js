import Image from "next/image";
const page = async({params}) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
 
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url, options);
const data = await res.json();
const main_data = data[0].details;
  return (
    <>
      <div className="px-32 py-10">
        <h2 className="font-bold text-3xl">Netflix \ <span className="capitalize font-bold text-red-700">{main_data.type}</span> </h2>
        <div className="py-3">
          <div>
            <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
          </div>
          <div className="py-8">
            <h1 className="text-3xl font-bold capitalize">{main_data.title}</h1>
            <p className="py-3">{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
