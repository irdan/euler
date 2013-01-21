document.writeln("Outside of the base");
document.writeln("In the base, killing your dudes");
function sum_even_fibonacci(max) {
	document.writeln("max is " + max);
	var total = 0;
	var p = (1+Math.sqrt(5))/2;
	var v = (1-Math.sqrt(5))/2;
	var fib;
	for( var n = 3; n <= max; n=n+3) {
		fib = Math.ceil((Math.pow(p,n) - Math.pow(v,n))/Math.sqrt(5));
		if (fib > 4000000) {
			break;
		}	
	//	document.writeln("fib " + n + " is "+ fib);
		total+= fib;
	}
	return total;
}
var total = sum_even_fibonacci(4000000);
document.writeln(total);


