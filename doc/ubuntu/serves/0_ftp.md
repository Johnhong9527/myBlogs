### 安装vsftp
```
sudo apt-get update
sudo apt-get install vsftpd
```
### 创建ftp文件夹
```
sudo mkdir  *ftp文件夹*
```
### 更改文件夹权限
```
sudo  chmod -R 777 *ftp文件夹*
```
### 创建FTP用户
```
# 创建用户并指定目录
sudo useradd -d *ftp文件夹*/ 用户名
# 设置ftp用户的密码
sudo passwd ftp用户名
```
### 设置相关配置
```
sudo vim /etc/vsftpd.conf

# 添加如下内容
userlist_deny=NO
userlist_enable=YES
# 允许登录的用户
userlist_file=/etc/allowed_users
seccomp_sandbox=NO
# 允许访问的文件夹
local_root=*ftp文件夹*
local_enable=YES
write_enable=YES
# 使用utf8
utf8_filesystem=YES
```
### 修改 /etc/pam.d/vsftpd
```
sudo vim /etc/pam.d/vsftpd
# 在auth required pam_shells.so前加#
```
### 操作命令
```
# 启动停止重启服务
sudo /etc/init.d/vsftpd start
sudo /etc/init.d/vsftpd stop
sudo /etc/init.d/vsftpd restart
# 查看服务状态
service vsftpd status
```
### 访问ftp服务器
```
# bash 访问
sudo ftp 127.0.0.1
# 浏览器访问
ftp://127.0.0.1
# 或者
ftp//localhost  
```
#### 注意点
> 1.服务器需要设置安全策略组权限
> 2.ftp文件夹注意设置权限




##### 参考
[最简单靠谱的vsftpd安装指南（Ubuntu16.04）](http://www.jianshu.com/p/b66066a70cd4)<br/>
[Ubuntu 16.04 安装ftp服务器传输文件](http://www.cnblogs.com/xuanxufeng/p/6235494.html)