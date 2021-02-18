import api from "./api/index"
const { account, password, step } = process.env
if (account && password) {
    const hours = new Date().getHours();

    let mStep = 0;
    if (!step) {
        mStep = hours <= 12 ? 10000 : hours <= 20 ? 20000 : 23456;
    } else {
        mStep = Number(step + Math.ceil(Math.random() * 3000) + 1);
    }
    api.updateStep(account, password, mStep, function (resp) {
        console.log(resp.data);
        console.log(`update step is ${mStep}.`);
        console.log(`the server's time is ${hours}.`)
        console.log("finished");
    });
} else {
    console.log("the secrets is incomplete");
}

