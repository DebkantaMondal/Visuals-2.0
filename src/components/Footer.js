import '../App.css';
/*import {
    Link
} from "react-router-dom";*/
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';



function Footer() {



    return (
        <>
            <Navbar className="w-full">
                <Container className="w-full flex flex-row justify-between items-center lg:flex-col">
                    <div className="w-full">
                        <ul className="w-full flex flex-col justify-start items-start lg:flex-row">
                            <li className="mt-2 mb-2 lg:mr-4">About Us</li>
                            <li className="mt-2 mb-2 lg:mr-4">Privacy Policy</li>
                            <li className="mt-2 mb-2 lg:mr-4">Terms & Services</li>
                            <li className="mt-2 mb-2 lg:mr-4">Contact Us</li>
                            <li className="mt-2 mb-2 lg:mr-4">FAQs</li>
                        </ul>
                    </div>
                    <div className="block lg:hidden">
                        <ul className="font-100">
                            <li>Copyright@2023-2024 Visuals<br /> by Debkanta Mondal , All Copyrights Reserved</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="lg:flex lg:flex-row lg:mr-20">
                            <li className="icon fa fa-facebook"></li>
                            <li className="icon fa fa-twitter"></li>
                            <li className="icon fa fa-youtube"></li>
                        </ul>
                    </div>

                </Container>
                <div className="hidden lg:block w-50">
                    <ul className="text-100">
                        <li>Copyright@2023-2024 Visuals<br /> by Debkanta Mondal , All Copyrights Reserved</li>
                    </ul>
                </div>
            </Navbar>
        </>
    );
}

export default Footer;