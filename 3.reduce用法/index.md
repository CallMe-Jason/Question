## raduce的用法
arr.raduce(function(prev, cur, index, arr) {
  ...
}, init)

prev 表示上一次调用回调时的返回值，或者初始值init
cur 表示当前正在处理的数组元素
index 表示当前正在处理的数组元素的索引，若提供inti值，则索引为0， 否则所以为1
arr 表示原数组
init 表示初始值

## raduce的本质
本质上，reduce是三种运算的合成
  遍历
  变形
  累积

raduce会把数组的每一项进行循环(遍历),并在函数中可以进行操作(变形),每次的返回值作为下一次的prev使用(累积)