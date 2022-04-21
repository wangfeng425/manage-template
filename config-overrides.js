const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('./src')
  })
)