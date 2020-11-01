# i-accounting-api
A simple api for i-accounting that use Koa.

## 环境配置
node >= 12

Serverless Framework

```
npm i -g serverless
serverless dynamodb install
serverless dynamodb migrate
```

## 配置 Credentials
```serverless config credentials --provider aws --key 1234 --secret 5678```
https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/

## 开发
```npm run start```

## 部署
```npm run deploy```
