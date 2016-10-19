from pathlib import Path

for i in Path().iterdir():
    if i.suffix == ".txt":
        file = i.open("r", encoding = "utf-8")
        text = file.read()
        file.close()

##        text = text[text.find("new Array"):text.find("answers")]
##        for j in range(10):
##            text = text.replace("db[{}] = ".format(j), "")
##            text = text.replace("if(parent.exn=={}) ".format(j), "{}".format(j))

        text = text.replace("[\n", "[")

        file = i.open("w", encoding = "utf-8")
        file.write(text)
        file.close()
