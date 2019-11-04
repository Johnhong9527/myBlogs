(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{370:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[s._v("#")]),s._v(" 安装软件")]),s._v(" "),t("h2",{attrs:{id:"安装搜狗输入法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装搜狗输入法"}},[s._v("#")]),s._v(" 安装搜狗输入法")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("http://pinyin.sogou.com/linux/help.php\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"chrome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome"}},[s._v("#")]),s._v(" chrome")]),s._v(" "),t("h3",{attrs:{id:"软件包安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件包安装"}},[s._v("#")]),s._v(" 软件包安装")]),s._v(" "),t("p",[s._v("1.前往"),t("a",{attrs:{href:"https://www.google.com/intl/zh-CN_ALL/chrome/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("下载"),t("code",[s._v("chrome.*.deb")]),s._v("文件."),t("br"),s._v("\n2.找到已下载的"),t("code",[s._v("chrome.*.deb")]),s._v("文件.通过下面的命令来安装"),t("code",[s._v(".deb")]),s._v("软件包")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i chrome.*.deb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"通过apt-get来安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过apt-get来安装"}},[s._v("#")]),s._v(" 通过"),t("code",[s._v("apt-get")]),s._v("来安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a.下载源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.fdzh.org/chrome/google-chrome.list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -P /etc/apt/sources.list.d/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b.导入公钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://dl.google.com/linux/linux_signing_key.pub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# c.更新数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d.下载并安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" google-chrome-stable\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# e.启动")]),s._v("\n/usr/bin/google-chrome-stable or google-chrome-stable\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"wine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wine"}},[s._v("#")]),s._v(" wine")]),s._v(" "),t("p",[s._v("1.添加软件源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:wine/wine-builds\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("2.通过"),t("code",[s._v("apt-get")]),s._v("安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --install-recommends wine-staging\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" winehq-staging\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("3.卸载"),t("code",[s._v("wine")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a).卸载wine主程序，在终端里输入：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove --purge wine\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b).然后删除wine的目录文件：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r ~/.wine\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# c).卸载残留不用的软件包：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"shadowsocks-qt5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-qt5"}},[s._v("#")]),s._v(" shadowsocks-qt5")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a).安装源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:hzwhuang/ss-qt5\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b).安装shadowsocks-qt5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" shadowsocks-qt5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"indicator-sysmonitor-显示网速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indicator-sysmonitor-显示网速"}},[s._v("#")]),s._v(" indicator-sysmonitor(显示网速)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a).安装源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:fossfreedom/indicator-sysmonitor\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b).安装indicator-sysmonitor")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" indicator-sysmonitor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"wondershaper-网速限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wondershaper-网速限制"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/magnific0/wondershaper",target:"_blank",rel:"noopener noreferrer"}},[s._v("wondershaper(网速限制)"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("1.通过"),t("code",[s._v("git")]),s._v("下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:magnific0/wondershaper.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2.进入项目目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" wondershaper\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3.使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a).查看网络使用接口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\nor\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr show\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b).限制网卡上下行速度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./wondershaper -a "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("网卡名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# c).清除限制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./wondershaper -c -a "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("网卡名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("4.参数说明")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 软件根目录通过命令查看该软甲所有设置")]),s._v("\nwondershaper -h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"steam"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steam"}},[s._v("#")]),s._v(" steam")]),s._v(" "),t("p",[s._v("文档："),t("a",{attrs:{href:"http://blog.csdn.net/jianwen_hi/article/details/51843385",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.csdn.net/jianwen_hi/article/details/51843385"),t("OutboundLink")],1),t("br"),s._v("\n1.记录第一种简易安装的方式：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository multiverse "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" steam\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" yarn")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sS https://dl.yarnpkg.com/debian/pubkey.gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://dl.yarnpkg.com/debian/ stable main"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/yarn.list\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);