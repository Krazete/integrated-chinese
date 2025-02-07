module MainPlugin
    module ZHint
        # convert integers to chinese numerals (0-99 only)
        def zhint(n)
            if n == 0
                return '零'
            end
            digit = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
            number = ''
            if n >= 20
                number += digit[(n - (n % 10)) / 10]
            end
            if n >= 10
                number += '十'
            end
            return number + digit[n % 10]
        end
    end
    class ReviewPage < Jekyll::Page
        include ZHint
        def initialize(site, base, dir, basename, title)
            @site = site
            @base = base
            @dir = dir
            @basename = basename
            @ext = '.html'
            @name = basename + '.html'
            @data = {
                'layout' => dir,
                'title' => "Lesson #{basename} Review",
                'heading-zh' => "第#{zhint(basename.to_i)}課",
                'heading-en' => title,
                'data' => "review/#{basename}.js",
                'scripts' => ['mp3.js', 'review.js']
            }
        end
    end
    class PageGenerator < Jekyll::Generator
        safe true
        def generate(site)
            # Review
            site.data['index'].each do |index|
                site.pages << ReviewPage.new(site, site.source, 'review', index[0], index[1])
            end
            # Exercise (Word)
            # site.data['index'].each do |index|
            #     site.pages << ReviewPage.new(site, datum)
            # end
        end
    end
end
