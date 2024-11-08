//First Idea:
//Use 'Queue'.
//But don't waste time to shift array, just need to set an index to recording.

var RecentCounter = function () {
  this.queue = [];
  this.index = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[this.index] < t - 3000) this.index++;
  return this.queue.length - this.index;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
