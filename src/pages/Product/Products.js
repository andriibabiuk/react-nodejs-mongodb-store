import axios from 'axios';
import React from 'react';

import Products from '../../components/Products/Products';

class ProductsPage extends React.Component {
	state = { isLoading: true, products: [] };
	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.search !== this.props.location.search) {
			this.fetchData();
		}
	}

	productDeleteHandler = productId => {
		axios
			.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`)
			.then(result => {
				console.log(result);
				this.fetchData();
			})
			.catch(err => {
				this.props.onError(
					'Deleting the product failed. Please try again later',
				);
				console.log(err);
			});
	};

	changePage = direction => {
		const query = new URLSearchParams(this.props.location.search);
		let page = parseInt(query.get('page') || 1, 10);
		if (direction === 'next') {
			page++;
		} else if (direction === 'prev' && page > 1) {
			page--;
		}
		this.props.history.push(`/products?page=${page}`);
	};

	fetchData = () => {
		const query = new URLSearchParams(this.props.location.search);
		const page = query.get('page') || 1;

		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/products?page=${page}`)
			.then(productsResponse => {
				this.setState({ isLoading: false, products: productsResponse.data });
			})
			.catch(err => {
				this.setState({ isLoading: false, products: [] });
				this.props.onError('Loading products failed. Please try again later');
				console.log(err);
			});
	};
	render() {
		let content = <p>Loading products...</p>;
		const query = new URLSearchParams(this.props.location.search);
		const page = parseInt(query.get('page') || 1, 10);

		if (!this.state.isLoading && this.state.products.length > 0) {
			content = (
				<Products
					products={this.state.products}
					onDeleteProduct={this.productDeleteHandler}
				/>
			);
		}
		if (!this.state.isLoading && this.state.products.length === 0) {
			content = <p>Found no products. Try again later.</p>;
		}
		return (
			<main>
				{content}
				{!this.state.isLoading && (
					<section style={{ textAlign: 'center', marginTop: '2rem' }}>
						<button
							onClick={() => this.changePage('prev')}
							disabled={page <= 1}
						>
							Previous
						</button>
						<span style={{ margin: '0 1rem' }}>Page {page}</span>
						<button
							onClick={() => this.changePage('next')}
							disabled={this.state.products.length === 0}
						>
							Next
						</button>
					</section>
				)}
			</main>
		);
	}
}

export default ProductsPage;
