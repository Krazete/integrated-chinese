from os import path
from json import load, dumps
from flask import Flask, Response, render_template, jsonify

ROOT = path.dirname(__file__)
app = Flask(__name__)

titles = {
    '0': 'Basics',
	'1': 'Greetings',
	'2': 'Family',
	'3': 'Dates and Time',
	'4': 'Hobbies',
	'5': 'Visiting Friends',
	'6': 'Making Appointments',
	'7': 'Studying Chinese',
	'8': 'School Life',
	'9': 'Shopping',
	'10': 'Transportation',
	'11': 'Talking about the Weather',
	'12': 'Dining',
	'13': 'Asking Directions',
	'14': 'Birthday Party',
	'15': 'Seeing a Doctor',
	'16': 'Dating',
	'17': 'Renting an Apartment',
	'18': 'Sports',
	'19': 'Travel',
	'20': 'At the Airport',
	'21': 'At the Library',
	'22': 'Post Office',
	'23': 'Hometown'
}

def number_zh(n):
    # works for numbers from 0 to 99
    if n == 0:
        return '零'
    digit = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    digit_zh = ''
    if n >= 20:
        digit_zh += digit[int(n / 10)]
    if n >= 10:
        digit_zh += digit[10]
    digit_zh += digit[n % 10]
    return digit_zh

def load_data(*args):
    try:
        with open(path.join(ROOT, 'data', *args)) as file:
            return load(file)
    except:
        return {}

# HTML Generators

@app.route('/')
def index():
    return render_template('index.html',
        title='Integrated Chinese Multimedia Exercises',
        title_zh='中文聽說讀寫',
        title_en='Integrated Chinese Multimedia Exercises',
        data=['index.json'],
        scripts=['index.js']
    )

@app.route('/review/<lesson>')
def review(lesson):
    data = load_data('index.json')
    return render_template('review.html',
        title='Lesson {} Review'.format(lesson),
        title_zh='第{}課'.format(number_zh(lesson)),
        title_en=titles[lesson],
        data='review/{}.js',
        scripts=['mp3.js', 'review.js']
    )

@app.route('/word/<section>/<lesson>')
def word(section, lesson):
    return render_template('word.html',
        title='Lesson {} Word Exercise'.format(lesson),
        title_zh='中文',
        title_en='Lesson {} Word Exercise'.format(lesson),
        data='word/{}/{}.js'.format(section, lesson),
        scripts=['word.js']
    )

@app.route('/sentence/<path>')
def sentence(path):
    form, lesson = path.split('/')
    if form == 'mce':
        verify_lesson_and_write('sentence.html', lesson)
    elif form == 'mcc':
        verify_lesson_and_write('sentence.html', lesson, [1, 7])
    elif form == 'tfe':
        verify_lesson_and_write('sentence.html', lesson, [i for i in range(2, 24) if i != 3])
    elif form == 'fbt':
        verify_lesson_and_write('sentence.html', lesson, [1, 2, 9])
    elif form == 'fbc':
        verify_lesson_and_write('sentence.html', lesson, [2, 3, 5, 7, 8, 10])
    elif form == 'fbr':
        verify_lesson_and_write('sentence.html', lesson, [i for i in range(12, 23) if i != 17])
    elif form == 'fbp':
        verify_lesson_and_write('sentence.html', lesson, [17])
    elif form == 'uns':
        verify_lesson_and_write('sentence.html', lesson, [1, 2, 4, 5, 7, 23])
    elif form == 'num':
        verify_lesson_and_write('sentence.html', lesson, [1])
    elif form == 'clk':
        verify_lesson_and_write('sentence.html', lesson, [3])
    elif form == 'gen':
        verify_lesson_and_write('sentence.html', lesson, [3])
    elif form == 'mon':
        verify_lesson_and_write('sentence.html', lesson, [9])
    elif form == 'cqf':
        verify_lesson_and_write('sentence.html', lesson, [3])
    elif form == 'ant':
        verify_lesson_and_write('sentence.html', lesson, [11])
    else:
        write('error.html')

# JavaScript Generators

from os import path, walk
from json import load, dump

@app.route('/js/index.js')
def pokpokpokopk():
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
    js = 'var indexdata = {};'.format(dumps(data))
    return Response(js, mimetype='application/javascript')

@app.route('/js/<varname>/<path:filename>.js')
def script(varname, filename):
    data = load_data(filename + '.json')
    js = 'var {} = {};'.format(varname, dumps(data))
    return Response(js, mimetype='application/javascript')



@app.route('/<blah>')
def blpppp(blah):
    return '<h1> Hello World {}</h1>'.format(blah)

if __name__ == '__main__':
    app.run(debug=True)
