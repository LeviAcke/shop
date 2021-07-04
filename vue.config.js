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
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.shop.eduwork.cn', //接口域名
                changeOrigin: true,             //是否跨域
                // ws: true,                       //是否代理 websockets
                secure: true,                   //是否https接口
                pathRewrite: {                  //路径重置
                    '^/api': ''
                }
            }
        }
    }


}