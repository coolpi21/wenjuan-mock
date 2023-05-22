const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList.js");

const Random = Mock.Random;

module.exports = [
	{
		url: "/api/question/:id",
		method: "get",
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
		url: "/api/question",
		method: "post",
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
		url: "/api/question",
		method: "get",
		response(ctx) {
			const { url = "" } = ctx;
			const isDeleted = url.includes("isDeleted=true");
			const isStar = url.includes("isStar=true");
			return {
				errno: 0,
				data: {
					list: getQuestionList({ isDeleted, isStar }),
					total: 100,
				},
			};
		},
	},
	{
		// 更新问卷
		url: "/api/question/:id",
		method: "patch",
		response() {
			return {
				errno: 0,
			};
		},
	},
];
