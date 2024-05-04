import img from "../../../assets/images/login/login.svg";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
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
						onSubmit={handleLogin}
						className="card-body"
					>
						<h1 className="text-3xl font-bold text-center">Login!</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
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
								value="Login"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
