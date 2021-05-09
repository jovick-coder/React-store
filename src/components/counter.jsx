import React, { Component } from 'react';
import NavBar from './navBar';

class Counter extends Component {
	state = {
		total: 0,
		items: [
			{
				// id: 1001,
				name: 'Pen',
				price: 120,
				quantity: 5
			},
			{
				// id: 1002,
				name: 'Pencil',
				price: 20,
				quantity: 5
			},
			{
				// id: 1003,
				name: 'Book',
				price: 100,
				quantity: 10
			},
			{
				// id: 1004,
				name: 'Cup',
				price: 200,
				quantity: 20
			}
		]
	};
	style = {
		name: {
			width: '50%',
			padding: 2,
			margin: 2
		},
		width: '23%',
		padding: 2,
		margin: 2
	};

	total() {
		let { items, total } = this.state;
		let itemsArray = [
			...items
		];

		let itemObjectQuantity = itemsArray.map((items) => items.quantity);

		let itemTotal = itemObjectQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

		console.log(total);

		let totalObject = { total };

		let newTotal = { total: itemTotal };

		total = newTotal;
		this.setState({ total });
		console.log(totalObject);
		console.log(newTotal);

		// console.log(this.setState({ total: }));

		// this.setState({ tosta: itemTotal });
		//   handleChange: function (e) {
		//     // 1. Make a shallow copy of the items
		//     let items = [...this.state.items];
		//     // 2. Make a shallow copy of the item you want to mutate
		//     let item = {...items[1]};
		//     // 3. Replace the property you're intested in
		//     item.name = 'newName';
		//     // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
		//     items[1] = item;
		//     // 5. Set the state to our new copy
		//
		// },

		// 1. Make a shallow copy of the items
		// let arrayTotal = [
		// 	...total
		// ];

		// let newTotal = [
		// 	...arrayTotal
		// ];
		// newTotal = itemTotal;
		// this.setState({ newTotal });

		// console.log(itemObjectQuantity);
		console.log('Total', itemTotal);
		// console.log(arrayTotal);
		// console.log(newTotal);
	}
	render() {
		return (
			<React.Fragment>
				<NavBar totalItem={this.state.total} selected={true} />
				<section>
					{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-md">
							<span className="navbar-brand" href="">
								Total
								<span className="badge bg-secondary px-2 text-white mx-2">{this.checkTotal()}</span>
							</span>
						</div>
					</nav> */}
					<div className="container">
						<div className="row">
							{/* <div className="col-2-sm" /> */}
							<div className="card my-3 p-2">
								<div className="card-header">
									<h3 className="text-center">Add product to stock</h3>
									<input className="" style={this.style.name} placeholder="Product" id="pname" />
									<input className="" style={this.style} placeholder="Price" id="pamount" />
									<input className="" style={this.style} placeholder="Quantity" id="pquantity" />

									<button
										className="btn btn-success btn-sm m-3 float-right"
										onClick={this.addProduct}
									>
										Add item
									</button>
								</div>
								<div className="">
									<h3 className="m-2 text-center">
										<u>Available Stocks</u>
									</h3>
									<table className="table">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Name</th>
												<th scope="col">Price</th>
												<th scope="col">Quantity</th>
												<th scope="col" />
											</tr>
										</thead>
										<tbody>
											{this.state.items.map((item, index) => {
												return (
													<tr key={index}>
														<td>{index + 1}</td>
														{/* <td>{index}</td> */}
														<td>{item.name}</td>
														<td>{item.price}</td>
														<td>{item.quantity}</td>
														<td>
															<button
																className="btn btn-secondary px-3 btn-sm"
																onClick={() => this.minus(index, item)}
															>
																-
															</button>
															{/* <button
															className="btn btn-secondary px-3 btn-sm"
															onClick={() => this.sub(index)}
														>
															-
														</button> */}
															{/* <button
															className="btn btn-secondary px-3 btn-sm"
															onClick={() => this.handleChange(index)}
														>
															-
														</button> */}
														</td>
													</tr>
												);
											})}
										</tbody>
										{/* <button className="btn btn-link" onClick={this.hi}>
										hi function
									</button> */}
										{this.total()}
									</table>
								</div>
							</div>
							{/* <div className="col" /> */}
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}

	addProduct = () => {
		// receive user input
		const pname = document.querySelector('#pname').value;
		const pquantity = document.querySelector('#pquantity').value;
		const pamount = document.querySelector('#pamount').value;

		if (pname === '' || pamount === '' || pquantity === '') {
			console.log('Fill Product details to add Product');
		} else {
			//  Make a shallow copy of the items
			let items = [
				...this.state.items
			];
			let itemArray = [
				...this.state.items.map((i) => i.name.toLowerCase())
			];
			// console.log('Array item ' + itemArray);
			// console.log('All the array ' + [ ...items ]);

			let lowCasePname = pname.toLowerCase();
			let itemId = itemArray.indexOf(lowCasePname);
			if (itemId === -1) {
				console.log(pname + ' was not found');
				//  Craete an object for the user input
				let newItem = {
					name: pname,
					quantity: pquantity,
					price: pamount
				};
				//  Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
				items = [
					...items,
					newItem
				];
				console.log(items);
				// Set the state to our new copy
				this.setState({ items });
			} else {
				console.log(pname + ' was found');
				console.log(items);

				let rProductQuantity = this.state.items[itemId].quantity + pquantity;
				console.log(rProductQuantity);
			}
		}
	};

	minus = (id, item) => {
		const { name, quantity } = item;
		const amount = prompt('how many ' + name + ' was bought');
		if (amount !== null) {
			// 1. Make a shallow copy of the items
			let items = [
				...this.state.items
			];
			// 2. Make a shallow copy of the item you want to mutate
			let item = { ...items[id] };
			// check if quantity is less then demanded
			if (item.quantity === 0 || amount > item.quantity) {
				console.log(name + ' out of stock we cant get up ' + amount + ' of them');
			} else {
				// new qualtity
				let newQuantity = quantity - amount;
				if (Number.isNaN(newQuantity)) {
					console.log(`${amount} is not a value to be subtracted no changes made`);
				} else {
					// 3. Replace the property you're intested in
					item.quantity = newQuantity;
					// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
					items[id] = item;
					// 5. Set the state to our new copy
					this.setState({ items });
				}
			}
		} else {
			console.log('Nothing was bought');
		}
	};

	// btnClass = () => {
	// 	if (this.state.item.quantity === 0) {
	// 		// return 'btn btn-secondary px-4 disabled';
	// 		const btnclass = 'btn btn-secondary px-4 disabled';
	// 		return btnclass;
	// 	} else {
	// 		const btnclass = '';
	// 		return btnclass;
	// 	}
	// 	return btnclass;
}

export default Counter;
