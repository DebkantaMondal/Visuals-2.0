import '../App.css';
import {
    Link
} from "react-router-dom";




function Topbar() {





    return (


        <nav className="bg-white z-200 w-screen left-0">
            <ul className="flex justify-between align-center mx-10 pt-4 flex-row ">
                <li className="basis-1/3">
                    <Link to="/"><p className="font-bold text-blue-800 text-xl">Visuals - Photo Blog</p></Link>
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
        </nav>

    );
}

export default Topbar;