/* eslint-disable */
Package.describe({
  name: 'pushplaybang:common-polyfills',
  version: '0.0.1',
  summary: 'standard JS browser PolyFills',
  git: 'https://github.com/Pushplaybang/common-polyfills',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('es5-shim');
  api.use('ecmascript');
  api.addFiles('client/classlist.js', 'client');
  api.addFiles('client/dateNow.js', 'client');
  api.addFiles('client/remove.js', 'client');
  api.addFiles('client/addEventListener.js', 'client');
  api.addFiles('client/requestAnimationFrame.js', 'client');
});

