import { useState } from "react";
import { Link } from "react-router-dom";

const Header01 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-slate-500">
            <header className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-xl font-bold">My Website</div>
                <button 
                    className="lg:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
                <nav className={`lg:flex ${menuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                        <li>
                            <Link to="/" className="text-white hover:text-blue-500 py-2 px-2.5">Home</Link>
                        </li>
                        <li>
                            <Link to="/product" className="text-white hover:text-blue-500 py-2 px-2.5">Product</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-blue-500 py-2 px-2.5">About</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        <Link to={'/login'}>Đăng Nhập</Link>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header01;
