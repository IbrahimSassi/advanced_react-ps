import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
	return class extends React.PureComponent {
		static displayName = `${Component.name}Container`;
		static contextTypes = {
			store: PropTypes.object
		};

		usedState = () => {
			return extraProps(this.context.store, this.props);
		};
		state = this.usedState();

		onStoreChange = () => {
			if (this.mySubscriptionId)
				// this.forceUpdate();
				this.setState(this.usedState());
		};

		componentDidMount() {
			this.mySubscriptionId = this.context.store.subscribe(
				this.onStoreChange
			);
		}

		componentWillUnmount() {
			this.context.store.unsubscribe(this.mySubscriptionId);
			this.mySubscriptionId = null;
		}

		componentWillUpdate(nextProps, nextState) {
			// console.log(this.state, nextState);
		}

		render() {
			return (
				<Component
					{...this.props}
					{...this.usedState()}
					store={this.context.store}
				/>
			);
		}
	};
};

export default storeProvider;
