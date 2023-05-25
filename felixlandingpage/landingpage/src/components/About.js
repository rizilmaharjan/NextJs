import Card from "./Card";
import { FiGithub } from "react-icons/fi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";

const About = () => {
  const para =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae provident enim cum quidem aut corporis";
  return (
    <>
      <div id="about" className="about w-screen h-auto pb-24">
        <div className="para py-20">
          <h1 className="text-4xl capitalize font-bold text-center">meet felix</h1>
          <p className="mt-10 text-center text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="card flex justify-evenly mt-5">
          <Card logo={<FiGithub />} name="functional" para={para} />
          <Card
            logo={<AiOutlineCloudDownload />}
            name="Easy customize"
            para={para}
          />
          <Card
            logo={<AiOutlineAndroid />}
            name="modern & creative"
            para={para}
          />
        </div>
      </div>
    </>
  );
};

export default About;
