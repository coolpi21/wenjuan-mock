const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
	{
		url: "/api/question/:id",
		method: "get",
		response() {
			// return {
			// 	errno: 0,
			// 	data: {
			// 		id: Random.id(),
			// 		title: Random.ctitle(),
			// 	},
			// };
			return {
				errno: 1,
        msg: '错误提示'
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
];
