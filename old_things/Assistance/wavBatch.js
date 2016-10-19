/* Store all sound files in valid array. */
var valid=[];
var xhr=[];

for(i=0;i<10000;i++){
	(function(i){
		var h="http://www.language.berkeley.edu/ic/gb/wav/"+(i+1)+".wav";
		xhr[i]=new XMLHttpRequest();
		xhr[i].open("GET",h);
		xhr[i].send();
		xhr[i].onreadystatechange=function(){
			if(xhr[i].readyState==4 && xhr[i].status==200){
				valid.push(h);
				}
			};
	})(i);
}

/* Download all valid sound files. */
for(i=0;i<valid.length;i++){
	var a=document.createElement("a");
	a.setAttribute("download","");
	a.href=valid[i];
	a.click();
}
