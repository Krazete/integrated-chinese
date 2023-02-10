module MainPlugin
    class PageGenerator < Jekyll::Generator
        def generate(site)
            # Review Pages
            site.data['review'].each do |review|
                site.pages << WordPage.new(site, review, 'review')
            end
            # Exercise Pages
            # exercises = ['word', 'sentence', 'paragraph']
            # data = site.data['index']
            # data.each do |datum|
            #     site.pages << WordPage.new(site, datum)
            # end
        end
    end
    class WordPage < Jekyll::Page
        def initialize(site, datum, pagetype)
            @site = site
            @base = site.source
            @dir = pagetype
            @basename = datum[0]
            @ext = '.html'
            @name = @basename + @ext
            @data = {
                'layout' => pagetype,
                'title-en' => datum[0],
                'title-zh' => '第' + number_zh(datum[0].to_i) + '課'
            }
    end
    def number_zh(n)
        if n == 0
            return '零'
        end
        digit = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
        digit_zh = ''
        if n >= 20
            digit_zh += digit[(n - (n % 10)) / 10]
        end
        if n >= 10
            digit_zh += '十'
        end
        digit_zh += digit[n % 10]
        return digit_zh
    end
end
end
