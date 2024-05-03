const BannerNavigation = ({ prevSlide, nextSlide }) => {
	return (
		<div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
			<a
				href={`#${prevSlide}`}
				className="mr-5 btn btn-circle"
			>
				❮
			</a>
			<a
				href={`#${nextSlide}`}
				className="btn btn-circle"
			>
				❯
			</a>
		</div>
	);
};

export default BannerNavigation;
