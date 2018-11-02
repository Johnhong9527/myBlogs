# BasicAjax

## Ajax

定义:用 JavaScript 执行异步网络请求<br>
[资料](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499861493e7c35be5e0864769a2c06afb4754acc6000)

### code

```js
function success(text) {
  var textarea = document.getElementById('test-response-text');
  textarea.value = text;
}

function fail(code) {
  var textarea = document.getElementById('test-response-text');
  textarea.value = 'Error code: ' + code;
}

var request; // 新建XMLHttpRequest对象
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject('Microsoft.XMLHTTP');
}
request.onreadystatechange = function() {
  // 状态发生变化时，函数被回调
  if (request.readyState === 4) {
    // 成功完成
    // 判断响应结果:
    if (request.status === 200) {
      // 成功，通过responseText拿到响应的文本:
      return success(request.responseText);
    } else {
      // 失败，根据响应码判断失败原因:
      return fail(request.status);
    }
  } else {
    // HTTP请求还在继续...
  }
};

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');
```

通过检测`window`对象是否有`XMLHttpRequest`属性来确定浏览器是否支持标准的`XMLHttpRequest`。注意，不要根据浏览器的`navigator.userAgent`来检测浏览器是否支持某个`JavaScript`特性，一是因为这个字符串本身可以伪造，二是通过 IE 版本判断`JavaScript`特性将非常复杂。<br/>
<br/>
当创建了`XMLHttpRequest`对象后，要先设置`onreadystatechange`的回调函数。在回调函数中，通常我们只需通过`readyState === 4`判断请求是否完成，如果已完成，再根据`status === 200`判断是否是一个成功的响应。<br/>
<br/>
`XMLHttpRequest`对象的`open()`方法有 3 个参数，第一个参数指定是`GET`还是`POST`，第二个参数指定`URL`地址，第三个参数指定是否使用异步，默认是`true`，所以不用写。<br/>
<br/>
注意，千万不要把第三个参数指定为`false`，否则浏览器将停止响应，直到`AJAX`请求完成。如果这个请求耗时 10 秒，那么 10 秒内你会发现浏览器处于“假死”状态。

最后调用 send()方法才真正发送请求。GET 请求不需要参数，POST 请求需要把 body 部分以字符串或者 FormData 对象传进去。<br/>

## get | post 的区别

[知乎](https://www.zhihu.com/question/28586791)

#### RFC7231 里定义了 HTTP 方法的几个性质：

##### 1.Safe - 安全

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的「安全」和通常理解的「安全」意义不同，如果一个方法的语义在本质上是「只读」的，那么这个方法就是安全的。客户端向服务端的资源发起的请求如果使用了是安全的方法，就不应该引起服务端任何的状态变化，因此也是无害的。 此 RFC 定义，GET, HEAD, OPTIONS 和 TRACE 这几个方法是安全的。但是这个定义只是规范，并不能保证方法的实现也是安全的，服务端的实现可能会不符合方法语义，正如上文说过的使用 GET 修改用户信息的情况。引入安全这个概念的目的是为了方便网络爬虫和缓存，以免调用或者缓存某些不安全方法时引起某些意外的后果。User Agent（浏览器）应该在执行安全和不安全方法时做出区分对待，并给用户以提示。<br>

##### 2.Idempotent - 幂等

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幂等的概念是指同一个请求方法执行多次和仅执行一次的效果完全相同。按照 RFC 规范，PUT，DELETE 和安全方法都是幂等的。同样，这也仅仅是规范，服务端实现是否幂等是无法确保的。引入幂等主要是为了处理同一个请求重复发送的情况，比如在请求响应前失去连接，如果方法是幂等的，就可以放心地重发一次请求。这也是浏览器在后退/刷新时遇到 POST 会给用户提示的原因：POST 语义不是幂等的，重复请求可能会带来意想不到的后果。<br>

##### 3.Cacheable - 可缓存性

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾名思义就是一个方法是否可以被缓存，此 RFC 里 GET，HEAD 和某些情况下的 POST 都是可缓存的，但是绝大多数的浏览器的实现里仅仅支持 GET 和 HEAD。关于缓存的更多内容可以去看[RFC7234](https://tools.ietf.org/html/rfc7234)。<br>

总而言之:
GET 的语义是请求获取指定的资源。GET 方法是安全、幂等、可缓存的（除非有 Cache-ControlHeader 的约束）,GET 方法的报文主体没有任何语义。POST 的语义是根据请求负荷（报文主体）对指定的资源做出处理，具体的处理方式视资源类型而不同。POST 不安全，不幂等，（大部分实现）不可缓存。为了针对其不可缓存性，有一系列的方法来进行优化，以后有机会再研究（FLAG 已经立起）。还是举一个通俗栗子吧，在微博这个场景里，GET 的语义会被用在「看看我的 Timeline 上最新的 20 条微博」这样的场景，而 POST 的语义会被用在「发微博、评论、点赞」这样的场景中。<br>

作者：杨光<br>
链接：https://www.zhihu.com/question/28586791/answer/145424285<br>
来源：知乎<br>
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<br>

### w3school 解释

比较 GET 与 POST<br>
下面的表格比较了两种 HTTP 方法：GET 和 POST。<br>

| 说明             | GET                                                                                                              | POST                                                                                 |
| :--------------- | :--------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| 后退按钮/刷新    | 无害                                                                                                             | 数据会被重新提交（浏览器应该告知用户数据会被重新提交）。                             |
| 书签             | 可收藏为书签                                                                                                     | 不可收藏为书签                                                                       |
| 缓存             | 能被缓存                                                                                                         | 不可收藏为书签                                                                       |
| 编码类型         | application/x-www-form-urlencoded                                                                                | application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。 |
| 历史             | 参数保留在浏览器历史中。                                                                                         | 参数不会保存在浏览器历史中。                                                         |
| 对数据长度的限制 | 是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。              | 无限制。                                                                             |
| 对数据类型的限制 | 只允许 ASCII 字符。                                                                                              | 没有限制。也允许二进制数据。                                                         |
| 安全性           | 与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。<br>在发送密码或其他敏感信息时绝不要使用 GET ！ | POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。              |
| 可见性           | 数据在 URL 中对所有人都是可见的。                                                                                | 数据不会显示在 URL 中。                                                              |

#####补充一个 get 和 post 在缓存方面的区别:
1.get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。<br>
2.post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。<br>


## 补充
get请求传参长度的误区 第一点:get|post请求,都没有长度的限制,get求限制来自于浏览器与服务器