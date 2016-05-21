active = ['pinyin', 'english', 'characters']

    
for i in active:
    file = open('{}.txt'.format(i), encoding = 'utf-8')
    newfile = open('{}0-11.txt'.format(i), "w", encoding = 'utf-8')
    for k in file.readlines():
        newfile.write('"{}",'.format(k.replace('\n', '')[4:]))
    newfile.close()
    file.close()
