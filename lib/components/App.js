import React from "react";
import axios from "axios";
import DataApi from "../dataApi";
import data from "../testData.json";
import ArticleList from "./ArticleList";

const api = new DataApi(data);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: api.getArticles(),
			authors: api.getAuthors()
		};
	}

	//lookup author
	articleAction = {
		lookupAuthor: authorId => this.state.authors[authorId]
	};

	render() {
		return (
			<ArticleList
				articles={this.state.articles}
				articleActions={this.articleAction}
			/>
		);
	}
}

export default App;
