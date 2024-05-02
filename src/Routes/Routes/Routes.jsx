import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
		children: [
			{
				path: "/",
				element: <div>home</div>,
			},
		],
	},
]);

export default router;
