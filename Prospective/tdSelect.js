bds = document.createElement("style");
bds.innerHTML = "td{box-shadow: 0 0 1px #888}";
document.body.appendChild(bds);

var a, b;
var selection = document.createElement("div");
document.body.appendChild(selection);

function toggle(e){
	if(e.style.webkitFilter == ""){
		e.style.webkitFilter="opacity(0)";
	}
	else{
		e.removeAttribute("style");
	}
}

function action(e){
	var sl = e.getBoundingClientRect();
	for(var i = 0; i < document.body.getElementsByTagName("td").length; i++){
		var td = document.body.getElementsByTagName("td")[i].getBoundingClientRect();
		if(td.left < sl.right && td.right > sl.left && td.top < sl.bottom && td.bottom > sl.top){
			toggle(document.body.getElementsByTagName("td")[i]);
		}
	}
}

function release(event){
	if(a[0] == b[0] && a[1] == b[1]){
		b = [a[0] + 1, a[1] + 1];
		selection.style.left = Math.min(a[0], b[0]) + "px";
		selection.style.top = Math.min(a[1], b[1]) + "px";
		selection.style.width = Math.abs(b[0] - a[0]) + "px";
		selection.style.height = Math.abs(b[1] - a[1]) + "px";
	}
	action(selection);
	selection.removeAttribute("style");
	document.body.removeEventListener("mousemove", drag);
	document.body.removeEventListener("mouseup", release);
}

function drag(event){
	b = [event.pageX, event.pageY];
	selection.style.left = Math.min(a[0], b[0]) + "px";
	selection.style.top = Math.min(a[1], b[1]) + "px";
	selection.style.width = Math.abs(b[0] - a[0]) + "px";
	selection.style.height = Math.abs(b[1] - a[1]) + "px";
}

function press(event){
	a = [event.pageX, event.pageY];
	b = [event.pageX, event.pageY];
	selection.style.background = "rgba(0, 0, 0, 0.1)";
	selection.style.position = "absolute";
	document.body.addEventListener("mousemove", drag);
	document.body.addEventListener("mouseup", release);
}

document.body.style.webkitUserSelect = "none";
document.body.addEventListener("mousedown", press);

/*
javascript:eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 A(e){""==e.2.x?e.2.x="K(0)":e.z("2")}8 F(e){P(m t=e.E(),o=0;o<4.5.j("c").S;o++){m n=4.5.j("c")[o].E();n.f<t.B&&n.B>t.f&&n.d<t.C&&n.C>t.d&&A(4.5.j("c")[o])}}8 h(e){a[0]==b[0]&&a[1]==b[1]&&(b=[a[0]+1,a[1]+1],3.2.f=6.g(a[0],b[0])+"7",3.2.d=6.g(a[1],b[1])+"7",3.2.u=6.9(b[0]-a[0])+"7",3.2.v=6.9(b[1]-a[1])+"7"),F(3),3.z("2"),4.5.s("D",l),4.5.s("G",h)}8 l(e){b=[e.k,e.i],3.2.f=6.g(a[0],b[0])+"7",3.2.d=6.g(a[1],b[1])+"7",3.2.u=6.9(b[0]-a[0])+"7",3.2.v=6.9(b[1]-a[1])+"7"}8 r(e){a=[e.k,e.i],b=[e.k,e.i],3.2.U="V(0, 0, 0, 0.1)",3.2.W="R",4.5.q("D",l),4.5.q("G",h)}p=4.w("2"),p.M="c{N-O: 0 0 T #L}",4.5.y(p);m a,b,3=4.w("Q");4.5.y(3),4.5.2.J="H",4.5.q("I",r);',59,59,'||style|selection|document|body|Math|px|function|abs|||td|top||left|min|release|pageY|getElementsByTagName|pageX|drag|var|||bds|addEventListener|press|removeEventListener||width|height|createElement|webkitFilter|appendChild|removeAttribute|toggle|right|bottom|mousemove|getBoundingClientRect|action|mouseup|none|mousedown|webkitUserSelect|opacity|888|innerHTML|box|shadow|for|div|absolute|length|1px|background|rgba|position'.split('|')))
*/
