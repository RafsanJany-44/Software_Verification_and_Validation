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

function WeightConverter(measurement, val) {
  if (stryMutAct_9fa48("32")) {
    {}
  } else {
    stryCov_9fa48("32");
    var result1, result2;

    if (stryMutAct_9fa48("35") ? measurement != "ounces" : stryMutAct_9fa48("34") ? false : stryMutAct_9fa48("33") ? true : (stryCov_9fa48("33", "34", "35"), measurement == (stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), "ounces")))) {
      if (stryMutAct_9fa48("37")) {
        {}
      } else {
        stryCov_9fa48("37");
        result1 = (stryMutAct_9fa48("38") ? val * 16 : (stryCov_9fa48("38"), val / 16)).toFixed(2) + (stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), " pounds"));
        result2 = (stryMutAct_9fa48("40") ? val * 32000 : (stryCov_9fa48("40"), val / 32000)).toFixed(2) + (stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), " tons"));
      }
    } else if (stryMutAct_9fa48("44") ? measurement !== "pounds" : stryMutAct_9fa48("43") ? false : stryMutAct_9fa48("42") ? true : (stryCov_9fa48("42", "43", "44"), measurement === (stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), "pounds")))) {
      if (stryMutAct_9fa48("46")) {
        {}
      } else {
        stryCov_9fa48("46");
        result1 = (stryMutAct_9fa48("47") ? val / 16 : (stryCov_9fa48("47"), val * 16)).toFixed(2) + (stryMutAct_9fa48("48") ? "" : (stryCov_9fa48("48"), " ounces"));
        result2 = (stryMutAct_9fa48("49") ? val * 2000 : (stryCov_9fa48("49"), val / 2000)).toFixed(2) + (stryMutAct_9fa48("50") ? "" : (stryCov_9fa48("50"), " tons"));
      }
    } else if (stryMutAct_9fa48("53") ? measurement !== "tons" : stryMutAct_9fa48("52") ? false : stryMutAct_9fa48("51") ? true : (stryCov_9fa48("51", "52", "53"), measurement === (stryMutAct_9fa48("54") ? "" : (stryCov_9fa48("54"), "tons")))) {
      if (stryMutAct_9fa48("55")) {
        {}
      } else {
        stryCov_9fa48("55");
        result1 = (stryMutAct_9fa48("56") ? val / 2000 : (stryCov_9fa48("56"), val * 2000)).toFixed(2) + (stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), " pounds"));
        result2 = (stryMutAct_9fa48("58") ? val / 32000 : (stryCov_9fa48("58"), val * 32000)).toFixed(2) + (stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), " ounces"));
      }
    } else {
      if (stryMutAct_9fa48("60")) {
        {}
      } else {
        stryCov_9fa48("60");
        return stryMutAct_9fa48("61") ? "" : (stryCov_9fa48("61"), "wrong input");
      }
    }

    return stryMutAct_9fa48("62") ? [] : (stryCov_9fa48("62"), [result1, result2]);
  }
}

console.log(WeightConverter(stryMutAct_9fa48("63") ? "" : (stryCov_9fa48("63"), "ounces"), 4));
module.exports = stryMutAct_9fa48("64") ? {} : (stryCov_9fa48("64"), {
  WeightConverter
});