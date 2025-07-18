let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',

  listGames() {
		let self = this;

    // this.titles.forEach(title => {
    //   console.log(self.seriesTitle + ' ' + title);
    // });

		this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
		}, this) // can also use this as thisArg arugment for forEach
  }
};

TESgames.listGames(); // undefined + title