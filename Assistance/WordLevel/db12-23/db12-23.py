active = ['pinyin', 'english', 'characters']

'''
def tab(s):
    print(s, end = ', ')

for i in range(12, 24):
    tab(i)
    for j in active:
        file = open('{}{}.txt'.format(i, j), encoding = 'utf-8')
        tab(len(file.readlines()))
        file.close()
    print('\n')

total = 537
for i in range(12, 24):
    file = open('{}english.txt'.format(i))
    total += (len(file.readlines()))
    tab(total)
    file.close()
'''

for i in active:
    newfile = open('{}12-23.txt'.format(i), "w", encoding = 'utf-8')
    for j in range(12, 24):
        file = open('{}{}.txt'.format(j, i), encoding = 'utf-8')
        for k in file.readlines():
            newfile.write('"{}",'.format(k.replace('\n', '')))
        file.close()
    newfile.close()
