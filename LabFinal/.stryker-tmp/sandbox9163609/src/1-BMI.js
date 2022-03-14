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

function calculateBMI(heightInCM, weightInKG) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");

    if (stryMutAct_9fa48("3") ? (heightInCM === '' || heightInCM < 0) && isNaN(heightInCM) : stryMutAct_9fa48("2") ? false : stryMutAct_9fa48("1") ? true : (stryCov_9fa48("1", "2", "3"), (stryMutAct_9fa48("5") ? heightInCM === '' && heightInCM < 0 : stryMutAct_9fa48("4") ? false : (stryCov_9fa48("4", "5"), (stryMutAct_9fa48("7") ? heightInCM !== '' : stryMutAct_9fa48("6") ? false : (stryCov_9fa48("6", "7"), heightInCM === (stryMutAct_9fa48("8") ? "Stryker was here!" : (stryCov_9fa48("8"), '')))) || (stryMutAct_9fa48("11") ? heightInCM >= 0 : stryMutAct_9fa48("10") ? heightInCM <= 0 : stryMutAct_9fa48("9") ? false : (stryCov_9fa48("9", "10", "11"), heightInCM < 0)))) || isNaN(heightInCM))) {
      if (stryMutAct_9fa48("12")) {
        {}
      } else {
        stryCov_9fa48("12");
        return stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), "Please provide a valid height");
      }
    } else if (stryMutAct_9fa48("16") ? (weightInKG === '' || weightInKG < 0) && isNaN(weightInKG) : stryMutAct_9fa48("15") ? false : stryMutAct_9fa48("14") ? true : (stryCov_9fa48("14", "15", "16"), (stryMutAct_9fa48("18") ? weightInKG === '' && weightInKG < 0 : stryMutAct_9fa48("17") ? false : (stryCov_9fa48("17", "18"), (stryMutAct_9fa48("20") ? weightInKG !== '' : stryMutAct_9fa48("19") ? false : (stryCov_9fa48("19", "20"), weightInKG === (stryMutAct_9fa48("21") ? "Stryker was here!" : (stryCov_9fa48("21"), '')))) || (stryMutAct_9fa48("24") ? weightInKG >= 0 : stryMutAct_9fa48("23") ? weightInKG <= 0 : stryMutAct_9fa48("22") ? false : (stryCov_9fa48("22", "23", "24"), weightInKG < 0)))) || isNaN(weightInKG))) {
      if (stryMutAct_9fa48("25")) {
        {}
      } else {
        stryCov_9fa48("25");
        return stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), "Please provide a valid weight");
      }
    } else {
      if (stryMutAct_9fa48("27")) {
        {}
      } else {
        stryCov_9fa48("27");
        return (stryMutAct_9fa48("28") ? weightInKG * ((stryMutAct_9fa48("30") ? heightInCM / heightInCM : (stryCov_9fa48("30"), heightInCM * heightInCM)) / 10000) : (stryCov_9fa48("28"), weightInKG / (stryMutAct_9fa48("29") ? heightInCM * heightInCM * 10000 : (stryCov_9fa48("29"), (stryMutAct_9fa48("30") ? heightInCM / heightInCM : (stryCov_9fa48("30"), heightInCM * heightInCM)) / 10000)))).toFixed(2);
      }
    }
  }
}

console.log(calculateBMI(180, 60));
module.exports = stryMutAct_9fa48("31") ? {} : (stryCov_9fa48("31"), {
  calculateBMI
});