const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    const value = parseFloat(sampleActivity);
    if (value > 0 && value <= MODERN_ACTIVITY)
      return Math.ceil(
        Math.log(MODERN_ACTIVITY / value) / (0.693 / HALF_LIFE_PERIOD)
      );
  }
  return false;
};
