const path = require('path');

module.exports = {
    lintOnSave: true,
    outputDir: path.resolve(__dirname, '../priv/static'),
    devServer: {
        proxy: {
            "/api/*": {
                target: "http://localhost:4000",
                secure: false
            }
        }
    }
};