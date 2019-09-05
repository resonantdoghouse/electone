const rules = require("./webpack.rules");

rules.push(
  {
    test: /\.css$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }]
  },
  {
    test: /\.(ogg|mp3|wav|mpe?g)$/i,
    use: "file-loader"
  }
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules
  }
};
