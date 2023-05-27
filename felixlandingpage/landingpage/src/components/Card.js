
const Card = ({logo,name,para}) => {
  return (
    <>
        <div className="px-3 sm:w-1/2 sm:py-2 sm:px-10 text-center">
            <span className="text-7xl flex w-full justify-center">{logo}</span>
            <h1 className="font-bold mt-5 capitalize text-xl">{name}</h1>
            <p className="mt-4 sm:text-center">{para}</p>
        </div>
      
    </>
  )
}

export default Card
