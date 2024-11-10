import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import profile from "../images/logo.png";
const Navbar = () => {
    return <>
        <div className="flex justify-between h-10 text-sm font-bold text-gray-700 min-w-20 min-h-20  bg-tahiti-200   items-center p-4 shadow-lg">
        
            <div className="flex justify-center space-x-4">
                <a href='/'>
            <img src={logo}  className="w-10 h-10 float-startm ml-5  " alt="" /></a>
                <Link to="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-tahiti-300 hover:text-slate-900 ml-20">Home</Link>
                <Link to="/about" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-tahiti-300 hover:text-slate-900 ml-4">About</Link>
                <Link to="/contact" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-tahiti-300 hover:text-slate-900 ml-4">Contact</Link>
                {/* <Link to="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-tahiti-300 hover:text-slate-900 ml-4">Reports</Link> */}
            </div>
            <div className="flex items-center bg-tahiti-500  ">
                <Link to='login'>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sign in</button>
               
                </Link>
                <img src={profile} className="h-10 w-10 " alt="" />
            </div>

        </div>  

    </>
}
export default Navbar;