const Mock = require('mockjs');
const getQuestionList = require('./data/getQuestionList.js');

const Random = Mock.Random;

module.exports = [
	{
		url: '/api/question/:id',
		method: 'get',
		response() {
			return {
				errno: 0,
				data: {
					id: Random.id(),
					title: Random.ctitle(),
				},
			};
		},
	},
	{
		url: '/api/question',
		method: 'post',
		response() {
			return {
				errno: 0,
				data: {
					id: Random.id(),
				},
			};
		},
	},
	{
		// 获取(查询)问卷列表
		url: '/api/question',
		method: 'get',
		response(ctx) {
			const { url = '', query = {} } = ctx;
			const isDeleted = url.includes('isDeleted=true');
			const isStar = url.includes('isStar=true');
			const pageSize = Number(query.pageSize);

			return {
				errno: 0,
				data: {
					list: getQuestionList({ len: pageSize, isDeleted, isStar }),
					total: 100,
				},
			};
		},
	},
	{
		// 更新问卷
		url: '/api/question/:id',
		method: 'patch',
		response() {
			return {
				errno: 0,
			};
		},
	},
	{
		// 复制问卷
		url: '/api/question/duplicate/:id',
		method: 'post',
		response() {
			return {
				errno: 0,
				data: {
					id: Random.id(),
				},
			};
		},
	},
	{
		// 删除问卷
		url: '/api/question',
		method: 'delete',
		response() {
			return {
				errno: 0,
			};
		},
	},
];
