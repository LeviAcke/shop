# shop

01. 上传远程仓库

02. 接口文档
    https://www.showdoc.com.cn/1207745568269674/6090118672254270

03. vscode提示‘Vetur find `tsconfig.json`/`jsconfig.json` 

   解决：添加vetur.config.js
    module.exports = {
        // vetur配置，会覆盖vscode中的设置。  default: `{}`
        settings: {
            "vetur.useWorkspaceDependencies": true,
            "vetur.experimental.templateInterpolationService": true
        },
        // 普通项目采用默认配置 default: `[{ root: './' }]`
    }

04. 为文件设置别名
        module.exports = {
        configureWebpack: {
            resolve: {
                alias: {
                    'assets': '@/assets',
                    'components': '@/components',
                    'network': '@/network',
                    'utils': '@/utils',
                    'views': '@/views',
                }
            }
        },
        publicPath: './'
    }
    非js 使用前面 加 ～


05. css 公共样式
https://github.com/necolas/normalize.css


06. 配置代理，解决跨域
        devServer: {
        proxy: {
            '/api': {
                target: 'https://api.shop.eduwork.cn', //接口域名
                changeOrigin: true,             //是否跨域
                ws: true,                       //是否代理 websockets
                secure: true,                   //是否https接口
                pathRewrite: {                  //路径重置
                    '^/api': ''
                }
            }
        }
    }


07. 
    滚动处理
    https://better-scroll.github.io/docs/zh-CN/plugins/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
