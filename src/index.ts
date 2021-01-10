import api from "./api/index"
import Koa from "koa"
import Router from "koa-router"
import koaBody from "koa-body"

type MiAccount = {
    account?: string
    password?: string
    boundDate?: string
    step?: number
}

const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.post('/sport/updateStep', async (ctx, next) => {
    const date: MiAccount = ctx.request.body;
    let body = null;
    await api.updateStep(date.account!, date.password!, date.step!, function (res) {
        console.log(res);
        body = res.body
    });
    console.log(body);
    ctx.body = body;
});
app.use(koaBody())
app.use(router.routes());
app.listen(3000);
