
const ContactForm = ({onchange}) => {
  return (
    <>
    <div className="bg-white drop-shadow-2xl p-10 rounded-3xl">

      <form>
        <div>
            <label>Enter Your Name</label><br />
            <input onChange={onchange} type="text" name="name" placeholder="Enter your name" className="py-2 border px-2" />
        </div>
        <div className="mt-4">
            <label>Email</label><br />
            <input onChange={onchange} type="text" name="email" placeholder="Enter your email" className="py-2 border px-2" />
        </div>
        <div className="mt-4">
            <label>Phone Number</label><br />
            <input onChange={onchange} type="number" name="phone" placeholder="Enter your phone number" className="py-2 border px-2" />
        </div>
        <div className="mt-4">
            <label>Message</label><br />
            <textarea onChange={onchange} placeholder="Enter your message" name="message" rows={4} cols={23} className="py-2 border px-2" />
        </div>
        <div>
            <button type="submit" className="bg-black text-white font-semibold rounded-full px-4 mt-4 py-2">Send Message</button>
        </div>

      </form>
    </div>
    </>
  )
}

export default ContactForm
