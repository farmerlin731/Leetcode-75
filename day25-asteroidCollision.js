//First Idea:
//Stack...when meet negative number  pop the previous one.
//If the previous one is positive, compare them, and push the winner.
//Oh,,, the 'i--' from leetcode-solution is amazing!

//735. Asteroid Collision

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const ans = [];

  for (const as of asteroids) {
    ans.push(as);
    while (ans.at(-1) < 0 && ans.at(-2) > 0) {
      let asA = ans.pop();
      let asB = ans.pop();
      if (asA + asB > 0) {
        ans.push(asB);
      } else if (asA + asB < 0) {
        ans.push(asA);
      }
    }
  }
  return ans;
};

var asteroidCollisionFromLeetcode = function (asteroids) {
  const s = [];
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];
    if ((s.length === 0 || s[s.length - 1] < 0) && a < 0) {
      s.push(a);
    } else if (a > 0) {
      s.push(a);
    } else {
      const pop = s.pop();
      if (Math.abs(pop) > Math.abs(a)) {
        s.push(pop);
      } else if (Math.abs(pop) < Math.abs(a)) {
        i--; //Magic!
      } else {
        continue;
      }
    }
  }

  return s;
};

// let asteroids = [5, 10, -5];
// let asteroids = [8, -8];
let asteroids = [10, 2, -5];

console.log(asteroidCollision(asteroids));
