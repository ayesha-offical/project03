

const Contact = () => {
  return (
    <>
    <div className= " bg-gradient-to-r from-cyan-300 to-blue-200  h-full ">
        <h1 className="font-extrabold text-5xl flex justify-center pt-10">
            Contact Us
        </h1>

        <p className="flex justify-center text-center text-3xl font-medium ml-14 mt-5  text-blue-950">If you have any questions or any problem, please contact  us.</p>
        <div className="flex justify-center mr-72">
        <form>
            <input className=" text-black ml-80 h-11 w-80 flex justify-center   text-center mt-10 rounded-lg bg-gradient-to-r from-cyan-200 to-blue-100  shadow-md"type="text" placeholder="Name" required/> 
            <input className=" text-black ml-80 h-11 w-80 flex justify-center  text-center mt-10 rounded-lg bg-gradient-to-r from-cyan-200 to-blue-100  shadow-md"type="email" placeholder="Eamil" required/> 
            <input className=" text-black ml-80 h-11 w-80 flex justify-center  text-center mt-10 rounded-lg bg-gradient-to-r from-cyan-200 to-blue-100  shadow-md"type="Subject" placeholder="Subject" required/> 
            <input className=" text-black  h-44 w-80 flex text-center  ml-80  mt-10  flex-wrap rounded-lg bg-gradient-to-r from-cyan-200 to-blue-100  shadow-md"type="message" placeholder="message" required/> 
        </form>
        </div>
        <div className="ml-64 mt-3 ">
        <button className= " ml-96  flex justify-center  py-2 px-8  text-white font-medium bg-blue-950 hover:bg-sky-800 rounded-md ">
     Submit
      </button>
      </div>
    </div>
    </>
  )
}

export default Contact