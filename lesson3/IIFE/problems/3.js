function countdown(start) {
	(function(n) {
		for (let count = n; count >= 0; count -= 1) {
			console.log(count)
		}

		console.log('Done!');
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