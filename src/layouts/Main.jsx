import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className="flex flex-col justify-between h-screen">
			<div>
				<div>
					<Outlet />
				</div>
			</div>
			{/* footer */}
		</div>
	);
};

export default Main;
