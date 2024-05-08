import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Main from "../../layouts/Main";
import Login from "../../pages/Shared/Login/Login";
import SignUp from "../../pages/Shared/SignUp/SignUp";
import Checkout from "../../pages/Checkout/Checkout";
import { api } from "../../utility/api";

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
			{
				path: "/sign-up",
				element: <SignUp />,
			},
			{
				path: "/checkout/:id",
				element: <Checkout></Checkout>,
				loader: ({ params }) => fetch(`${api}/services/${params.id}`),
			},
		],
	},
]);

export default router;
