# trash

> 垃圾分类查询工具

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 垃圾分类的具体细节

- 纸制品一般属于可回收物，但是污染过的比如沾染了油渍的纸是属于干垃圾。
- 大骨头属于干垃圾，小骨头属于湿垃圾。
- 雨伞
- 旧衣服 旧鞋子

可回收物主要包括：
- 纸类
  - 报纸、杂志、传单、纸板箱、牛皮纸等等其他未受污染的纸制品，如果油渍污染过的纸制品属于干垃圾。 
  - 纸杯不属于可回收物哦，属于干垃圾。
- 金属
  - 铁、铜、侣等制品
- 玻璃
  - 玻璃瓶罐、平板玻璃及其他玻璃制品
- 出塑料袋外的塑料制品
  - 泡沫塑料、塑料瓶、硬塑料等等
- 橡胶及橡胶制品