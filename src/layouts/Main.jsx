import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
	return (
		<div className="flex flex-col justify-between min-h-svh">
			<div>
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
