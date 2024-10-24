
import Header from "./header";
import Link from "next/link"


const Hero = () => {
  return (
    <>
     <Header></Header>

    <div className="bg-gradient-to-r from-cyan-300 to-blue-200  h-full">
      <h1 className=" ml-28 flex-start font-bold text-7xl pt-40 pb-2">Make Your Code 
        </h1>
        <span className=" font-bold pl-28 text-7xl text-blue-950">Perfect.Better.Instantly.</span>
        {/* <span className=" font-medium text-5xl text-blue-950">Better.</span>
        <span className="text-blue-950 font-medium text-5xl">Instantly.</span> */}
         <p className="text-3xl pl-28 pt-3 font-semibold">
          A code editor that makes coding faster, easier, and more enjoyable.


        </p>
      <div className=" flex items-center ml-28 gap-4 mt-6">
       
      <Link href="https://code.visualstudio.com/" className="  pt-3 py-2 px-8 text-white font-medium bg-blue-950  hover:bg-sky-800 rounded-md">
        Vs Code
      </Link>
      <Link href="https://www.sublimetext.com/" className= " pt-3  py-2 px-8 text-white font-medium bg-blue-950 hover:bg-sky-800 rounded-md ">
       Sublime Text
      </Link>
      </div>
   {/* <Image src={pic} alt="Image description" className="w-full">
   </Image> */}


    </div>
    <div className="bg-white h-2"></div>

    </>
  )
}

export default Hero