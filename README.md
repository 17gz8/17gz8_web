# 17gz8_web

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:4002
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## 本地运行步骤

1. 克隆项目到本地

       $ git clone [项目git地址]

2. 切换到develop分支

        $ cd 17gz8_web //进入项目
        $ git checkout -b develop remotes/origin/develop //git checkout -b [本地分支] [远程分支]

3. 启动

        $ npm run dev //浏览器访问localhost:4002

4. 开发

        ①需打开编辑器的eslint自动修复；
        ②对于小部分自动修复不了的问题要手动修复；
5. 推拉代码

        # 开发前拉取最新代码
        $ git pull origin develop //同步远程develop分支的代码到本地

        # 开发后提交自己的代码
        $ git status //查看本地修改
        $ git add . 
        $ git commit -m '[feat]:新增首页'//提交修改并注释，详看git注释规范
        $ git push origin develop //push 代码
        