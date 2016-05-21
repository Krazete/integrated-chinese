# Ted Celis 10298759. ICS 32 Fall 2015. Lab 3.

import json

def tabbed(obj: dict or list or str or int, lvl: int = 0) -> str:
    'Returns nested dictionaries and lists as a string in tabbed format.'
    txt = ''
    tab = ''
    for i in range(lvl):
        tab += '    '
    if type(obj) == dict:
        txt += '{}{}\n'.format(tab, '[DICT]')
        for i in obj:
            txt += '{}{} :\n'.format(tab, i)
            txt += tabbed(obj[i], lvl + 1)
        txt += '{}{}\n'.format(tab, '[END DICT]')
    elif type(obj) == list:
        txt += '{}{}\n'.format(tab, '[LIST]')
        for i in obj:
            txt += tabbed(i, lvl + 1)
        txt += '{}{}\n'.format(tab, '[END LIST]')
    elif type(obj) == str:
        txt += '{}\'{}\'\n'.format(tab, obj)
    else:
        txt += '{}{}\n'.format(tab, obj)
    return txt

file = open('PBcontents.js', encoding = 'utf-8')
p = json.loads(file.read())
file.close()

print(tabbed(p))
