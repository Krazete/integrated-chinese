---
exercises: ['word', 'paragraph', 'sentence']
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
    }
    {%- unless forloop.last %},{% endunless %}
{%- endfor %}
};
