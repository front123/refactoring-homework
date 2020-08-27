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
  return history.some(v => CHINA === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = history.length < 5 ? 5 : 1;
  result += history.filter(v => v.profit < 0).length;
  result -= voyage.zone === CHINA && hasChina(history) ? 2 : 0;
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === CHINA) {
    result += 1;
  }
  if (voyage.zone === EASTINDIES) {
    result += 1;
  }
  if (voyage.zone === CHINA && hasChina(history)) {
    result += 3;
    if (history.length > 10) {
      result += 1;
    }
    if (voyage.length > 12) {
      result += 1;
    }
    if (voyage.length > 18) {
      result -= 1;
    }
  }
  else {
    if (history.length > 8) {
      result += 1;
    }
    if (voyage.length > 14) {
      result -= 1;
    }
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

