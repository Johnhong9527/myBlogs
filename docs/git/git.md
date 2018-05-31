# git命令

 添加远程仓库
```bash
git remote add origin git@github.com:seamong/gitbook
git push -u origin master
```
 本地创建远程分支
```bash
git push origin <本地分支>:<远程分支>
```
 本地删除远程分支
```bash
git push origin :<远程分支>
```
 本地分支绑定远程分支
```bash
git branch --set-upstream-to=origin/<远程分支> <本地分支>
```
 创建本地分支
```bash
git checkout -b <本地分支>
```
 删除本地分支
```bash
git branch -D <本地分支>
```
配置ssh
```bash
ssh-keygen -t rsa -b 4096 -C "****@****.****"
```
添加远程仓库
```bash
git remote add origin https://github.com/**/**.git
git push -u origin master
```
回退一次版本(强制)
```
git reset --hard HEAD^
```
