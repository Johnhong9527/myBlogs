(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{194:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"日常使用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日常使用技巧","aria-hidden":"true"}},[s._v("#")]),s._v(" 日常使用技巧")]),s._v(" "),a("h2",{attrs:{id:"linux修改文件所属用户和组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux修改文件所属用户和组","aria-hidden":"true"}},[s._v("#")]),s._v(" linux修改文件所属用户和组")]),s._v(" "),a("p",[s._v("1.使用"),a("code",[s._v("chown")]),s._v("命令可以修改文件或目录所属的用户：")]),s._v(" "),a("ul",[a("li",[s._v("    命令："),a("code",[s._v("chown")]),s._v(" 用户 目录或文件名")]),s._v(" "),a("li",[s._v("    例如："),a("code",[s._v("chown qq /home/qq")]),s._v(" (把home目录下的qq目录的拥有者改为qq用户)"),a("br"),s._v("\n2.使用"),a("code",[s._v("chgrp")]),s._v("命令可以修改文件或目录所属的组：")]),s._v(" "),a("li",[s._v("    命令："),a("code",[s._v("chgrp")]),s._v(" 组 目录或文件名")]),s._v(" "),a("li",[s._v("    例如："),a("code",[s._v("chgrp qq /home/qq")]),s._v(" (把home目录下的qq目录的所属组改为qq组)")])]),s._v(" "),a("h2",{attrs:{id:"删除多余内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除多余内核","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除多余内核")]),s._v(" "),a("p",[s._v("1.查看内核")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出:"),a("br"),s._v(" "),a("code",[s._v("Linux seam-All-Series 4.15.0-36-generic #39~16.04.1-Ubuntu SMP Tue Sep 25 08:59:23 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux")])]),s._v(" "),a("p",[s._v("2.查看已经存在的内核")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dpkg --get-selections"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" linux\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出："),a("br")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("console-setup-linux                     "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlibselinux1:amd64                       "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-base                              "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-firmware                          "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-generic-hwe-16.04                 "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-headers-4.15.0-36                 "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-headers-4.15.0-36-generic         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-headers-generic-hwe-16.04         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-image-4.15.0-36-generic           "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-image-generic-hwe-16.04           "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-libc-dev:amd64                    "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-modules-4.15.0-36-generic         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-modules-extra-4.15.0-36-generic   "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-signed-generic-hwe-16.04          "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-sound-base                        "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\npptp-linux                              "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nsyslinux                                "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nsyslinux-common                         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nsyslinux-legacy                         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nutil-linux                              "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("3.卸载内核\na).开始卸载")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("需要卸载的内核名"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("b).再次查看内核")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dpkg --get-selections"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" linux\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("console-setup-linux                     "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlibselinux1:amd64                       "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-base                              "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-firmware                          "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-generic-hwe-16.04                 "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-headers-4.15.0-36                 deinstall "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("已卸载的内核"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nlinux-headers-4.15.0-36-generic         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-headers-generic-hwe-16.04         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-image-4.15.0-36-generic           "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-image-generic-hwe-16.04           "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-libc-dev:amd64                    "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-modules-4.15.0-36-generic         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-modules-extra-4.15.0-36-generic   "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-sound-base                        "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\npptp-linux                              "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nsyslinux                                "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nlinux-signed-generic-hwe-16.04          "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nsyslinux-common                         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nsyslinux-legacy                         "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\nutil-linux                              "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("c).已删除内核如果还出现在内核列表中，并且在其末尾还出现"),a("code",[s._v("deinstall")]),s._v("，说明还未删除干净，可通过下列代码清理剩余内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -P "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("已卸载的内核名"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"通用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用功能","aria-hidden":"true"}},[s._v("#")]),s._v(" 通用功能")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("添加软件源： "),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-get-repository ppa:源\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"更换软件源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换软件源","aria-hidden":"true"}},[s._v("#")]),s._v(" 更换软件源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{attrs:{class:"token string"}},[s._v("'s/archive.ubuntu.com/mirrors.ustc.edu.cn/g'")]),s._v(" /etc/apt/sources.list\n"),a("span",{attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"ubuntu-更换阿里云软件源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-更换阿里云软件源","aria-hidden":"true"}},[s._v("#")]),s._v(" Ubuntu 更换阿里云软件源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 备份")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/apt/sources.list /etc/apt/sources.list.bak\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 修改")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{attrs:{class:"token string"}},[s._v("'s/cn.archive.ubuntu.com/mirrors.aliyun.com/g'")]),s._v(" /etc/apt/sources.list\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 更新")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"挂载共享文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载共享文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 挂载共享文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("1.打开VirtualBox,设置虚拟机的共享文件\n2.VirtualBOX控制台"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("设备"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("安装增强功能\n3.打开ubuntu的终端"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ctrl + Alt + T"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("输入 "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t vboxsf 共享文件夹名 挂载路径 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),a("span",{attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t vboxsf wwww /mnt/www\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"设置启动区位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置启动区位置","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置启动区位置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("gsettings "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" com.canonical.Unity.Launcher launcher-position Bottom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"声卡设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声卡设置","aria-hidden":"true"}},[s._v("#")]),s._v(" 声卡设置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 解决usb耳机声音播放的问题")]),s._v("\ngnome-alsamixer\n\nalsamixer\n\npavucontrol"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("终极方案"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}],!1,null,null,null);e.options.__file="2018_10_28_01.md";n.default=e.exports}}]);