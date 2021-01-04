module.exports = {
    devServer : {
        proxy : {
            'biliinfdata' : {
                target : 'http://www.dreamcenter.top',
                changeOrigin : true
            }
        }
    }
}