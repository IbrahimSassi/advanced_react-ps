import React from 'react';
import storeProvider from './storeProvider';
class Timestamp extends React.Component {
	render() {
		return (
			<div>
				{this.props.timestamp && this.props.timestamp.toString()}
			</div>
		);
	}
}

function extraProps(store, originalProps) {
	return {
		timestamp: store.getState().timestamp
	};
}

export default storeProvider(extraProps)(Timestamp);
