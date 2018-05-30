### 查看nginx进程：nginx的进程由主进程和工作进程组成
```
ps -ef|grep nginx
```
### 启动nginx
```
service nginx start
```
### 平滑启动nginx
```
kill -HUP `cat /var/run/nginx.pid`
或者 nginx -s reload
```
### 完美停止nginx
```
kill -TERM `cat /var/run/nginx.pid`
或者
kill -INT `cat /var/run/nginx.pid`
```
### 完美停止工作进程
```
kill -WINCH `cat /var/run/nginx.pid`
或者
kill -INT `cat /var/run/nginx.pid`
```
### 强制停止nginx
```
pkill -9 nginx
```
### 检查对nginx.conf文件的修改是否正确
```js
nginx -t -c /etc/nginx/nginx.conf
或者
nginx -t
```
### 停止nginx的命令
```
nginx -s stop
```
### 查看nginx的版本信息
```js
nginx -v
```