Function.prototype.run = function (delay) {
    setTimeout(/*console.log("test")*/console.log, delay);
	console.log("test");
};
function test(){console.log("test")};
test.run(10000);
process.stdout.write("some text");


const sumObserver = {
    sum: 0,
     next: function(value) {
      console.log('Adding: ' + value);
      this.sum = this.sum + value;
    },
    error: () => {
      // We actually could just remove this method,
      // since we do not really care about errors right now.
      console.log('Sum equals: ' + this.sum);
    },
    complete() {
      console.log('Sum equals: ' + this.sum);
    }
  };
  sumObserver.next(4);