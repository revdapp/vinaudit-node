/* ============================================================
 * vinaudit.node
 * https://github.com/revdapp/vinaudit-node
 *
 * ============================================================
 * Copyright 2014-2017, Bruno Casanova
 * Released under the MIT License
 * ============================================================ */

import Joi from 'joi';
import axios from 'axios';
import handleError from './handleError';

const historyReport = options => {
  return {
    query: async (vin) => {
      if (!vin || vin === undefined || vin === null) {
        throw new Error('Query Vin - Missing or invalid Vin');
      }

      let url = [];
      url.push( `${options.baseUrl}/query.php?key=${options.apiKey}&vin=${vin}` );
      url.push( `&format=${options.format}&mode=${options.apiMode}`);

      try {
        const res = await axios({
          method: 'get',
          url: url.join('')
        });

        return res.data;
      } catch (error) {
        throw { code: error.response.status, data: error.response.data };
      }

    },
    order: async (id, vin) => {
      if (!id || id === undefined || id === null) {
        throw new Error('Order Vin Report - Missing or invalid Id');
      }

      if (!vin || vin === undefined || vin === null) {
        throw new Error('Order Vin Report - Missing or invalid Vin');
      }

      let url = [];
      url.push( `${options.baseUrl}/order.php` );
      url.push( `?user=${options.apiUser}&pass=${options.apiPass}&key=${options.apiKey}`);
      url.push( `&vin=${vin}&id=${id}&format=${options.format}&mode=${options.apiMode}`);

      try {
        const res = await axios({
          method: 'post',
          url: url.join('')
        });

        return res.data;
      } catch (error) {
        throw { code: error.response.status, data: error.response.data };
      }
    },
    generate: async (id) => {
      if (!id || id === undefined || id === null) {
        throw new Error('Generate Vin Report - Missing or invalid id');
      }

      let url = [];
      url.push( `${options.baseUrl}/generate.php` );
      url.push( `?id=${id}&key=${options.apiKey}`);
      url.push( `&format=${options.format}&mode=${options.apiMode}`);

      try {
        const res = await axios({
          method: 'post',
          url: url.join('')
        });

        return res.data;
      } catch (error) {
        throw { code: error.response.status, data: error.response.data };
      }
    },
    report: async (id) => {
      if (!id || id === undefined || id === null) {
        throw new Error('Report Raw Data - Missing or invalid Id');
      }

      let url = [];
      url.push( `${options.baseUrl}/report.php` );
      url.push( `?id=${id}&format=${options.format}&mode=${options.apiMode}`);

      try {
        const res = await axios({
          method: 'get',
          url: url.join('')
        });

        return res.data;
      } catch (error) {
        throw { code: error.response.status, data: error.response.data };
      }

    }

  };
};

export default historyReport;
