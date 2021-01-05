module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/my-vue-furtherstudy" : "/",
    devServer : {
        proxy : {
            'biliinfdata' : {
                target : 'http://www.dreamcenter.top',
                changeOrigin : true
            }
        }
    }
}