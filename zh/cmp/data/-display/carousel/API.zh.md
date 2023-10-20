---
title: API
---

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterChange | 切换面板的回调 | function(current) | 无 |
| autoplay | 是否自动切换 | boolean | false |
| beforeChange | 切换面板的回调 | function(from, to) | 无 |
| dots | 是否显示面板指示点 | boolean | true |
| easing | 动画效果 | string | linear |
| effect | 动画效果函数，可取 scrollx, fade | string | scrollx |
| vertical | 垂直显示 | boolean | false |

## 方法

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber) | 切换到指定面板 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

更多参数可参考：<https://github.com/akiran/react-slick>

<style>
  .c7n-slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.c7n-slick-slide h3 {
  color: #fff;
}

.slick-slide img {
  margin: auto;
}

.my-class .slick-next::before {
  content: "->";
  font-size: 12px;
  line-height: 1.5;
  padding-left: 5px;
}
.my-class .slick-prev::before {
  content: "<-";
  font-size: 12px;
  line-height: 1.5;
  padding-left: 5px;
}
.my-class {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.my-class h3 {
  color: #fff;
}

.c7n-carousel .mydot-class li button{
  background: red;
  opacity: 1;
}
</style>