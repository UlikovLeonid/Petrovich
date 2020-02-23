import React from 'react';
import { connect } from 'react-redux';
import { setItems } from './actions/items';
import axios from 'axios';


class App extends React.Component {
	componentWillMount() {
		const { setItems } = this.props;
		axios.get('/items.json').then(({ data }) => {
			setItems(data);
		});
	}
	render() {
		const { items } = this.props;
		return (
			<ul>
				{
					items && items.map(item => (
						<div>
							<div>Код: {item.code}</div>
							<div className='item-title'>{item.title}</div>
							<div><strong>Могут понадобиться:</strong> {item.assocProducts}</div>
						</div>
					))
				}
			</ul>
		)
	}
}

const mapStateToProps = ({ items }) => ({
	items: items.items
})

const mapDispatchToProps = dispatch => ({
	setItems: items => dispatch(setItems(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
