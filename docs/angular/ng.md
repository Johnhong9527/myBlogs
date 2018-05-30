### ng的使用
安装
```
sudo npm install -g angular-cli
```
查看版本
```
ng --version
```
查看帮助
```
ng help
```
创建项目
```
ng new my-peoject1
```
启动
```
ng server
# or 启动AOT项目
ng server --prod --aot
```
编译项目
```
ng build
# or AOT编译
ng build --prod --aot
```
使用less
```
# 初始化项目时
ng new my-app --style less
# 已有项目,编辑 .angualr-cli.json
设置defaults.styleExt值less。
# 使用 ng 指令
ng set defaults.styleExt less
```
