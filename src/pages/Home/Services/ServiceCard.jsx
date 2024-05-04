const ServiceCard = ({ service }) => {
	const { title, img, price } = service;
	return (
		<div className="shadow-xl card bg-base-100">
			<figure className="px-10 pt-10">
				<img
					src={img}
					alt="Shoes"
					className="rounded-xl"
				/>
			</figure>
			<div className="items-center text-center card-body">
				<h2 className="card-title">{title}</h2>
				<p>Price: ${price}</p>
				<div className="card-actions">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
