# git~push

### 提交代码出现错误时，解决办法
```bash
git add .
# 订单以及地址样式修改
git commit -m ""  //[test 4dffb5e] index
git push origin test
```

### 强制更新
```bash
git pull -f origin test  //该命令  无视本地文件修改.直接将远程仓库的代码覆盖本地文件
```