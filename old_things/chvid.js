javascript:

function intersect(a, b){
	var list = [];
	for(var i = 0; i < a.length; i++){
		for(var j = 0; j < a.length; j++){
			if(a[i] == b[j]){
				list.push(a[i]);
			}
		}
	}
	return list;
}

function activate(event){
	var embeds = intersect(document.elementsFromPoint(event.x, event.y), document.getElementsByTagName("embed"));
	console.log(document.elementsFromPoint(event.x, event.y));
	if(embeds.length == 1){
		embeds[0].setAttribute("controls", "");
		embeds[0].removeAttribute("autoplay");
		embeds[0].outerHTML = embeds[0].outerHTML.replace("embed", "video");
	}
}

document.body.addEventListener("mouseover", activate);
