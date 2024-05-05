import { Link } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SignUp = () => {
	const { createUser } = useContext(AuthContext);

	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password);

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	return (
		<div className="min-h-screen hero bg-base-200">
			<div className="flex-col hero-content lg:flex-row">
				<div className="mr-12 lg:w-1/2">
					<img
						src={img}
						alt=""
					/>
				</div>
				<div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
					<form
						onSubmit={handleSignUp}
						className="card-body"
					>
						<h1 className="text-3xl font-bold text-center">Sign Up!</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="name"
								placeholder="name"
								name="name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="mt-6 form-control">
							<input
								className="btn btn-primary"
								type="submit"
								value="Sign Up"
							/>
						</div>
						<p className="my-4">
							Already have an account? Please{" "}
							<Link
								className="text-orange-600 link"
								to={"/login"}
							>
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
