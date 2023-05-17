const koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index");

const app = new koa();
const router = new Router();

async function getRes(fn) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fn());
		}, 1000);
	});
}

mockList.forEach((item) => {
	const { url, method, response } = item;
	router[method](url, async (ctx) => {
		const res = await getRes(response);
		ctx.body = res;
	});
});

app.use(router.routes());
app.listen(3001);
