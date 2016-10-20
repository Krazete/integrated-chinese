function p(q){
return vocabulary.slice(1, 15)
.map(function(e){return e.reduce(function(i, j){return i.concat(j)})})
.map(function(e){return e.filter(function(o){return typeof(o) == "object"})})
.map(function(e){return e.map(function(o){return o[2]})})
.reduce(function(i, j){return i.concat(j)})
.filter(function(e){return (e.replace(/\d/g, "") + " ").match(q)});
}