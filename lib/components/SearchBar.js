import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

export default class SearchBar extends React.Component {
	state = {
		searchTerm: ''
	};
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
		this.props.doSearch(this.state.searchTerm);
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

SearchBar.propTypes = {};
