import React from 'react';
import ArticleItem from './ArticleItem';
import storeProvider from './storeProvider';
class ArticleList extends React.PureComponent {
	render() {
		return (
			<div>
				{Object.values(this.props.articles).map(article =>
					<ArticleItem key={article.id} article={article} />
				)}
			</div>
		);
	}
}

export default ArticleList;
