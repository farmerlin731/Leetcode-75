//2336. Smallest Number in Infinite Set
//Set a num(pivot), which means the normal order.
//And set a queue, the contents are all smaller than pivot.
//Oh,, the data structure of queue can be a minHeap.
//Oh,, u should consider the circumstance about duplicate number!

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var SmallestInfiniteSet = function () {
  this.pivot = 1;
  this.minHeap = new MinPriorityQueue((x) => x);
  //V2
  this.numSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  let ans;
  if (this.minHeap.size() == 0) {
    ans = this.pivot++;
  } else {
    ans = this.minHeap.dequeue();
    this.numSet.delete(ans);
  }
  return ans;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num < this.pivot && !this.numSet.has(num)) {
    this.minHeap.enqueue(num);
    this.numSet.add(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

let tmp = new SmallestInfiniteSet();
tmp.addBack(2);
console.log(tmp.popSmallest());
console.log(tmp.popSmallest());
console.log(tmp.popSmallest());
tmp.addBack(1);
console.log(tmp.popSmallest());
console.log(tmp.popSmallest());
console.log(tmp.popSmallest());
