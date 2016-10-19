p = open("pinyin.txt")
e = open("english.txt")
c = open("characters.txt", encoding = "utf-8")

pn = [int(i[:3]) for i in p.readlines()]
en = [int(i[:3]) for i in e.readlines()]
cn = [int(i[:3]) for i in c.readlines()]

p.close()
e.close()
c.close()

n = list(pn)
for i in range(len(en)):
    if en[i] not in n:
        n.insert(n.index(en[i-1]), en[i])
for i in range(len(cn)):
    if cn[i] not in n:
        n.insert(n.index(cn[i-1]), cn[i])

num = {}
tofile = open("numbersonly.txt", "w")

for i in n:
    num[i] = [pn.count(i), en.count(i), cn.count(i)]
    if(not (num[i][0] == num[i][1] == num[i][2])):
        print(i, num[i])
    tofile.write("{:03.0f}\n".format(i))

tofile.close()
