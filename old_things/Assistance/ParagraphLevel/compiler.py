from pathlib import Path

text = ''

for i in Path().iterdir():
    if i.suffix == ".txt":
        part = i.open('r', encoding = 'utf-8')
        text += part.read() + '\n'
        part.close()

full = open('compiled.js', 'w', encoding = 'utf-8')
full.write(text)
full.close()
