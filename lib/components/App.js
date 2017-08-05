import React from "react";
import ArticleList from "./ArticleList";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.store.getState();
	}

	//lookup author
	// articleAction = {
	// 	lookupAuthor: authorId => this.state.authors[authorId]
	// };

	render() {
		return (
			<ArticleList articles={this.state.articles} store={this.props.store} />
		);
	}
}

export default App;
