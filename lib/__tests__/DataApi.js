import StateApi from "../dataApi";
import { data } from "../testData";

const store = new StateApi(data);

describe("DataApi", () => {
	it("exposes articles as an object", () => {
		const articles = store.getState().articles;
		const articleId = data.articles[0].id;
		console.log(articleId);
		const articleTitle = data.articles[0].title;

		expect(articles).toHaveProperty(articleId.toString());
		expect(articles[articleId].title).toBe(articleTitle);
	});

	it("exposes authors as an object", () => {
		const authors = store.getState().authors;
		const authorId = data.authors[0].id;
		const authorFirstName = data.authors[0].name;
		expect(authors).toHaveProperty(authorId.toString());
		expect(authors[authorId].name).toBe(authorFirstName);
	});
});
