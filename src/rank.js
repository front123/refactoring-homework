const { CHINA, EASTINDIES } = require('./constant')
const places = [CHINA, EASTINDIES];

function voyageRisk(voyage) {
  let result = 1;
  let voyageLength = voyage.length;
  result += voyageLength > 8 ? voyageLength - 6 : voyageLength > 4 ? 2 : 0;
  result += places.includes(voyage.zone) ? 4 : 0;
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

function compare(vpf, vr, chr) {
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return compare(vpf, vr, chr);
}

module.exports = {
  rating
};

