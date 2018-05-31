# docker之路

### 前端环境开发
[How to use Docker containers for Vue.js applications](http://vuetips.com/use-docker-containers)
### win10运行linux容器
资料<br/>
[Docker-no-Windows-vs-Docker-no-Linux](https://github.com/luizcarlosfaria/kb/wiki/Docker-no-Windows-vs-Docker-no-Linux)<br/>
[Docker配置本地镜像与容器的存储位置](https://blog.csdn.net/wenwenxiong/article/details/78728696)<br/>
搜索条件:docker OSType


### Development mode
```
docker run --rm -v $(pwd):/src -w /src -p 8080:8080 node:6 bash -c "npm install && npm run dev"
```

### Build for production
```
docker run --rm -v $(pwd):/src -w /src node:6 bash -c "npm install && npm run build"
```

### Command breakout
`--rm` tells Docker to delete the container when it is stopped (otherwise you’ll end up with a new container every time you start or build your app).

node:6 is the name of the image.

`-v` .:/src mounts the current directory (.) at the root of the container in a folder named /src. This is very similar to a virtual drive (Windows) or a virtual disk (Un*x/OSX).

`-w` /src sets the container’s working directory (where commands will be executed) at the folder we just created.

`-p` 8080:8080 opens the port 8080 of the container to your local browser (needed by Webpack dev server)

`bash -c` "..." starts a new bash instance inside the container, useful for such complicated bash commands using an && that may be misinterpreted by your system’s shell.