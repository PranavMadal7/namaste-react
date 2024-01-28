import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import { RES_URL } from '../utils/constants';

const Restaurant = () => {
	const [restaurant, setRestaurant] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetchRestaurant();
	}, []);

	const fetchRestaurant = async () => {
		const data = await axios.get(RES_URL + params?.resId);
		setRestaurant(data);
	};

	if (restaurant.length === 0) return <Shimmer />;

	const { name, cuisines, areaName, expectationNotifiers } = restaurant?.data?.data?.cards[0]?.card?.card?.info;

	const { itemCards = [] } =
		restaurant?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

	return (
		<div className="restaurant">
			<div className="res-address">
				<h1>{name}</h1>
				<p>{cuisines.join(', ')}</p>
				<p>{areaName}</p>
			</div>
			<ul className="res-message">
				<li>
					<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info" />
					<span>{expectationNotifiers[0]?.text}</span>
				</li>
			</ul>
			<br />
			<ul>
				{itemCards?.map((item) => {
					const { id, name, price, defaultPrice } = item?.card?.info;
					return (
						<li key={id}>
							{name} - Rs. {price / 100 || defaultPrice / 100}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Restaurant;
