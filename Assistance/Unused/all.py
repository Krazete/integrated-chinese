from pathlib import *

br = []
dash = []
paren = []
copy = []

for i in Path('all').iterdir():
    if 'br' in i.name:
        br.append(i.name)
    if '-' in i.name:
        dash.append(i.name)
    if '(' in i.name or ')' in i.name:
        paren.append(i.name)
    if '(1)' in i.name or '(2)' in i.name:
        copy.append(i.name)

d = {}

for i in Path('all').iterdir():
    for j in i.stem:
        try:
            if i.name not in d[j]:
                d[j].append(i.name)
        except:
            d[j] = [i.name]

alltxt = open('alltxt.txt', 'w', encoding = 'UTF-8')

alltxt.write('[')

for i in Path('all').iterdir():
    alltxt.write('"' + i.stem + '"')
    alltxt.write(', ')

alltxt.write(']')

alltxt.close()

def f(l):
    a=0
    for i in l:
        if type(i) == list:
            a+=f(i)
        else:
            a+=i
    return a
