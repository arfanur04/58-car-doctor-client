import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="p-2 mx-auto max-w-7xl md:p-4">
		<React.StrictMode>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</React.StrictMode>
	</div>
);
