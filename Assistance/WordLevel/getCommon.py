active = ["pinyin", "english", "characters"]

for i in active:
    vocab = []

    for j in range(10):
        file = open("{}{}.txt".format(i, j), encoding = "utf-8")
        for k in file.readlines():
            if k not in vocab:
                vocab.append(k)
        file.close()

    file = open("{}.txt".format(i), "w", encoding = "utf-8")
    for j in vocab:
        file.write(j)
    file.close()
