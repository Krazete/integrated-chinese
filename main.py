from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('error.html', error_message='lol')

@app.route('/<blah>')
def blpppp(blah):
    return "<h1> Hello World {}</h1>".format(blah)

if __name__ == '__main__':
    app.run(debug=True)
