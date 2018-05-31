# mongodb之路

```bash
1、添加 MongoDB 公共GPG钥匙。 
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
2、创建列表文件，官方ubuntu16.04安装代码如下： 
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
因为我们要替换国内的镜像，所以这里就不能使用 repo.mongodb.org 作下载地址了。把官方这句替换如下： 
echo "deb http://mirrors.aliyun.com/mongodb/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
3、重新加载本地包数据库 
sudo apt-get update
4、安装MongoDB 
sudo apt-get install -y mongodb-org
5、启动MongoDB 
sudo service mongod start
6、打开MongoDB 
sudo mongo
```
