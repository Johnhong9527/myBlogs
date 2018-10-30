var hModule = document.getElementsByClassName('h-module'); //获取模态框中的关闭按钮属性
var hhtImg = document.getElementById("hhtImg"); //设置模态框不同位置按钮点击之后展示的属性图片属性
var hText = document.getElementById("hText"); //设置模态框显示之后的提示信息
/*hImage函数
 * 由于图片只有一张，所以同时设置title属性以示区分
 * 通过 switch语句判断点击不同按钮，
 * 在模态框展示不同的图片。
 */
function hImage(e) {
  console.log();
  switch (e) {
    case 1:
      //hhtImg.src为设置需要展示的图片的地址
      hhtImg.src = "http://oigzh9iic.bkt.clouddn.com/%E4%BA%AB%E6%9C%88%E4%BC%9A%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg";
      hhtImg.title = "这里是" + e; //此处设置鼠标悬浮于图片时显示的文字
      hText.innerHTML = "这里是二维码" + e; //此出设置模态框显示之后，展示提示文字的内容
      break;
    case 2:
      hhtImg.src = "http://oigzh9iic.bkt.clouddn.com/%E4%BA%AB%E6%9C%88%E4%BC%9A%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg";
      hhtImg.title = "这里是" + e;
      hText.innerHTML = "这里是二维码" + e;
      break;
    case 3:
      hhtImg.src = "http://oigzh9iic.bkt.clouddn.com/%E4%BA%AB%E6%9C%88%E4%BC%9A%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg";
      hhtImg.title = "这里是" + e;
      hText.innerHTML = "这里是二维码" + e;
      break;
  }
  hModule[0].style.display = "block";
}
/*hShow函数
 * 功能：关闭模态框；
 * 由于原生js中，获取参数的值
 * 之后，其属性为数组形式；
 * 需要设置下标，再去设置style属性，
 * 或者是其他属性
 * */
function hShow() {
  hModule[0].style.display = "none";
}
