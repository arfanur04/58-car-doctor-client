import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes/Routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="mx-auto max-w-7xl">
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</div>
);
