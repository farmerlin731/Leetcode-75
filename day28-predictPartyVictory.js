//First Idea:
//Just need to compare which party has much people?
//If the same amount, depend on which one is first?
//Oh,, AABBB -> A win! the idea is not correct XD
//Just use brute-force ..
//649. Dota2 Senate

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const Rqueue = [];
  const Dqueue = [];
  const n = senate.length;

  for (let i = 0; i < senate.length; i++) {
    senate[i] == "R" && Rqueue.push(i);
    senate[i] == "D" && Dqueue.push(i);
  }

  while (Rqueue.length && Dqueue.length) {
    const curR = Rqueue.shift();
    const curD = Dqueue.shift();
    if (curR < curD) Rqueue.push(curR + n);
    else Dqueue.push(curD + n);
  }

  return Rqueue.length ? "Radiant" : "Dire";
};

// const senate = "RDD";
const senate = "RD";

console.log(predictPartyVictory(senate));
