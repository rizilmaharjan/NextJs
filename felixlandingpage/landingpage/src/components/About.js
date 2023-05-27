import Card from "./Card";
import { FiGithub } from "react-icons/fi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";

const About = () => {
  const para =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae provident enim cum quidem aut corporis";
  return (
    <>
      <div id="about">
        <div className="px-3 sm:py-20">
          <h1 className="text-4xl capitalize font-bold text-center">meet felix</h1>
          <p className="mt-10 text-xl text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="my-32 sm:my-2 sm:flex sm:justify-evenly">
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
