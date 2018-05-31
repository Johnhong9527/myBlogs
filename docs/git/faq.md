# git~F.A.Q

在git的一般使用中，如果发现错误的将不想提交的文件add进入index之后，想回退取消，则可以使用命令：git reset HEAD <file>...，同时git add完毕之后，git也会做相应的提示，比如：
引用

 # Changes to be committed:
 # (use "git reset HEAD<file>..." to unstage)
 #
 # new file: Test.scala

git reset [--hard|soft|mixed|merge|keep] [<commit>或HEAD]：将当前的分支重设（reset）到指定的<commit>或者HEAD（默认，如果不显示指定commit，默认是HEAD，即最新的一次提交），并且根据[mode]有可能更新index和working directory。
下面列出一些git reset的典型的应用场景：
A) 回滚add操纵
引用
```bash
# 编辑文件frotz.c, filfre.c，做了些更改，并把更改添加到了index
edit
git add frotz.c filfre.c
# 查看邮件，发现某人要你pull，有一些改变需要你merge下来
mailx
# 然而，你已经把index搞乱了，因为index同HEAD commit不匹配了，
# 但是你知道，即将pull的东西不会影响已经修改的frotz.c和filfre.c，
# 因此你可以revert这两个文件的改变。revert后，
# 那些改变应该依旧在working directory中，因此执行git reset。
git reset
# 然后，执行了pull之后，自动merge，
# frotz.c和filfre.c这些改变依然在working directory中。
$ git pull git://info.example.com/ nitfol (4)
```

B) 回滚最近一次commit
引用
```bash
git commit ...
# 当提交了之后，你又发现代码没有提交完整，
# 或者你想重新编辑一下提交的comment，
# 执行git reset --soft HEAD^，
# 让working tree还跟reset之前一样，不作任何改变。
# HEAD^指向HEAD之前最近的一次commit。
git reset --soft HEAD^
# 对working tree下的文件做修改
edit
# 然后使用reset之前那次commit的注释、作者、日期等信息重新提交。
# 注意，当执行git reset命令时，git会把老的HEAD拷贝到文件.git/ORIG_HEAD中，
# 在命令中可以使用ORIG_HEAD引用这个commit。
# commit 命令中 -a 参数的意思是告诉git，
# 自动把所有修改的和删除的文件都放进stage area，未被git跟踪的新建的文件不受影响。
# commit命令中-c <commit> 或者 -C <commit>意思是拿
# 已经提交的commit对象中的信息（作者，提交者，注释，时间戳等）提交，
# 那么这条commit命令的意思就非常清晰了，把所有更改的文件加入stage area，
# 并使用上次的提交信息重新提交。
git commit -a -c ORIG_HEAD
```

C) 回滚最近几次commit，并把这几次commit放到叫做topic的branch上去。
引用
```bash
# 你已经提交了一些commit，但是此时发现这些commit还不够成熟，
# 不能进入master分支，但你希望在新的branch上润色这些commit改动。
# 因此执行了git branch命令在当前的HEAD上建立了新的叫做 topic/wip的分支。
git branch topic/wip
# 然后回滚master branch上的最近三次提交。
# HEAD~3指向当前HEAD-3个commit的commit，
# git reset --hard HEAD~3即删除最近的三个commit
#（删除HEAD, HEAD^, HEAD~2），将HEAD指向HEAD~3。
git reset --hard HEAD~3
# 切换到`topic/wip` 分支
$ git checkout topic/wip
```

D) 永久删除最后几个commit
```bash
git commit ...
# 最后三个commit（即HEAD, HEAD^和HEAD~2）提交有问题，你想永久删除这三个commit。
git reset --hard HEAD~3 (1)
```

E) 回滚merge和pull操作
引用
```bash
# 从origin拉下来一些更新，但是产生了很多冲突，
# 你暂时没有这么多时间去解决这些冲突，因此你决定稍候有空的时候再重新pull。
$ git pull
Auto-merging nitfol
CONFLICT (content): Merge conflict innitfol
Automatic merge failed; fix conflicts andthen commit the result.
# 由于pull操作产生了冲突，因此所有pull下来的改变尚未提交，
# 仍然再stage area中，
# 这种情况下git reset --hard与 git reset --hard HEAD意思相同，
# 即都是清除index和working tree中被搞乱的东西。
$ git reset --hard
# 将topic/branch合并到当前的branch，这次没有产生冲突，并且合并后的更改自动提交。
$ git pull . topic/branch
Updating from 41223... to 13134...
Fast-forward
# 但是此时你又发现将topic/branch合并过来为时尚早，
# 因此决定退滚merge，执行git reset --hard ORIG_HEAD回滚刚才的pull/merge操作。
# 说明：前面讲过，执行git reset时，
# git会把reset之前的HEAD放入.git/ORIG_HEAD文件中，
# 命令行中使用ORIG_HEAD引用这个commit。
# 同样的，执行pull和merge操作时，
# git都会把执行操作前的HEAD放入ORIG_HEAD中，以防回滚操作。
$ git reset --hard ORIG_HEAD
```

F) 在被污染的working tree中回滚merge或者pull
引用
```bash
# 即便你已经在本地更改了一些你的working tree，
# 你也可安全的git pull，
# 前提是你知道将要pull的内容不会覆盖你的working tree中的内容。
$ git pull
Auto-merging nitfol
Merge made by recursive.
nitfol | 20 +++++----
...
# git pull完后，你发现这次pull下来的修改不满意，
# 想要回滚到pull之前的状态，从前面的介绍知道，
# 我们可以执行git reset --hard ORIG_HEAD，
# 但是这个命令有个副作用就是清空你的working tree，
# 即丢弃你的本地未add的那些改变。为了避免丢弃working tree中的内容，
# 可以使用git reset --merge ORIG_HEAD，
# 注意其中的--hard 换成了--merge，
# 这样就可以避免在回滚时清除working tree。
$ git reset --merge ORIG_HEAD (2)
```

G) 被中断的工作流程
在实际开发中经常出现这样的情形：你正在开发一个大的feature，此时来了一个紧急的bug需要修复，但是目前在working tree中的内容还没有成型，还不足以commit，但是你又必须切换的另外的branch去fix bug。请看下面的例子
```bash
$ git checkout feature ;# you were workingin "feature" branch and
$ work work work ;#got interrupted
# 这次属于临时提交，因此随便添加一个临时注释即可。
$ git commit -a -m "snapshot WIP"
$ git checkout master
$ fix fix fix
$ git commit ;# commit with real log
$ git checkout feature
# 这次reset删除了WIP commit，并且把working tree设置成提交WIP快照之前的状态。
$ git reset --soft HEAD^ ;# go back to WIPstate
# 此时，在index中依然遗留着“snapshot WIP”提交时所做的uncommit changes，
# git reset将会清理index成为尚未提交"snapshot WIP"时的状态便于接下来继续工作。
$ git reset
``` 

(H) Reset单独的一个文件
假设你已经添加了一个文件进入index，但是而后又不打算把这个文件提交，此时可以使用git reset把这个文件从index中去除。
```bash
# 把文件frotz.c从index中去除，
$ git reset -- frotz.c
# 把index中的文件提交
$ git commit -m "Commit files inindex"
# 再次把frotz.c加入index
$ git add frotz.c
```

(I) 保留working tree并丢弃一些之前的commit
假设你正在编辑一些文件，并且已经提交，接着继续工作，但是现在你发现当前在working tree中的内容应该属于另一个branch，与这之前的commit没有什么关系。此时，你可以开启一个新的branch，并且保留着working tree中的内容。
```bash
git tag start
git checkout -b branch1
edit
# 这次是把在branch1中的改变提交了。
git commit ...
edit
# 此时发现，之前的提交不属于这个branch，此时你新建了branch2，并切换到了branch2上。
git checkout -b branch2
# 此时你可以用reset --keep把在start之后的commit清除掉，但是保持working tree不变。
git reset --keep start
```
