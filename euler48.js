document.writeln("Outside of the base");
var total = bigInt();
document.writeln("In the base, killing your dudes");
for (var i = 1; i <= 1000; i++){
	total.add(Math.pow(i,i));
}
document.writeln(total);
