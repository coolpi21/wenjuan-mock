/**
 * @description 生成问卷列表
 */

const Mock = require("mockjs");

const Random = Mock.Random;

function getQuestionList(opt = {}) {
	const { len = 10, isDeleted = true, isStar = true } = opt;
	const list = [];
	for (let i = 0; i < len; i++) {
		list.push({
			_id: Random.id(),
			title: Random.ctitle(),
			isPublished: Random.boolean(),
			answerCount: Random.natural(50, 100),
			createdAt: Random.datetime(),
			isStar,
			isDeleted,
		});
	}
	return list;
}

module.exports = getQuestionList;
