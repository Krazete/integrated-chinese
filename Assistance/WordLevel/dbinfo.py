p = open("pinyin.txt")
e = open("english.txt")
c = open("characters.txt", encoding = "utf-8")

pn = sorted([int(i[:3]) for i in p.readlines()])
en = sorted([int(i[:3]) for i in e.readlines()])
cn = sorted([int(i[:3]) for i in c.readlines()])

p.close()
e.close()
c.close()

n = list(set(pn + en + cn))

np = []
ne = []
nc = []

for i in n:
    if i not in pn:
        np.append(i)
    if i not in en:
        ne.append(i)
    if i not in cn:
        nc.append(i)

print(len(pn), len(en), len(cn), len(np), len(ne), len(nc))
print(ne == nc)
print(sorted(ne))
print(pn == list(range(pn[0], pn[-1] + 1)))
print(pn[0], pn[-1])
