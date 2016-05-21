import os

import webapp2 as webapp
from google.appengine.ext.webapp import template
from google.appengine.ext.webapp import util

class MainHandler(webapp.RequestHandler):
    def get(self, index):
        if index is None:
            index = 'contents.html'

        path = os.path.join(os.path.dirname(__file__), index)
        self.response.headers['Content-Type'] = 'text/html'
        self.response.out.write(template.render(path, {}))

def main():
    app = webapp.WSGIApplication([('/(.*html)?', MainHandler)], debug = True)
    util.run_wsgi_app(app)

if __name__ == '__main__':
    main()
