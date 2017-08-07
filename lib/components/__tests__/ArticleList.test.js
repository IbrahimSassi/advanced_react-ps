require('babel-polyfill');

import React from 'react';
import ArticleList from '../ArticleList';
import ArticleItem from '../ArticleItem';
// import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
describe('ArticleList', () => {
	const testProps = {
		articles: {
			a: {
				id: 'a',
				title: 'hello world',
				body: 'body 1'
			},
			b: {
				id: 'b',
				title: 'title 2',
				body: 'body2'
			}
		}
	};

	it('renders correctly', () => {
		const wrapper = shallow(
			<ArticleList {...testProps} />
		);
		expect(
			wrapper.find('ArticleItemContainer').length
		).toBe(2);
		expect(wrapper).toMatchSnapshot();
	});
});
