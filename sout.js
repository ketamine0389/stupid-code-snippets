// Ever wanted to "sout" (System.out.println();) in JavaScript? Now you can!
// Just add the following line to unlock the "sout"
class Out{println(t){console.log(t);}}class System{static out=new Out();}

/* 
 * Let's make a quick example scenario:
 * Say you're debugging a for loop to see when it goes into an if statement.
 * The first thought is to report the conditions to the output.
 */
let timesHit = 0;

for (var i = 0; i < 44; i++) {
	System.out.println('looping');
	if (i%4 == 0) {
		System.out.println('condition met');
		timesHit++;
	}
}

System.out.println(timesHit + ' <- times hit');
 
