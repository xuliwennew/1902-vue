const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")


//.js .css .json
module.exports = {
    mode:"development", //production
    entry:path.resolve(__dirname,"router-demo/main.js"),
    output:{
        filename:"app.bundle.js",
        path:path.resolve(__dirname,"router-demo")
    },
    resolve:{
       extensions:[".css",".js",".vue"]
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                loader:"style-loader!css-loader!sass-loader"
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]

}
