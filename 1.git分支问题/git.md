## 独立分支：
1.克隆代码
2.查看本地分支
git branch
3.查看远程分支
git branch -a
4.创建本地分支并与远程分支建立联系
git checkout -b xxx origin/xxx
5.查看是否成功建立联系
git branch -vv
6.代码业务
7.提交代码
git add .
git commit -m 'say something'
git push origin xxx
8.删除本地分支
git branch -d xxx
## 多人用同一分支
1.克隆代码
2.查看本地分支
git branch
3.查看远程分支
git branch -a
4.创建本地分支并与远程分支建立联系
git checkout -b xxx origin/xxx
5.查看是否成功建立联系
git branch -vv
6.代码业务
7.提交代码
git add .
git commit -m 'say something'
git push origin xxx
(如果push时报错提示需要pull，此时先不要pull）
8.把远程分支拉取下来并放到新的分支上去
git fetch origin xxx:temp
9.查看本地分支和远程分支有什么不同
git diff temp
10.合并分支
git merge temp
11.解决冲突
12.提交代码
git add .
git commit -m 'say something'
git push origin xxx
13.删除本地分支
git branch -d xxx
## 项目经理合并分支
1.查看本地分支
git branch
2.查看远程分支
git branch -a
3.创建本地分支并与远程分支建立联系
git checkout -b xxx origin/xxx
4.切换回主分支
git checkout master
5.合并分支
git merge xxx
6.解决冲突
7.提交代码
git add .
git commit -m 'say something'
git push origin xxx
8.删除本地分支
git branch -d xxx
## 其他问题
### 删除远程分支
git push origin -d xxx
### 清除git缓存(多用于.gitignore监听不到后添加的问题)
git rm -r --cached
### git stash缓存
执行git stash命令后暂存区将会暂时变干净，以方便进行其他操作
执行git stash pop拿出缓存的代码并合并，需要解决冲突
