class dataApi {
	constructor(rawData) {
		this.rawData = rawData.data;
	}

	mapIntoObject(arr) {
		return arr.reduce((acc, curr) => {
			acc[curr.id] = curr;
			return acc;
		}, {});
	}

	getAuthors() {
		return this.mapIntoObject(this.rawData.authors);
	}
	getArticles() {
		return this.mapIntoObject(this.rawData.articles);
	}
}

export default dataApi;
