/*
	검색기능 추가 
	useParams : 라우터 사용시 

	주소 뒤에 /?q=파라메터
*/

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩 css
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
	const [productsList, setProductsList] = useState([]);
	let [query, setQuery] = useSearchParams(); //주소뒤 파라메터

	const getProducts = async () => {
		let keyword  = query.get('q') || "";
		//쿼리값을 읽어온다 / q의 벨류 (아이템을 가져온다) / 없을 땐 빈 스트링
		let url = `https://my-json-server.typicode.com/SDH93/hnm/products?q=${keyword}`;
		//
		let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
		let data = await response.json();
		setProductsList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]); //키워드를 입력할 때 마다 getProducts 함수 실행

	return (
		<div>
			<Container>
				<Row>
					{productsList.map((menu) => (
						<Col sm={6} lg={3}>
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;

// https://www.npmjs.com/package/json-server
// $ npm install -g json-server
// $ json-server --watch db.json --port 5000
