import Link from "next/link"


const Header = () => {
  return (
    <>
  
    <header className="">
     
        
        <nav className="text-2xl   ">
          <ul className="   bg-gradient-to-r from-cyan-300 to-blue-200  text-blue-950 p-5 opacity-2 flex text-center justify-evenly ">
            <span ><Link className=" text-black font-extrabold text-4xl text-left mr-40 font-serif "  href="./">Coders.</Link></span>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>About</li>
            <li> Contact</li>
            <a><Link href="./">Sign Up</Link></a>
          </ul>
        </nav>
        </header>
        </>
   
  )
} 

export default Header