#! /bin/bash
# env变量保存 bash publish.sh xxx 第一个参数
env=$1
case $env in
    test)
        serverPath1=root@192.168.1.190:/usr/local/nginx/react-test/ #root@=服务器ip:+服务器项目地址
        MODE=test
        passwd="'123qwe'"
        ;;
    prd)
        serverPath1=***
        MODE=production
        ;;
esac

npm run build:$MODE
#passwd="'testuser!@#'"


pathArray=($serverPath1 $serverPath2)
#save failed serverPath
failedArray=()
#count, use to verify success
count=0

for i in ${pathArray[@]}
#for i in serverPath1, serverPath2, serverPath3
do
    if [ ! -z $i ] ; then
        if [ -x "$(command -v sshpass)" ] && [ ! -z "$passwd" ]; then
            eval "sshpass -p ${passwd} rsync -rtv build/ ${i}"
        else
            rsync -rtv build/ $i
        fi
#        判断上一步shell执行是否成功
        if [ "$?" -eq "0" ]
        then
          ((count++))
        else
          failedArray+=$i
          echo "Error while running rsync $i"
        fi
    fi
done

if [ $count -eq ${#pathArray[@]} ]
then
   echo -e "\033[46;30m 太帅了，发布成功了 \033[0m"
else
   echo -e "\033[41;30m 😭噩耗，${#failedArray[@]}台服务器发布失败！！！(${failedArray[*]})\033[0m"
fi

