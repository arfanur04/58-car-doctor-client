import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
	// Get the theme from localStorage or default to 'light'
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	// Function to toggle between "light" and "dark"
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};
	// effect to update the theme in the HTML tag
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const navItems = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={"/about"}>About</NavLink>
			</li>
			<li>
				<NavLink to={"/login"}>Login</NavLink>
			</li>
			<li>
				<NavLink to={"/sign-up"}>SignUp</NavLink>
			</li>
		</>
	);

	return (
		<div className="mb-4 navbar bg-base-100 h-28">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navItems}
					</ul>
				</div>
				<Link className="text-xl btn btn-ghost">
					<img
						src={logo}
						alt=""
					/>
				</Link>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">{navItems}</ul>
			</div>
			<div className="navbar-end">
				<label className="mr-2 md:mr-4 swap swap-rotate swap-flip">
					<input
						type="checkbox"
						name=""
						id=""
						onChange={toggleTheme}
						checked={theme === "light"}
					/>
					<div className="md:text-2xl swap-on">🌙</div>
					<div className="md:text-2xl swap-off">☀️</div>
				</label>
				<a className="btn btn-outline btn-warning">Appointment</a>
			</div>
		</div>
	);
};

export default Navbar;
