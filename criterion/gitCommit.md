## 准备工作
### 快速确认是否已有密钥
运行以下命令
``` 
$ cd ~/.ssh
$ ls 
```
在输出中查看是否有以 id_dsa 或 id_rsa 命名的文件，一般来说都是成对出现，其中一个带有.pub的后缀，这是公钥。

### 生成ssh

如果找不到上述文件，或根本没有 .ssh 目录，则可以使用以下命令生成

``` 
$ ssh-keygen -t rsa -C "github用户名"
Generating public/private rsa key pair.  
Enter file in which to save the key (/home/schacon/.ssh/id_rsa):   // 确认密钥的存储位置（默认是 .ssh/id_rsa）
Created directory '/home/schacon/.ssh'.   
Enter passphrase (empty for no passphrase):  // 输入密钥口令,可为空，如果使用密码，需要确保添加了 -o 选项，它会以比默认格式更能抗暴力破解的格式保存私钥
Enter same passphrase again: // 确认密钥口令
Your identification has been saved in /home/schacon/.ssh/id_rsa.
Your public key has been saved in /home/schacon/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 schacon@mylaptop.local

```

### 添加ssh
使用以下命令查看公钥
```
$ cat ~/.ssh/id_rsa.pub
```

在 github 中找到 setting 页面中的 SSH and GPG keys 选项。选择 New SSH key 按钮,将刚刚查看的公钥放填入 key 的输入框中，点击添加。

### 注意事项

* 如果之前就存在github的密钥文件，需要删除后再进行操作。
* 第一次拉取github下的文件时，需要在提示后面输入yes！！！（浪费了快一个小时？ T T）


## Git 提交规范
* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

