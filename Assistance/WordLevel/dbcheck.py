active = ["pinyin", "english", "characters"]

for i in active:
    a = open(i + "9.txt", encoding = "utf-8")
    b = open(i + ".txt", encoding = "utf-8")

    an = [j for j in a.readlines()]
    bn = [j for j in b.readlines()]

    a.close()
    b.close()
    
    for j in range(max(len(an), len(bn))):
        try:
            if an[j] not in bn:
                print(i, an[j][:-1])
            if bn[j] not in bn:
                print(i, bn[j][:-1])
        except:
            pass
