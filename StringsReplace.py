#!/usr/bin/env python
# -*- coding:utf-8 -*-
# python 3.x
# Hikari Miyamoto
# 编译命令 pyinstaller --onefile -i="Saki-NuoveXT-2-Actions-find-replace.ico" StringsReplace.py
# https://iconarchive.com/show/nuoveXT-2-icons-by-saki/Actions-find-replace-icon.html

import sys
import argparse

parser = argparse.ArgumentParser(description='StringsReplace用于从内容为 目标字符串=替换后的字符串 这样形式的列表文件读取对应字符串，然后替换目标文件的相应内容，文件编码方式为UTF-8')
parser.add_argument('keywords_file', nargs=1, type=argparse.FileType('r'),default=sys.stdin,help='输入文件,文件内容为替换的列表,开头是#号的行会当成注释忽略掉。如：keywords_file文件内容形式为:\n"General"="常规"\n"Settings"="设置"\n用于将target_file文件中的"General"替换成"常规"字符串。')
parser.add_argument('target_file', nargs=1, type=argparse.FileType('r'),default=sys.stdout,help='被替换字符串的文件。')
args = parser.parse_args()
keywords_file = sys.argv[1]
target_file = sys.argv[2]

ENStr=[]
CNStr=[]
with open(keywords_file,"rt",encoding="utf-8") as f:
    for line in f:
        if len(line.split("#",1)[0].strip()) != 0:
            ENStr.append(line.split("=",1)[0].strip())
            CNStr.append(line.split("=",1)[1].strip())

print("=======")

for k,v in zip(ENStr, CNStr):
    print("{} 将替换成--> {}".format(k,v))

with open(target_file,"rt",encoding="utf-8")as f:
    data = f.read()
    for EN,CN in zip(ENStr, CNStr):
        data = data.replace(EN,CN)

with open(target_file,"wt",encoding="utf-8")as f:
    f.write(data)

print("替换完成！")