import React from 'react';
import Perf from 'react-addons-perf'; // ES6
if (typeof window !== 'undefined') window.Perf = Perf;
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = this.appState();
	}

	onStoreChange = () => {
		this.setState(this.appState());
	};

	componentDidMount() {
		this.mySubscriptionId = this.props.store.subscribe(
			this.onStoreChange
		);
		this.props.store.startClock();
		Perf.start();

		setTimeout(() => {
			Perf.stop();
			console.log(Perf.getWasted());
		}, 5000);
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.mySubscriptionId);
	}

	static childContextTypes = {
		store: PropTypes.object
	};

	appState = () => {
		const { articles, searchTerm } = this.props.store.getState();
		return { articles, searchTerm };
	};

	getChildContext() {
		return {
			store: this.props.store
		};
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (
	// 		nextState.articles !== this.state.articles ||
	// 		nextState.searchTerm !== this.state.searchTerm
	// 	);
	// }

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
