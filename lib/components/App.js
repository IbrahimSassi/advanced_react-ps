import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.store.getState();
	}

	onStoreChange = () => {
		this.setState(this.props.store.getState());
	};

	componentDidMount() {
		this.mySubscriptionId = this.props.store.subscribe(
			this.onStoreChange
		);

		this.props.store.startClock();
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.mySubscriptionId);
	}

	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		return {
			store: this.props.store
		};
	}

	render() {
		let { articles, searchTerm } = this.state;
		const searchRE = new RegExp(searchTerm, 'i');
		if (searchTerm) {
			articles = pickBy(articles, (value, key) => {
				return (
					value.title.match(searchRE) ||
					value.body.match(searchRE)
				);
			});
		}

		return (
			<div>
				<Timestamp />
				<SearchBar />
				<ArticleList articles={articles} />
			</div>
		);
	}
}

export default App;
