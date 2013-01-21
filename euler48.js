console.log("Outside of the base");
console.log("In the base, killing your dudes");
var sum = 0;
var max_delta = 15;
var max = 10;
var num = new Array(max);
var sums = new Array(max);
var deltas = new Array(max);
process.stdout.write("n   ");
for (var n = 1; n < max; n++){
	process.stdout.write(n + "   ");
}
console.log("");
process.stdout.write("s   ");
for (var n = 1; n < max; n++){	
	sums[n-1] = sum;
	process.stdout.write(n+sum + "   ");
	sum+=n;
}
console.log("");
for (var d = 1; d < max_delta; d++){
	deltas[d] = new Array(max);
	process.stdout.write("d" + d + "  ");
	if (d==1) {
		for (var i = 2; i < max; i++){
			deltas[d][i] = sums[i] - sum[i-1];
			process.stdout.write("" + deltas[d][i] +"  ");
		}
	}
	else {
		for (var i = 2; i < max; i++){
			process.stdout.write("" + deltas[d-1][i] +"  ");
			deltas[d][i] = deltas[d-1][i] - deltas[d-1][i-1];
//			process.stdout.write("" + deltas[d][i] +"  ");
		}
	}
/*	for(i = 2; i<max; i++){
		process.stdout.write("" + deltas[d][i] + "   ");
	}
*/
	console.log("");
}
