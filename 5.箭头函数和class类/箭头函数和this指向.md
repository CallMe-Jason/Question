## 箭头函数的写法
语法为 const fn = () => {}
1.无参数时要写()
2.有一个参数时可以省略小括号
3.有两个参数时必须要有小括号，中间用逗号分隔
4.函数体只有一句话是可以省略大括号和return，其他时候必须要写return
## this指向
1.在普通函数中this指向window
2.严格模式下全局的this为undefined,非严格模式下指向window
3.定时器中this指向window
4.箭头函数中不绑定this,在箭头函数中的this指向只取决于箭头函数所处的环境
5.除了以上情况this基本是谁调用就指向谁，在面向对象编程中例外（即class类）
6.可以通过call,bind,apply改变this指向，即把某个函数内部的this指向改为指向什么，其中bind不会马上调用，call会直接调用，而apply要接受一个数组