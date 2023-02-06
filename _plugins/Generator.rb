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
            @basename = datum['chapter'].to_s + datum['title']
            @ext = '.html'
            @name = @basename + @ext
            @data = {
                'layout' => 'default',
                'title' => datum['title'],
                'email' => datum['chapter']
            }
            # data.default_proc = proc do |_, key|
            #     site.frontmatter_defaults.find(relative_path, :categories, key)
            # end
        end
    end
end
