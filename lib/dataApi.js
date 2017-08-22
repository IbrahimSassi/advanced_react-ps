class StateApi {
	constructor(rawData) {
		this.data = {
			articles: this.mapIntoObject(rawData.articles),
			authors: this.mapIntoObject(rawData.authors),
			searchTerm: ''
		};

		this.subscriptions = {};
		this.lastSubscriptionId = 0;
	}

	mapIntoObject(arr) {
		return arr.reduce((acc, curr) => {
			acc[curr.id] = curr;
			return acc;
		}, {});
	}

	lookupAuthor = authorId => {
		return this.data.authors[authorId];
	};

	getState = () => {
		return this.data;
	};

	subscribe = cb => {
		this.lastSubscriptionId++;
		this.subscriptions[this.lastSubscriptionId] = cb;
		return this.lastSubscriptionId;
	};

	unsubscribe = subscriptionId => {
		delete this.subscriptions[subscriptionId];
	};

	notifySubscribers = () => {
		Object.values(this.subscriptions).forEach(cb => cb());
	};

	startClock = () => {
		setInterval(() => {
			this.mergeWithState({
				timestamp: new Date()
			});
		}, 1000);
	};
	mergeWithState = newState => {
		this.data = {
			...this.data,
			...newState
		};
		this.notifySubscribers();
	};

	setSearchTerm = searchTerm => {
		this.mergeWithState({ searchTerm });
	};
}

export default StateApi;
