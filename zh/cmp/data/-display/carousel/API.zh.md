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
| className | 组件自定义类名 | string | |
| dotsClass | 指示器类名 | string | |
| prevArrow | 自定义上一个箭头 | HTMLElement | |
| nextArrow | 自定义下一个箭头 | HTMLElement | |
| theme | 箭头和指示器主题 | dark \| light| light |
| arrows | 是否显示箭头 | boolean | false |
| dotsActionType | 指示器触发方式 | [['click', 'hover']] | ['ckick'] |
| slidesToShow | 一个画面中显示多少张（可以是小数）| number | 1 |
| verticalSwiping | 垂直方向拖动 | boolean | false |
| pauseOnDotsHover | 鼠标在指示器上停止播放 | boolean | true |
| pauseOnArrowsHover | 鼠标在箭头上停止播放 | boolean | true |

## 方法

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber) | 切换到指定面板 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

更多参数可参考：<https://github.com/akiran/react-slick>

## Q&A

1. 拖动的过程出现画面卡住一半的情况。

  解决方案：请使用 div 对内容多包裹一层进行处理。详情参考垂直demo。

2. 切换下一张图片时导致溢出的问题

  解决方案：配置 slidesToShow 为小数点，可以避免。 例如：理论上一个画面显示 1 张，实际确显示了 1.01  张，配置 0.99 即可解决。

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