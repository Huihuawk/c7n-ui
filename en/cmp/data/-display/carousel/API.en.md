---
title: API
---

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| afterChange | Callback function called after the current index changes | function(current) | - |
| autoplay | Whether to scroll automatically | boolean | `false` |
| beforeChange | Callback function called before the current index changes | function(from, to) | - |
| dots | Whether to show the dots at the bottom of the gallery | boolean | `true` |
| easing | Transition interpolation function name | string | `linear` |
| effect | Transition effect | `scrollx` \| `fade` | `scrollx` |
| vertical | Whether to use a vertical display | boolean | `false` |

## Methods

| Name | Description |
| ---- | ----------- |
| goTo(slideNumber) | Change current slide to given slide number |
| next() | Change current slide to next slide |
| prev() | Change current slide to previous slide |

For more info on the parameters, refer to the <https://github.com/akiran/react-slick>

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