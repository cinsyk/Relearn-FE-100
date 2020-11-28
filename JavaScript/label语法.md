## 终止循环

今天复习js基础发现了一个以前没有注意的语句，可以配合 break 及 continue 来终止循环。这个就是标签label。
我们都知道 label 在 html 中是用来绑定 input 的，那么在 js 中 label 则是用来定位的。

## label 语法
使用label语法，我们可以在一个 for 循环 或一个代码块之前给它起一个名字，例如 top

```
top : 
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
```

使用 label 名称，再配合上 break ， 我们可以在达到条件后很轻易的跳出双层循环，我们也可以配合 continue 语句来使用，可以达到跳出双层循环的效果。

```
top : 
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
```
