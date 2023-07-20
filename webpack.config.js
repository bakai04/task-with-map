module.exports = {
  module: {
    rules: [
      {
        test: /\.module.scss$/,
        use: [
          { 
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
