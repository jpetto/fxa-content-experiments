'use strict';

module.exports = {
  name: 'Has Firefox for iOS launched',
  endDate: '2015-06-02',
  independentVariables: ['fxIos'],
  eligibilityFunction: function() {},
  groupingFunction: function() {},
  conclusion: {
    fxIos: {
      launched: true,
      appStoreLinkDirect: 'itms://itunes.apple.com/us/app/sync-for-firefox/id468995230',
      appStoreLinkWeb: 'https://itunes.apple.com/us/app/sync-for-firefox/id468995230'
      // links above are not final
    }
  }
};
