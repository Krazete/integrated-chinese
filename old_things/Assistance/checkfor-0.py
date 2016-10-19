from pathlib import Path

for i in Path().iterdir():
    if i.stem[-2:] == "-0":
        print(i.name)
