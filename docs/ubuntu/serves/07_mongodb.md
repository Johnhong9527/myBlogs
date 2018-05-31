# mongodb之路

1、添加 MongoDB 公共GPG钥匙。<br/><br/>
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927<br/>
2、创建列表文件，官方ubuntu16.04安装代码如下：<br/><br/>
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list<br/><br/>
因为我们要替换国内的镜像，所以这里就不能使用 repo.mongodb.org 作下载地址了。把官方这句替换如下： <br/><br/>
echo "deb http://mirrors.aliyun.com/mongodb/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list<br/><br/>
3、重新加载本地包数据库 <br/><br/>
sudo apt-get update<br/><br/>
4、安装MongoDB <br/><br/>
sudo apt-get install -y mongodb-org<br/><br/>
5、启动MongoDB <br/><br/>
sudo service mongod start<br/><br/>
6、打开MongoDB <br/><br/>
sudo mongo<br/><br/>
