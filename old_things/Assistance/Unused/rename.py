from pathlib import *

path = Path('PA')
for file in path.iterdir():
    file.rename(file.parent.name + '/' + file.name[:4] + file.name[5:])
