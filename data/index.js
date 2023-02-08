---
exercises: ['word', 'sentence', 'paragraph']
---
var data = {
{%- for exercise in page.exercises %}
    "{{ exercise }}": {
    {%- for level in site.data[exercise] %}
        "{{ level[0] }}": [
        {%- for lesson in level[1] %}
            {{- lesson[0] }}
            {%- unless forloop.last %}, {% endunless %}
        {%- endfor -%}
        ]
        {%- unless forloop.last %},{% endunless %}
    {%- endfor %}
    },
{%- endfor %}
    "title": {
    {%- for lesson in site.data.index %}
        "{{ lesson[0] }}": "{{ lesson[1] }}"
        {%- unless forloop.last %},{% endunless %}
    {%- endfor %}
    }
};
