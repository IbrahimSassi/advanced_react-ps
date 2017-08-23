import React from 'react';
import storeProvider from './storeProvider';
class Timestamp extends React.PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (
	// 		this.timeDisplay(this.props.timestamp) !==
	// 		this.timeDisplay(nextProps.timestamp)
	// 	);
	// }

	static timeDisplay = timestamp => {
		return timestamp.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});
	};

	render() {
		return (
			<div>
				{this.props.timestampDisplay}
			</div>
		);
	}
}

function extraProps(store, originalProps) {
	return {
		timestampDisplay: Timestamp.timeDisplay(
			store.getState().timestamp
		)
	};
}

export default storeProvider(extraProps)(Timestamp);
