import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { setItems } from './actions/items';
import axios from 'axios';
import TopMenu from './components/Menu/Menu';
import ItemCard from './components/ItemCard/ItemCard';


class App extends React.Component {
	componentWillMount() {
		const { setItems } = this.props;
		axios.get('/items.json').then(({ data }) => {
			setItems(data);
		});
	}
	render() {
		const { items, isReady } = this.props;
		return (
			<Container>
				<TopMenu />


				{
					!isReady
						? 'Загрузка...'
						: items.map(item => <ItemCard {...item} />)
				}

			</Container>

		)
	}
}

const mapStateToProps = ({ items }) => ({
	items: items.items,
	isReady: items.isReady
})

const mapDispatchToProps = dispatch => ({
	setItems: items => dispatch(setItems(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
