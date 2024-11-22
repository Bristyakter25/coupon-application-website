
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Root = () => {
    return (
        <div >
           <header >
            <Header></Header>
        </header>
           <nav>
           <Navbar ></Navbar>
           </nav>
           <main className='md:max-w-6xl mx-auto'>
            
           

          
            <Outlet></Outlet>
            </main>
            <footer>
               <Footer></Footer>
            </footer>
            </div>
    )
       
};

export default Root;