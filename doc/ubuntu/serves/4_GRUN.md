# GRUN之路

编辑
```bash
#进入GRUN
sudo vim /etc/default/grub
# 在文件中。将相关内容设置为如下内容
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
GRUB_CMDLINE_LINUX="acpi=off"
```
保存修改&配置到系统
```
sudo update-grup
```
apci=off
> 禁用部分设备硬件，提高系统响应速度。特别是使用HHD作为系统盘的情况下。效果显著

nomodeset
> 最新的内核已经把视频模式设置嵌入内核中，所以所有显卡硬件程序的指定时钟和寄存器当图形服务器启动时在内核进行而不是图形设备运行，这使得我们在启动时可以看到不闪的和高分辨率的好看的启动界面，但是，在某些视频卡它不能正常工作而现实黑屏，增加nomodeset参数则告诉内核不要加载显卡而用BIOS模式直到图形界面运行<hr/>
The newest kernels have moved the video mode setting into the kernel. So all the programming of the hardware specific clock rates and registers on the video card happen in the kernel rather than in the X driver when the X server starts.. This makes it possible to have high resolution nice looking splash (boot) screens and flicker free transitions from boot splash to login screen. Unfortunately, on some cards this doesnt work properly and you end up with a black screen. Adding the nomodeset parameter instructs the kernel to not load video drivers and use BIOS modes instead until X is loaded.

quiet
> 内核启动时候简化提示信息

splash
> 启动的时候使用图形化的进度条代替init的字符输出过程

详细代码
```bash
# If you change this file, run 'update-grub' afterwards to update
# /boot/grub/grub.cfg.
# For full documentation of the options in this file, see:
#   info -f grub -n 'Simple configuration'

GRUB_DEFAULT=0
GRUB_HIDDEN_TIMEOUT=0
GRUB_HIDDEN_TIMEOUT_QUIET=true
GRUB_TIMEOUT=10
GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
GRUB_CMDLINE_LINUX="acpi=on"

# Uncomment to enable BadRAM filtering, modify to suit your needs
# This works with Linux (no patch required) and with any kernel that obtains
# the memory map information from GRUB (GNU Mach, kernel of FreeBSD ...)
#GRUB_BADRAM="0x01234567,0xfefefefe,0x89abcdef,0xefefefef"

# Uncomment to disable graphical terminal (grub-pc only)
#GRUB_TERMINAL=console

# The resolution used on graphical terminal
# note that you can use only modes which your graphic card supports via VBE
# you can see them in real GRUB with the command `vbeinfo'
#GRUB_GFXMODE=640x480

# Uncomment if you don't want GRUB to pass "root=UUID=xxx" parameter to Linux
#GRUB_DISABLE_LINUX_UUID=true

# Uncomment to disable generation of recovery mode menu entries
#GRUB_DISABLE_RECOVERY="true"

# Uncomment to get a beep at grub start
#GRUB_INIT_TUNE="480 440 1"
```
