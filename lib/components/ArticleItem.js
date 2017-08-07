import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';
const styles = {
	article: {
		paddingBottom: 10,
		borderBottomStyle: 'solid',
		borderBottomColor: '#aaa',
		borderBottomWidth: 1,
		marginBottom: 10
	},
	title: {
		fontWeight: 'bold'
	},
	date: {
		fontSize: '0.85em',
		color: '#888'
	},
	author: {
		paddingTop: 10,
		paddingBottom: 10
	},
	body: {
		paddingLeft: 20
	}
};

const ArticleItem = ({ article, author }) => {
	return (
		<div style={styles.article}>
			<div style={styles.title}>
				{article.title}
			</div>
			<div style={styles.body}>
				{article.body}
			</div>
			<div style={styles.date}>
				{new Date().toDateString()}
			</div>
			<div style={styles.author}>
				<a href={author.website}>
					{author.name}
				</a>
			</div>
		</div>
	);
};

ArticleItem.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	})
};

function extraProps(store, originalProps) {
	return {
		author: store.lookupAuthor(originalProps.article.userId)
	};
}

export default storeProvider(extraProps)(ArticleItem);
