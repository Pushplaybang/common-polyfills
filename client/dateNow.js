/*
  IE8 Date Now PolyFill
  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 */
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

