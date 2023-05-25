
const Card = ({logo,name,para}) => {
  return (
    <>
        <div className="w-1/4 py-4 px-10 text-center">
            <span className="text-7xl flex w-full justify-center">{logo}</span>
            <h1 className="font-bold mt-5 capitalize text-xl">{name}</h1>
            <p className="mt-4">{para}</p>
        </div>
      
    </>
  )
}

export default Card
