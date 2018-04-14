#!/usr/bin/python
# -*- coding: utf8 -*-
import os
import jinja2
import webapp2
# import data
from google.appengine.api import mail

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader('/'.join([os.path.dirname(__file__), 'templates']))
)

INT_ZH = ['']

class MainHandler(webapp2.RequestHandler):
    def write(self, template, variables={}):
        template = JINJA_ENVIRONMENT.get_template(template)
        self.response.write(template.render(variables))
    def write_error(self, message):
        self.write('error.html', {
            'title': 'Page Not Found',
            'title_en': 'Page Not Found',
            'title_zh': '找不到網頁'.decode('utf8'),
            'scripts': ['error.js'],
            'error_message': 'Error: {}'.format(message)
        })
    def verify_lesson_and_write(self, template, lessons, variables={}):
        try:
            if not lesson.isdigit():
                raise ValueError('Invalid lesson number.')
            lesson = int(lesson)
            if lesson in valid_lessons:
                variables.setdefault('lesson', lesson)
                self.write(template, variables)
            else:
                raise ValueError('Lesson number is out of bounds.')
        except Exception, e:
            self.write_error(e)

class Index(MainHandler):
    def get(self):
        self.write('index.html', {
            'title': 'Integrated Chinese Multimedia Exercises',
            'title_zh': '中文聽說讀寫'.decode('utf8'),
            'title_en': 'Integrated Chinese Multimedia Exercises',
            'scripts': ['index.js']
        })

class Review(MainHandler):
    def get(self, lesson):
        self.verify_lesson_and_write('review.html', lesson, {
            'title': 'Lesson {{lesson}} Review',
            'title_zh': '中文'.decode('utf8'),
            'title_en': 'Lesson {{lesson}} Review',
            'scripts': ['review.js']
        })

class Word(MainHandler):
    def get(self, path):
        form, lesson = path.split('/')
        # form is already checked
        self.verify_lesson_and_write('word.html', lesson, range(0, 24))

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
    ('/', Index),
    ('/review/(.*)', Review),
    ('/word/([pec]/\d+)', Word),
    ('/sentence/(\w+/\d+)', Sentence),
    ('/paragraph/(\w+/\d+)', Paragraph),
    ('/vocabulary/(\d+)', Vocabulary),
    ('/bug', Bug),
    ('/(.*)', Error),
], debug=True) # TODO: change to False
