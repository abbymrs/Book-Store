const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8089;

app.use("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin'));
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
});

app.use(cookieParser('managetest'));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(PORT, () => {
    console.log(`listening port ${PORT}`)
});

app.post('/api/login', (req, res) => {
    try {
        let payload = req.body;
        let resBody = {
            username: "",
            msg: '用户名或密码错误！',
            status: 0,
            redirectUrl: ''
        };
        let user = {
            name: 'abby',
            pwd: '111'
        };
        if (payload.username === user.name && payload.password === user.pwd) {
            res.cookie("isVisitLogin", 1, {
                maxAge: 60 * 1000 * 60 * 24 * 7,
                isLogin: true,
                httpOnly: true
            });
            resBody.msg = '登录成功！';
            resBody.status = 1;
            resBody.username = payload.username;
            resBody.redirectUrl = '/products/';
        }
        res.json(resBody);
    } catch (err) {
        console.log('------------------------------------------------------------');
        console.log('登录接口:' + err)
        console.log('------------------------------------------------------------');
        res.statusCode = 500;
        return res.json({ status: 10, errorMessage: '服务器异常' });
    }

});

app.get('/api/test', (req, res) => {
    res.header('token', 'test token');
    return res.json({ status: 200 });
});