import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import BannerNavigation from "./BannerNavigation";
// import img5 from "../../../assets/images/banner/5.jpg";
// import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
	return (
		<div className="w-full carousel">
			<div
				id="slide1"
				className="relative w-full carousel-item"
			>
				<img
					src={img1}
					className="w-full"
				/>

				<BannerNavigation
					prevSlide={"slide4"}
					nextSlide={"slide2"}
				></BannerNavigation>
			</div>
			<div
				id="slide2"
				className="relative w-full carousel-item"
			>
				<img
					src={img2}
					className="w-full"
				/>

				<BannerNavigation
					prevSlide={"slide1"}
					nextSlide={"slide3"}
				></BannerNavigation>
			</div>
			<div
				id="slide3"
				className="relative w-full carousel-item"
			>
				<img
					src={img3}
					className="w-full"
				/>
				<BannerNavigation
					prevSlide={"slide2"}
					nextSlide={"slide4"}
				></BannerNavigation>
			</div>
			<div
				id="slide4"
				className="relative w-full carousel-item"
			>
				<img
					src={img4}
					className="w-full"
				/>
				<BannerNavigation
					prevSlide={"slide3"}
					nextSlide={"slide1"}
				></BannerNavigation>
			</div>
		</div>
	);
};

export default Banner;
