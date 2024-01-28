import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
	const { name, cuisines, avgRating, sla, cloudinaryImageId } = props?.restaurantInfo?.info;

	return (
		<div className="res-card">
			<div className="image-container">
				<img className="res-logo" alt="res-logo" src={`${IMG_URL}${cloudinaryImageId}`} />
			</div>
			<div>
				<h3>{name}</h3>
				<h4>{cuisines.join(', ')}</h4>
				<h4>{avgRating} stars</h4>
				<h4>{sla?.deliveryTime} mins</h4>
			</div>
		</div>
	);
};

export default RestaurantCard;
