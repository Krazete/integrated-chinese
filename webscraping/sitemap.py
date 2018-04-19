import urllib.request
import re
import json

url_regex = re.compile(r'(?:href|src)\s*=\s*"(.+?)"')
root = 'http://www.language.berkeley.edu/ic/gb/'

def get(url, sitemap={'404': []}, past_url=''):
    if url not in sitemap:
        sitemap.setdefault(url, [])
        try:
            response = urllib.request.urlopen(url)
        except urllib.request.HTTPError:
            sitemap[url].append('404')
            return
        responseText = str(response.read())
        matches = url_regex.finditer(responseText)
        for match in matches:
            next_url = match.groups()[0]
            if next_url.startswith('javascript'):
                continue
            if not next_url.startswith('http'):
                if next_url.startswith('..'):
                    base_url = '/'.join(url.split('/')[:-2]) + '/'
                    next_url = '/'.join(next_url.split('/')[1:])
                else:
                    base_url = '/'.join(url.split('/')[:-1]) + '/'
                next_url = base_url + next_url
            sitemap[url].append(next_url)
            get(next_url, sitemap, url)
    return sitemap

def save(path, sitemap):
    with open(path + '.json', 'w') as fp:
        json.dump(sitemap, fp)

def load(path):
    with open(path + '.json', 'r') as fp:
        sitemap = json.load(fp)
    return sitemap

def print_404(sitemap, short=True):
    for url in sitemap:
        for next_url in sitemap[url]:
            if '404' in sitemap[next_url]:
                if short:
                    print('{}\n\t{}'.format(short_url(url), short_url(next_url)))
                else:
                    print('{}\n\t{}'.format(url, next_url))

def short_url(url):
    return url[len(root):]

if __name__ == '__main__':
    try:
        sitemap = load('sitemap')
    except FileNotFoundError:
        sitemap = get(root)
        save('sitemap', sitemap)
    print_404(sitemap)
