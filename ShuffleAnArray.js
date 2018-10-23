/**
 * @param {number[]} nums
 */

var Solution = function (nums) {
    this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var shuffled = this.original;
    for (var i = 0; i < shuffled.length; i++) {
        var index = Math.floor(Math.random() * (i + 1));
        var item = shuffled[index];

        shuffled[index] = shuffled[i];
        shuffled[i] = item;
    }
    return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */