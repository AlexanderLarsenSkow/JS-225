class Banner {
  constructor(message) {
		this.message = message;
	}

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
		const dashNum = this.#messageLength();
		const dashes = '-'.repeat(dashNum);
		return `+${dashes}+`;
	}

  emptyLine() {
		const emptyNum = this.#messageLength();
		const spaces = ' '.repeat(emptyNum);
		return `|${spaces}|`;
	}

  messageLine() {
    return `| ${this.message} |`
  }

	#messageLength() {
		return this.message.length + 2;
	}
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+