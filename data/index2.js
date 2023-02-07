---
exercises: ['word', 'paragraph', 'sentence']
---
var data = {
    {%- for lesson in (0..23) %}
    "{{ lesson }}": {
        {%- for exercise in page.exercises %}
        "{{ exercise }}": [
            {%- for level in site.data[exercise] %}
                {%- for sublevel in level[1] %}
                {{sublevel[0] |strip }} == {{lesson |strip}}
                    {%- if sublevel[0] == lesson -%}
                        "{{ level[0] }}"
                        {%- unless forloop.last %}, {% endunless %}
                    {%- endif %}
                {%- endfor %}
            {%- endfor -%}
        ]
        {%- unless forloop.last %},{% endunless %}
    {%- endfor %}
    }
    {%- unless forloop.last %},{% endunless %}
{%- endfor %}
};
