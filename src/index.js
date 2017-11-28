/* ============================================================
 * vinaudit.node
 * https://github.com/revdapp/vinaudit-node
 *
 * ============================================================
 * Copyright 2014-2017, Bruno Casanova
 * Released under the MIT License
 * ============================================================ */

import historyReport from './historyReport';

class VinAudit {
  constructor(API_USER, API_PASS, API_KEY, API_MODE = '') {
    if (API_KEY === null || API_KEY === undefined){
      console.error('Invalid or missing API_KEY');
      return false;
    }
    else if (API_USER === null || API_USER === undefined) {
      console.error('Invalid or missing API_USER');
      return false;
    }
    else if (API_PASS === null || API_PASS === undefined) {
      console.error('Invalid or missing API_PASS');
      return false;
    }

    this.options = {
      baseUrl: 'https://api.vinaudit.com',
      format: 'json',
      apiKey: API_KEY,
      apiUser: API_USER,
      apiPass: API_PASS,
      apiMode: API_MODE,
      verbose: false
    };
    this.HistoryReport = historyReport(this.options);
  }

}

module.exports = VinAudit;
