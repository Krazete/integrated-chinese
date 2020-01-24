from os import path, walk
from json import load, dump

try:
    ROOT = path.dirname(__file__)
except:
    ROOT = ''

def load_data(*args):
    try:
        with open(path.join(ROOT, 'data', *args)) as file:
            return load(file)
    except:
        return {}

def save(data, *args):
    'Save object as a JSON file.'
    with open(path.join(ROOT, 'data', *args), 'w') as file:
        dump(data, file, indent=4, separators=(',', ': '))

def exercise_order(a, b):
    preferred_order = [
        # word level
    	"pinyin",
        "english",
    	"chinese",
        # paragraph (and sentence) level
    	"choice-en",
    	"choice-zh",
    	"boolean-en",
    	"boolean-zh",
    	"map",
        # sentence level
        "fill-type",
        "fill-drag-INCOMPLETE",
        "alternative",
        "question",
    	"match",
        "number",
    	"money",
    	"time",
    	"antonym",
        "COMMENT"
    ]
    try:
        ai = preferred_order.index(a)
    except ValueError:
        ai = len(preferred_order)
    try:
        bi = preferred_order.index(b)
    except ValueError:
        bi = len(preferred_order)
    return ai - bi

if __name__ == '__main__':
    data = load_data('index.json')
    for level in ['word', 'sentence', 'paragraph']:
        for root, dirs, files in walk(path.join(ROOT, 'data', level)):
            for file in files:
                sublevel = file.split('.')[0]
                sublevel_data = load_data(level, file)
                for lesson in data:
                    data[lesson].setdefault(level, [])
                    if lesson in sublevel_data:
                        data[lesson][level].append(sublevel)
        for lesson in data:
            data[lesson][level].sort()
    save(data, 'x.json')
