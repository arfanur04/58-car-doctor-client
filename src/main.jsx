import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes/Routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="p-2 mx-auto max-w-7xl md:p-4">
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</div>
);
