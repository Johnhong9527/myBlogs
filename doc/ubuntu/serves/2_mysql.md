### 安装mysql
```
# 检查系统是否已经安装mysql
which mysql  # /user/bin/mysql
# 安装mysql # 安装时根据安装提示设置相关mysql
sudo apt-get install mysql-server mysql-client
# 测试是否安装成功
sudo netstat -tap | grep mysql
# 登录mysql
mysql -u root -p
# 设置密码
mysqladmin -u root password "new_password";
```
### 登录
```
mysql -u 用户名 -p
Enter password: 输入密码
```
### 操控数据库
```
以下命令需要登录mysql之后，才能执行
# 显示所有数据库
show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| WP                 |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

# 创建数据库
create database 数据库名
# 删除数据库
drop database 数据库名
```
### 参考
> [MySQL 教程](http://www.runoob.com/mysql/mysql-tutorial.html)
>[Ubuntu 16.04 mysql安装配置](http://www.jianshu.com/p/3111290b87f4) 

#指令合集