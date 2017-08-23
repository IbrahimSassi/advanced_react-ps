import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
	state = {
		searchTerm: ''
	};

	componentWillUpdate(nextProps, nextState) {
		console.log('Updating');
	}

	handleChange = event => {
		this.setState(
			{
				searchTerm: event.target.value
			},
			() => {
				this.doSearch();
			}
		);
	};

	doSearch = debounce(() => {
		this.props.store.setSearchTerm(this.state.searchTerm);
	}, 300);

	render() {
		return (
			<div>
				<input
					type="search"
					placeholder="Enter search term"
					onChange={this.handleChange}
					value={this.state.searchTerm}
				/>
			</div>
		);
	}
}

export default storeProvider()(SearchBar);
