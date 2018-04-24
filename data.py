import json

def load_json(level, lesson):
    with open('data/{}.json') as json_content:
        content = json.loads(json_content)
    return content.getdefault(lesson, {})

load_json(1, "paragraph")

''' TODO
- make 'verify_lesson_and_write' verify by checking proper .json data file (instead of using a hardcoded lesson range)
- finish this file (load json so 'verify_lesson_and_write' can do its thing, then output only the relevant data to the html)
- put variable placeholders in html templates (to inject the relevant data to the html)
'''
