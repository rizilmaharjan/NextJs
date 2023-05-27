
const ContactCard = ({img, para1, para2, title, value}) => {
  return (
    <>
      <div className="drop-shadow-xl relative z-[-1] bg-white w-4/5 px-4 py-10 md:py-3 flex flex-col items-center justify-center ">
        <div>
          <i className="text-5xl text-red-700">{img}</i>
        </div>
        <div className="py-2">
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="text-center">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>

        <div>
          <button>{value}</button>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
