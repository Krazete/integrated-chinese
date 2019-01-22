#!/usr/bin/python
# -*- coding: utf8 -*-
import os
import json
import jinja2
import webapp2
from google.appengine.api import mail

def path_to(*args):
    root = os.path.dirname(__file__)
    return os.path.join(root, *args)

def number_zh(n):
    # Converts Hindu-Arabic numbers to Chinese numbers. This function is limited to numbers 0-99.
    if n == 0:
        return '零'
    digit = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    digit_zh = ''
    if n >= 20:
        digit_zh += digit[(n - (n % 10)) / 10]
    if n >= 10:
        digit_zh += '十'
    digit_zh += digit[n % 10]
    return digit_zh

JINJA_ENVIRONMENT = jinja2.Environment(loader=jinja2.FileSystemLoader(path_to('templates')))

class MainHandler(webapp2.RequestHandler):
    def write(self, template, variables={}):
        template = JINJA_ENVIRONMENT.get_template(template)
        self.response.write(template.render(variables))
    def load_data(self, section):
        with open(path_to('data', section)) as file:
            data = json.load(file)
        return data
    def dump_data(self, data):
        return json.dumps(data, indent=4, sort_keys=True)
    def write_data(self, data):
        self.response.headers['Content-Type'] = 'application/javascript'
        self.write('data.js', {
            'data': self.dump_data(data)
        })
    def write_error(self, message):
        self.write('error.html', {
            'title': 'Page Not Found',
            'title_en': 'Page Not Found',
            'title_zh': '找不到網頁'.decode('utf8'),
            'scripts': ['error.js'],
            'error_message': 'Error: {}'.format(message)
        })

class Index(MainHandler):
    def get(self):
        self.write('index.html', {
            'title': 'Integrated Chinese Multimedia Exercises',
            'title_zh': '中文聽說讀寫'.decode('utf8'),
            'title_en': 'Integrated Chinese Multimedia Exercises',
            'data': 'index.js',
            'script': 'index.js'
        })

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

class IndexData(MainHandler):
    def get(self):
        data = self.load_data('index.json')
        for level in ['word', 'sentence', 'paragraph']:
            for root, dirs, files in os.walk(path_to('data', level)):
                for file in files:
                    if file.lower().endswith('.json'):
                        sublevel = file.split('.')[0]
                        sublevel_data = self.load_data('{}/{}'.format(level, file))
                        for lesson in data:
                            data[lesson].setdefault(level, [])
                            if lesson in sublevel_data:
                                data[lesson][level].append(sublevel)
        for lesson in data:
            for level in ['word', 'sentence', 'paragraph']:
                data[lesson][level].sort(exercise_order)
        self.write_data(data)

class Review(MainHandler):
    def get(self, lesson):
        data = self.load_data('index.json')
        x = path_to('static', 'img', lesson + 'a.png')
        print(x, os.path.exists(x))

        self.write('review.html', {
            'title': 'Lesson {} Review'.format(lesson),
            'title_zh': '第{}課'.format(number_zh(int(lesson))).decode('utf8'),
            'title_en': data[lesson]['title'],
            'data': 'review/{}.js'.format(lesson),
            'script': 'review.js'
        })
class ReviewData(MainHandler):
    def get(self, lesson):
        texts = self.load_data('review/texts.json')
        words = self.load_data('review/words.json')
        patterns = self.load_data('review/patterns.json')
        data = {
            'texts': [texts['a'][lesson], texts['b'][lesson]],
            'words': [words['a'][lesson], words['b'][lesson]],
            'patterns': [patterns['a'][lesson], patterns['b'][lesson]]
        }
        self.write_data(data)

class Word(MainHandler):
    def get(self, section, lesson):
        self.write('word.html', {
            'title': 'Lesson {} Word Exercise'.format(lesson),
            'title_zh': '中文'.decode('utf8'),
            'title_en': 'Lesson {} Word Exercise'.format(lesson),
            'data': 'word/{}/{}'.format(section, lesson),
            'script': 'word'
        })
class Sentence(MainHandler):
    def get(self, path):
        form, lesson = path.split('/')
        if form == 'mce':
            self.verify_lesson_and_write('sentence.html', lesson)
        elif form == 'mcc':
            self.verify_lesson_and_write('sentence.html', lesson, [1, 7])
        elif form == 'tfe':
            self.verify_lesson_and_write('sentence.html', lesson, [i for i in range(2, 24) if i != 3])
        elif form == 'fbt':
            self.verify_lesson_and_write('sentence.html', lesson, [1, 2, 9])
        elif form == 'fbc':
            self.verify_lesson_and_write('sentence.html', lesson, [2, 3, 5, 7, 8, 10])
        elif form == 'fbr':
            self.verify_lesson_and_write('sentence.html', lesson, [i for i in range(12, 23) if i != 17])
        elif form == 'fbp':
            self.verify_lesson_and_write('sentence.html', lesson, [17])
        elif form == 'uns':
            self.verify_lesson_and_write('sentence.html', lesson, [1, 2, 4, 5, 7, 23])
        elif form == 'num':
            self.verify_lesson_and_write('sentence.html', lesson, [1])
        elif form == 'clk':
            self.verify_lesson_and_write('sentence.html', lesson, [3])
        elif form == 'gen':
            self.verify_lesson_and_write('sentence.html', lesson, [3])
        elif form == 'mon':
            self.verify_lesson_and_write('sentence.html', lesson, [9])
        elif form == 'cqf':
            self.verify_lesson_and_write('sentence.html', lesson, [3])
        elif form == 'ant':
            self.verify_lesson_and_write('sentence.html', lesson, [11])
        else:
            self.write('error.html')
class Paragraph(MainHandler):
    def get(self, path):
        form, lesson = path.split('/')
        if form == 'mce':
            self.verify_lesson_and_write('paragraph.html', lesson)
        elif form == 'mcc':
            self.verify_lesson_and_write('paragraph.html', lesson, [i for i in range(4, 12) if i != 7])
        elif form == 'tfe':
            self.verify_lesson_and_write('paragraph.html', lesson, [3, 7])
        elif form == 'tfc':
            self.verify_lesson_and_write('paragraph.html', lesson, [i for i in range(1, 24) if i != 13])
        elif form == 'mrc':
            self.verify_lesson_and_write('paragraph.html', lesson, [13])
        else:
            self.write('error.html')
class ExerciseData(MainHandler):
    def get(self, level, section, lesson):
        data = self.load_data('{}/{}.json'.format(level, section))
        self.write_data(data[lesson])

class Vocabulary(MainHandler):
    def get(self, path):
        #self.write('vocabulary.html')
        self.response.write('<meta http-equiv="refresh" content="0; url=https://2-dot-integrated-chinese.appspot.com/vocabulary.html#' + path + '"><meta name="viewport" content="width=device-width, initial-scale=1">You will be redirected shortly. <a href="https://2-dot-integrated-chinese.appspot.com/vocabulary.html#' + path + '">(If not, click here.)</a>')

class Error(MainHandler):
    def get(self, path):
        self.write_error('Invalid path.')

class Bug(MainHandler):
    def post(self):
        mail.EmailMessage(
            sender = 'krazete@gmail.com',
            to = 'tcelis@uci.edu',
            subject = 'Integrated Chinese Bug Report',
            body = 'Description of Bug:\n' + self.request.get('bug') +
                '\n\nNavigator:\n' + self.request.get('nav') +
                '\n\nRequest Object:\n' + str(self.request) + '\n'
        ).send()
        path = self.request.get('path')
        newpath = ''
        if '/review/' in path:
            newpath = 'review.html#{:02}ART'.format(int(path[8:]))
        elif '/word_' in path:
            newpath = 'word.html#{:02}P'.format(int(path[8:]))
        elif '/sentence_' in path:
            newpath = ''
        elif '/paragraph_' in path:
            newpath = 'paragraph.html#{:02}ME'.format(int(path[15:]))
        elif '/vocabulary/' in path:
            newpath = ''
        self.response.write('<meta http-equiv="refresh" content="0; url=https://2-dot-integrated-chinese.appspot.com/' + newpath + '"><meta name="viewport" content="width=device-width, initial-scale=1">Thank you. You will be redirected shortly. <a href="https://2-dot-integrated-chinese.appspot.com/' + newpath + '">(If not, click here.)</a>')

app = webapp2.WSGIApplication([
    ('/data/index.js', IndexData),
    ('/data/review/(\d+)\.js', ReviewData),
    ('/data/(word|sentence|paragraph)/(.+?)/(\d+)\.js', ExerciseData),
    ('/', Index),
    ('/review/(\d+)', Review),
    ('/word/(pinyin|english|chinese)/(\d+)', Word),
    ('/sentence/(\w+/\d+)', Sentence),
    ('/paragraph/(\w+/\d+)', Paragraph),
    ('/vocabulary/(\d+)', Vocabulary),
    ('/bug', Bug),
    ('/(.*)', Error),
], debug=True) # TODO: change to False
