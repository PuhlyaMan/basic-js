module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let dreamTeam = '';
    members.forEach(item => {
      if (typeof item === 'string') {
        dreamTeam = `${dreamTeam}${item.trim()[0].toUpperCase()}`;
      };
    });
    return dreamTeam.split('').sort().join('');
  }
  return false;
};