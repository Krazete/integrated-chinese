var lsn = [];
for(var n = 0; n < 25; n++){
	lsn[n] = [];
	if(n < 4 || n == 7 || n > 11){
		lsn[n].push("MC-E");
	}
	if(n > 3 && n != 7 && n < 12){
		lsn[n].push("MC-E");
	}
	if(n > 3 && n != 7 && n < 12){
		lsn[n].push("MC-C");
	}
	if(n > 2 && n != 8 && n != 10 && n < 12){
		lsn[n].push("TF");
	}
	if(!(n > 3 && n < 7) && n != 9 && n != 11 && n != 14){
		lsn[n].push("TF");
	}
	if(n == 14){
		lsn[n].push("Map");
	}
}

var msn = [];
for(var n = 0; n < 25; n++){
	msn[n] = [];
	msn[n].push("MC-E");
	if(n > 3 && n != 7 && n < 12){
		msn[n].push("MC-C");
	}
	if(n != 14){
		msn[n].push("TF");
	}
	if(n == 14){
		msn[n].push("Map");
	}
}

for(var n = 0; n < 25; n++){
	if(lsn[n].toString() != msn[n].toString()){
		console.log(n, lsn[n], msn[n]);
	}
}

/**/

var lsn = [];
for(var i = 0; i < 23; i++){
	var n = i + 1;
	lsn[i] = [];
	if(true){
		lsn[i].push("mce");
	}
	if(n > 3 && n != 7 && n < 12){
		lsn[i].push("mcc");
	}
	if(n == 3 || n == 7){
		lsn[i].push("tfe");
	}
	if(n != 14){
		lsn[i].push("tfc");
	}
	if(n == 14){
		lsn[i].push("mr");
	}
	console.log(n, lsn[i].length);
}
