import '../App.css';
import {
    Link
} from "react-router-dom";




function Topbar() {



    const mobileNavClick = () => {
        const mobileMenu = document.getElementById("menu");

        mobileMenu.classList.toggle('hidden');
    }


    return (

        <>
            {/*<nav className="bg-white z-200 w-screen left-0">
            <ul className="flex justify-between align-center mx-10 pt-4 flex-row ">
                <li className="basis-1/3">
                    <p className="font-bold text-blue-800 text-xl"><Link to="/" className="no-underline text-blue-600">Visuals - Photo Blog</Link></p>
                </li>
                <li>
                    <Link to="/" className="font-bold text-black no-underline">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="font-bold text-black no-underline">About</Link>
                </li>
                <li>
                    <Link to="/faq" className="font-bold text-black no-underline">FAQs</Link>
                </li>
                <li>
                    <Link to="/viewer/login" className="font-bold text-black no-underline">Login</Link>
                </li>
                <li>
                    <Link to="/viewer/register" className="font-bold text-white no-underline bg-black py-2 px-4 rounded-md border-2 border-black hover:bg-white hover:text-black">Sign Up</Link>
                </li>
            </ul>
    </nav>*/}
            <header className="shadow-lg">
                <nav className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          md:py-0
          px-2
          text-lg text-gray-700
          bg-white
        ">
                    <div>
                        <Link to="/" className="no-underline">
                            <p className="pt-3 md:pt-0 font-bold text-blue-800 text-xl ml-10">Visuals - Photo Blog</p>
                        </Link>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => mobileNavClick()}>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <div className="hidden w-full md:flex md:items-center md:justify-center md:w-auto" id="menu">
                        <ul className="flex justify-center flex-col w-full items-center
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-center
              md:items-start
              md:mt-2 pr-8 md:flex-row">
                            <li className="md:mb-0 mb-4">
                                <Link className="font-bold text-black no-underline pr-8 md:mb-0 mb-4" to="/">Home</Link>
                            </li>
                            <li className="md:mb-0 mb-4">
                                <Link className="font-bold text-black no-underline pr-8" to="/about">About</Link>
                            </li>
                            <li className="md:mb-0 mb-4">
                                <Link className="font-bold text-black no-underline pr-8" to="/faq">FAQs</Link>
                            </li>
                            <li className="md:mb-0 mb-4">
                                <Link className="font-bold text-black no-underline pr-8" to="/viewer/login">Login</Link>
                            </li>
                            <li>
                                <Link className="font-bold text-white no-underline bg-black py-2 px-4 rounded-md border-2 border-black hover:bg-white hover:text-black" to="/viewer/register">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >
        </>


    );
}

export default Topbar;