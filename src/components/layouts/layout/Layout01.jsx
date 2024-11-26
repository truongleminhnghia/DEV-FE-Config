import { Outlet } from "react-router-dom";
import Header01 from "../Header01";
import Footer01 from "../Footer01";

const Layout01 = () => {
    return (
        <div>
            <Header01 />
            <main>
                <Outlet/>
            </main>
            <Footer01 />
        </div>
    )
}
export default Layout01;