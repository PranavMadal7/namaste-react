import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{restaurantList?.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} restaurantInfo={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
