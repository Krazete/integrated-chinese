module MainPlugin
    class PageGenerator < Jekyll::Generator
        def generate(site)
            data = site.data['index']
            data.each do |datum|
                site.pages << WordPage.new(site, datum)
            end
        end
    end
    class WordPage < Jekyll::Page
        def initialize(site, datum)
            @site = site
            @base = site.source
            @dir = 'posts'
            @basename = datum[0] + datum[1]
            @ext = '.html'
            @name = @basename + @ext
            @data = {
                'layout' => 'main',
                'title-en' => datum[0],
                'title-zh' => number_zh(datum[0].to_i)
                # 'title' => datum['title'],
                # 'email' => datum['chapter']
            }
            # data.default_proc = proc do |_, key|
            #     site.frontmatter_defaults.find(relative_path, :categories, key)
            # end
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
