"use client";
import ContactCard from "../components/ContactCard";
import { AiOutlineMail, AiOutlineWechat } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import Maps from "../components/Maps";

const page = () => {
  const [input, setInput] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: value.username,
          email: value.email,
          phone: value.phone,
          message: value.message,
        }),
      });
      // set the status based on the response from the API route
      if (response.status === 200) {
        setInput({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="md:px-10 relative z-[-1]">
        <h1 className="text-lg md:text-4xl font-bold py-10 px-4">Contact Us</h1>
          <div className="grid place-items-center md:grid-cols-3 md:place-items-center py-10">
            <ContactCard
              title="Email"
              img={<AiOutlineMail />}
              para1="Monday to Friday Expected"
              para2="response time: 72 hours"
              value="Send Email"
            />
            <ContactCard
              title="Live Chat"
              img={<AiOutlineWechat />}
              para1="Weekdays: 9 AM - 6 PM ET"
              para2="Weekends: 9 AM - 5 PM ET"
              value="Chat Now"
            />
            <ContactCard
              title="Email"
              img={<MdForum />}
              para1="Monday to Friday Expected"
              para2="response time: 72 hours"
              value="Ask The Community"
            />
          </div>

        <div className="text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            We'd love to hear <sapn className="text-red-800">form you</sapn>
          </h1>
        </div>
        <div className="flex justify-center py-4">
          <ContactForm
            resStatus={status}
            handlesubmit={handleSubmit}
            onchange={handleChange}
          />
        </div>
        <Maps />
      </div>
    </>
  );
};

export default page;
