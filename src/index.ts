import api from "./api/index"


const { account, password, step } = process.env
if (account && password) {
    const hours = new Date().getHours();
    console.log(`当前服务器是${hours}点。`)
    let mStep = Number(step);
    if (mStep) {
        mStep = hours <= 12 ? 10000 : hours <= 20 ? 20000 : 23456;
    }
    console.log("更新步数为：" + mStep);
    api.updateStep(account, password, mStep, function (resp) {
        console.log(resp);
    });
} else {
    console.log("账户信息不完整");
}

