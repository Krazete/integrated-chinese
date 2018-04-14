#!/usr/bin/python
# -*- coding: utf8 -*-

import os
import jinja2
import webapp2
from google.appengine.api import mail

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader('/'.join([os.path.dirname(__file__), 'templates']))
)

class MainHandler(webapp2.RequestHandler):
    def write_verified(self, desired_page, lesson, valid_ints = range(1, 24)):
        page = 'error.html'
        if lesson.isdigit():
            if int(lesson) in valid_ints:
                page = desired_page
        self.write(page)
    def write(self, page):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(open(page).read())

class Index(MainHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render({
            'title': 'Integrated Chinese Multimedia Exercises',
            'title_zh': '中文聽說讀寫'.decode('utf8')
        }))

class Review(MainHandler):
    def get(self, lesson):
        self.write_verified('review.html', lesson)

class Word(MainHandler):
    def get(self, path):
        form, lesson = path.split('/')
        # form is already checked
        self.write_verified('word.html', lesson, range(0, 24))

class Sentence(MainHandler):
    def get(self, path):
        form, lesson = path.split('/')
        if form == 'mce':
            self.write_verified('sentence.html', lesson)
        elif form == 'mcc':
            self.write_verified('sentence.html', lesson, [1, 7])
        elif form == 'tfe':
            self.write_verified('sentence.html', lesson, [i for i in range(2, 24) if i != 3])
        elif form == 'fbt':
            self.write_verified('sentence.html', lesson, [1, 2, 9])
        elif form == 'fbc':
            self.write_verified('sentence.html', lesson, [2, 3, 5, 7, 8, 10])
        elif form == 'fbr':
            self.write_verified('sentence.html', lesson, [i for i in range(12, 23) if i != 17])
        elif form == 'fbp':
            self.write_verified('sentence.html', lesson, [17])
        elif form == 'uns':
            self.write_verified('sentence.html', lesson, [1, 2, 4, 5, 7, 23])
        elif form == 'num':
            self.write_verified('sentence.html', lesson, [1])
        elif form == 'clk':
            self.write_verified('sentence.html', lesson, [3])
        elif form == 'gen':
            self.write_verified('sentence.html', lesson, [3])
        elif form == 'mon':
            self.write_verified('sentence.html', lesson, [9])
        elif form == 'cqf':
            self.write_verified('sentence.html', lesson, [3])
        elif form == 'ant':
            self.write_verified('sentence.html', lesson, [11])
        else:
            self.write('error.html')

class Paragraph(MainHandler):
    def get(self, path):
        form, lesson = path.split('/')
        if form == 'mce':
            self.write_verified('paragraph.html', lesson)
        elif form == 'mcc':
            self.write_verified('paragraph.html', lesson, [i for i in range(4, 12) if i != 7])
        elif form == 'tfe':
            self.write_verified('paragraph.html', lesson, [3, 7])
        elif form == 'tfc':
            self.write_verified('paragraph.html', lesson, [i for i in range(1, 24) if i != 13])
        elif form == 'mrc':
            self.write_verified('paragraph.html', lesson, [13])
        else:
            self.write('error.html')

class Vocabulary(MainHandler):
    def get(self, path):
        #self.write('vocabulary.html')
        self.response.write('<meta http-equiv="refresh" content="0; url=https://2-dot-integrated-chinese.appspot.com/vocabulary.html#' + path + '"><meta name="viewport" content="width=device-width, initial-scale=1">You will be redirected shortly. <a href="https://2-dot-integrated-chinese.appspot.com/vocabulary.html#' + path + '">(If not, click here.)</a>')

class Error(MainHandler):
    def get(self, path):
        self.write('error.html')

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
    ('/review/(\d+)', Review),
    ('/word/([pec]/\d+)', Word),
    ('/sentence/(\w+/\d+)', Sentence),
    ('/paragraph/(\w+/\d+)', Paragraph),
    ('/vocabulary/(\d+)', Vocabulary),
    ('/bug', Bug),
    ('/(.*)', Error),
], debug=True) # TODO: change to False
