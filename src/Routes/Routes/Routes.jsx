import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Main from "../../layouts/Main";
import Login from "../../pages/Shared/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
