const { CHINA, EASTINDIES } = require('./constant')
const zones = [CHINA, EASTINDIES];

function voyageRisk(voyage) {
  let result = 1;
  let voyageLength = voyage.length;
  result += voyageLength > 8 ? voyageLength - 6 : voyageLength > 4 ? 2 : 0;
  result += zones.includes(voyage.zone) ? 4 : 0;
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => isChinaZone(v.zone));
}

function captainHistoryRisk(voyage, history) {
  let result = history.length < 5 ? 5 : 1;
  result += history.filter(v => v.profit < 0).length;
  result -= isChinaZone(voyage.zone) && hasChina(history) ? 2 : 0;
  return Math.max(result, 0);
}

function isChinaZone(zone) {
  return zone === CHINA;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (isChinaZone(voyage.zone)) {
    result += 1;
  }
  if (voyage.zone === EASTINDIES) {
    result += 1;
  }
  if (isChinaZone(voyage.zone) && hasChina(history)) {
    result += history.length > 10 ? 4 : 3;
    result += voyage.length > 18 ? 0 : voyage.length > 12 ? 1 : 0;
  }
  else {
    result += history.length > 8 ? 1 : 0;
    result -= voyage.length > 14 ? 1 : 0;
  }
  return result;
}

function compare(voyageProfitFactorResult, voyageRiskResult, captainHistoryRiskResult) {
  if (voyageProfitFactorResult * 3 > (voyageRiskResult + captainHistoryRiskResult * 2)) {
    return 'A';
  }
  return 'B';
}

function rating(voyage, history) {
  const voyageProfitFactorResult = voyageProfitFactor(voyage, history);
  const voyageRiskResult = voyageRisk(voyage);
  const captainHistoryRiskResult = captainHistoryRisk(voyage, history);
  return compare(voyageProfitFactorResult, voyageRiskResult, captainHistoryRiskResult);
}

module.exports = {
  rating
};

