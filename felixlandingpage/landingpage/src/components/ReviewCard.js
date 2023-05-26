
const ReviewCard = ({img, name, review}) => {
  return (
    <>
        <div className=" w-96 mx-auto py-3">
            <div className="w-32 h-32 rounded-full m-auto bg-green-700">
                <img src={img} />
            </div>
            <div className="pt-5">
                <h1 className="capitalize font-bold text-xl text-center">{name}</h1>
            </div>
            <div className="pt-3 text-gray-700 text-lg text-center">
                {review}
            </div>
        </div>
      
    </>
  )
}

export default ReviewCard
