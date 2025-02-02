module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 필요한 확장자 추가
      },      
  };
  