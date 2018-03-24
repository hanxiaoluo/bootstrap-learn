# Bootstrap4 学习笔记2

这一篇记录通用工具类。

## 记录

Borders: 

```html
// 设置边框
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>

// 去除边框
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>

// 设置颜色
border-primary/secondary/success/danger/warning/info/light/dark/white

// 圆角
rounded/rounded-top/bottom/left/right/circle(圆形)/0(去除圆角)
```

Clearfix: 

```html
// 清除层级浮动
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
</div>
```

Close icon:

```html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

Colors: 

```html
// 文字颜色
.text-primary
.text-secondary
.text-success
.text-danger
.text-warning
.text-info
.text-light
.text-dark
.text-muted
.text-white

// 背景颜色
.bg-primary
.bg-secondary
.bg-success
.bg-danger
.bg-warning
.bg-info
.bg-light
.bg-dark
.bg-white
```

Display: 

```css
// d-{value} or d-{size}-{value} 控制显示逻辑
.d-none // 隐藏
.d-inline // 行内显示
.d-inline-block
.d-block // 占一行
.d-table
.d-table-cell
.d-table-row
.d-flex
.d-inline-flex
```

embed:(嵌入) 

```html
<div class="embed-responsive embed-responsive-16by9"> // 可以控制比例
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
```

flex: 

```css
// d-{value} or d-{size}-{value}
.d-flex  // 占据一行，内部是flex
.d-inline-flex // 只占据内容大小，内部是flex

.flex-row // 子元素从左到右
.flex-row-reverse // 子元素从右向左
.flex-column // 子元素从上到下
.flex-column-reverse // 子元素从下到上

// 水平对齐，针对每一个子元素
.justify-content-start // 子元素左对齐
.justify-content-end // 子元素右对齐
.justify-content-center // 子元素居中对齐
.justify-content-between // 子元素两端对齐
.justify-content-around // 子元素均匀分布

// 垂直对齐，针对每一个子元素
.align-items-start // 子元素top对齐
.align-items-end // 子元素bottom对齐
.align-items-center // 子元素垂直居中
.align-items-baseline // 子元素基准线对齐
.align-items-stretch // 子元素高度拉伸与父相同

// 用于多行flex,一整行上的所有子元素作为一个整体的控制
.align-content-start
.align-content-end
.align-content-center
.align-content-around
.align-content-stretch

// 用在子元素身上，改变自己的垂直对齐方式
.align-self-start
.align-self-end
.align-self-center
.align-self-baseline
.align-self-stretch

// 自动margin
ml-auto // 此元素左侧自动对齐
mr-auto // 此元素右侧自动对齐

// wrap
.flex-nowrap // flex容器为单行。该情况下flex子项可能会溢出容器
.flex-wrap // flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行
.flex-wrap-reverse // 反转 wrap

// order
order-0/12 // 0最靠前，12最靠后
```

float: 

```css
.float-left
.float-right
.float-none
```

image replacement: 

`<h1 class="text-hide" style="background-image: url('/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;">Bootstrap</h1>` 对SEO友好，一般使用图像。 

Position: 

```html
// 非相应式
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>

<div class="fixed-top">...</div>
<div class="fixed-bottom">...</div>
<div class="sticky-top">...</div>
```

Sizing:  

```css
// http://getbootstrap.com/docs/4.0/utilities/sizing/
// width 设置
w-25/2-50/w-75/w-100 宽度百分比设置

// height 设置
h-25/h-50/h75/h-100 高度百分比设置
mh-25/mh-50/mh-75/mh-100 最大高度百分比设定
```

Spacing: 

```css
// {property}{sides}-[{breakpoint}]-{size}
// m -> margin, p -> padding
// l -> left, r -> right, t -> top, b -> bottom, x -> left&right, y -> top&bottom, blank -> all 4 sides
// size * spacer
// 0 -> 0, 1 -> 0.25, 2-> 0.5, 3 -> 1.0, 4 -> 1.5, 5 -> 3, auto -> auto

mx-auto 居中， py-3
```

Text: 

```css
.text-left
.text-right
.text-center
.text-justify
.text-nowrap // 单行，溢出
.text-truncate // 宽度溢出...
.text-lowercase // 全小写
.text-uppercase // 全大写
.text-capitalize // 首字母大写

.font-weight-bold // 字体加粗
.font-weight-normal // 正常粗度
.font-weight-light // 稍微细
.font-italic // 斜体
```

Vertial Align: 

```css
// 内部字体对齐方式
.align-baseline 
.align-top
.align-middle
.align-bottom
.align-text-top
.align-text-bottom
```

Visible:  

```html
// 控制visible属性实现，与display属性不一样，不显示但是保留给screen readers.
<div class="visible">...</div>
<div class="invisible">...</div>
```



# V4重大改变

1. 整体使用Flex布局
2. 使用rem替代px,em
3. 使用reboot进行normalize
4. 丢弃panels,thumbnails,wells使用card替代
5. 丢弃内置icon,需要自己寻找第三方的。如 glyphicons/octicons/font awesome...
6. 丢弃jquery的affix插件
7. 丢弃pager，使用button定制
8. 高度可嵌套设计，不再严格限定父子关系
9. 大量css重命名
10. Grid系统，不再限定于12格了