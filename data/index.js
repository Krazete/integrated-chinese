---
---
{%- assign d = site.data.paragraph.boolean-en | first -%}
{%- assign types = ('paragraph', 'word', 'sentence') -%}
var data = {
    {%- for type in types %}
    "paragraph": {
        {%- for type in site.data.paragraph %}
        "{{ type }}": ""
        {%- endfor %}
    }
    {%- endfor %}
};
