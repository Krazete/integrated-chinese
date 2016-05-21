function compare(a, b){
	var na = [];
	var ba = [];
	for(var i=0; i<a.length; i++){
		if(a[i] != b[i]){
			na.push(a[i]);
			ba.push(b[i]);
		}
	}
	return [na, ba];
}

function aggregate(l){
	a = '';
	for(var i=0; i<l.length; i++){
		a += l[i];
	}
	return a;
}

agTraA = aggregate(reviewTraA);
agTraB = aggregate(reviewTraB);
agSimA = aggregate(reviewSimA);
agSimB = aggregate(reviewSimB);

compA = compare(agTraA, agSimA);
compB = compare(agTraB, agSimB);

tra = [compA[0].toString(), compB[0].toString()];
sim = [compA[1].toString(), compB[1].toString()];
