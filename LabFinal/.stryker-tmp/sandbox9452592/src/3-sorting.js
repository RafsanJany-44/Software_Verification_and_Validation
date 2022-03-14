// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }

      return true;
    }

    return false;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

function bubbleSort(arr) {
  if (stryMutAct_9fa48("65")) {
    {}
  } else {
    stryCov_9fa48("65");
    let len = arr.length;

    for (let i = 0; stryMutAct_9fa48("68") ? i >= len : stryMutAct_9fa48("67") ? i <= len : stryMutAct_9fa48("66") ? false : (stryCov_9fa48("66", "67", "68"), i < len); stryMutAct_9fa48("69") ? i-- : (stryCov_9fa48("69"), i++)) {
      if (stryMutAct_9fa48("70")) {
        {}
      } else {
        stryCov_9fa48("70");

        for (let j = 0; stryMutAct_9fa48("73") ? j >= len : stryMutAct_9fa48("72") ? j <= len : stryMutAct_9fa48("71") ? false : (stryCov_9fa48("71", "72", "73"), j < len); stryMutAct_9fa48("74") ? j-- : (stryCov_9fa48("74"), j++)) {
          if (stryMutAct_9fa48("75")) {
            {}
          } else {
            stryCov_9fa48("75");

            if (stryMutAct_9fa48("79") ? arr[j] <= arr[j + 1] : stryMutAct_9fa48("78") ? arr[j] >= arr[j + 1] : stryMutAct_9fa48("77") ? false : stryMutAct_9fa48("76") ? true : (stryCov_9fa48("76", "77", "78", "79"), arr[j] > arr[stryMutAct_9fa48("80") ? j - 1 : (stryCov_9fa48("80"), j + 1)])) {
              if (stryMutAct_9fa48("81")) {
                {}
              } else {
                stryCov_9fa48("81");
                let tmp = arr[j];
                arr[j] = arr[stryMutAct_9fa48("82") ? j - 1 : (stryCov_9fa48("82"), j + 1)];
                arr[stryMutAct_9fa48("83") ? j - 1 : (stryCov_9fa48("83"), j + 1)] = tmp;
              }
            }
          }
        }
      }
    }

    return arr;
  }
}

console.log(bubbleSort(stryMutAct_9fa48("84") ? [] : (stryCov_9fa48("84"), [2, 1, 4, 3])));
module.exports = stryMutAct_9fa48("85") ? {} : (stryCov_9fa48("85"), {
  bubbleSort
});