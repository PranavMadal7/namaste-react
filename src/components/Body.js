import { useEffect, useState } from 'react';
import axios from 'axios';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filterRestaurants, setFilterRestaurants] = useState([]);
	const [resSearch, setResSearch] = useState('');

	useEffect(() => {
		fetchRestaurants();
	}, []);

	const fetchRestaurants = async () => {
		const data = await axios.get(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5790844&lng=77.4393601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);
		setRestaurantList(data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilterRestaurants(data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

	return restaurantList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="search-res">
				<input
					type="text"
					value={resSearch}
					onChange={(e) => {
						setResSearch(e.target.value);
					}}
				/>
				<button
					type="submit"
					onClick={() => {
						const filterRestaurants = restaurantList.filter((res) =>
							res.info.name.toLowerCase().includes(resSearch.toLowerCase())
						);
						setFilterRestaurants(filterRestaurants);
					}}
				>
					Search
				</button>
			</div>
			<div className="res-container">
				{filterRestaurants?.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} restaurantInfo={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
