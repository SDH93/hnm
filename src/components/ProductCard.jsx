//상품을 눌렀을 때 그 상품에 해당하는 ProductDetail로 넘어가게
import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
	const aaa = useNavigate();
	const showDetail = () => {
		aaa(`product/${item.id}`);
	}

	return (
		<div className="productCard">
			<div className="img-container" onClick={showDetail}>
				<img src={item?.img} alt="" />
				<div className="item_box">
					{item?.choice === true ? (
						<div className="event">Weakly Best Seller</div>
					) : (
						""
					)}
					{item?.new === true ? <div className="new">new</div> : ""}
				</div>
			</div>

			<div className="title">{item?.title}</div>
			<div className="price">₩{item?.price}</div>
		</div>
	);
};

export default ProductCard;
