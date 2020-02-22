import React from 'react';
import { connect } from 'react-redux'
import { setItems } from './actions/items'

class App extends React.Component {
	render() {
		const { items } = this.props.items;
		const { setItems } = this.props;
		const newItems = [
			{
				id: 0,
				title: "Shopping cart"
			}
		];
		return (
			<div className="container">
				<h1>{items[0].title}</h1>
				<button onClick={setItems.bind(this, newItems)}>SET NEW ITEMS</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	setItems: items => dispatch(setItems(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
