// Refactor the countdown with recursion

function countdown(start) {
	(function(n) {
		function goDown(n) {
			console.log(n);

			if (n <= 0) {
				console.log('Done!');
			} else {
				return goDown(n - 1);
			}
		}

		goDown(n);
		
	})(start);
}

countdown(7);

/*
7
6
5
4
3
2
1
0
Done!
*/