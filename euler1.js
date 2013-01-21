document.writeln("Outside of the base");
document.writeln("In the base, killing your dudes");
var total = 0;
for (var i = 1; i < 1000; i++){
	if(i % 3 == 0 || i % 5 == 0) {
		//document.writeln("I is" + i );
		total+=i;
	}
}
document.writeln(total);


