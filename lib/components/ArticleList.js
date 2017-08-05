import React from "react";
import ArticleItem from "./ArticleItem";
const ArticleList = props => {
	return (
		<div>
			{Object.values(props.articles).map(article =>
				<ArticleItem
					key={article.id}
					article={article}
					actions={props.articleActions}
				/>
			)}
		</div>
	);
};
export default ArticleList;
