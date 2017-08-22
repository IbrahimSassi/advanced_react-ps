import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.store.getState();
	}

	static childContextTypes = {
		store: PropTypes.object
	};
	getChildContext() {
		return {
			store: this.props.store
		};
	}

	setSearchTerm = searchTerm => {
		this.setState({
			searchTerm
		});
	};

	//lookup author
	// articleAction = {
	// 	lookupAuthor: authorId => this.state.authors[authorId]
	// };

	render() {
		let { articles, searchTerm } = this.state;

		if (searchTerm) {
			articles = pickBy(articles, (value, key) => {
				return (
					value.title.match(searchTerm) ||
					value.body.match(searchTerm)
				);
			});
		}

		return (
			<div>
				<SearchBar doSearch={this.setSearchTerm} />
				<ArticleList
					articles={articles}
					store={this.props.store}
				/>
			</div>
		);
	}
}

export default App;
