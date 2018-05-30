### 说明
> 安装nginx，是为了方便安装wordpress；
> 所以在安装过程中，将nginx的站点路径设置指向wordPress所在目录。

### 安装nginx
```
sudo apt-get install nginx
```
### 配置nginx
```
# 进入编辑模式
sudo vim /etc/nginx/sites-available/default
# 将default中内容改为以下内容
  # include snippets/snakeoil.conf;
  root /var/www/html;
  # Add index.php to the list if you are using PHP
  # index index.html index.htm index.nginx-debian.html;
   index index.php
   location ~ \.php$ {
      include snippets/fastcgi-php.conf;
      #
      #       # With php7.0-cgi alone:
      #       fastcgi_pass 127.0.0.1:9000;
      #       # With php7.0-fpm:
      fastcgi_pass unix:/run/php/php7.0-fpm.sock;
    }
# 保存退出
```
### 运行nginx
```
# 配置快捷启动方式
sudo vim /etc/init.d/nginx //创建启动脚本
sudo chmod a+x /etc/init.d/nginx //增加执行权限
# 启动-停止-重启
sudo /etc/init.d/nginx start //启动
sudo /etc/init.d/nginx stop //停止
sudo /etc/init.d/nginx restart //重启
```

#### 参考文章
[Ubuntu下Nginx安装](http://www.jianshu.com/p/7cb1a824333e)