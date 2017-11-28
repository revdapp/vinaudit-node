/* ============================================================
 * vinaudit.node
 * https://github.com/revdapp/vinaudit-node
 *
 * ============================================================
 * Copyright 2014-2017, Bruno Casanova
 * Released under the MIT License
 * ============================================================ */

import Dotenv from 'dotenv';
const dotenv = Dotenv.config();
import VinAudit from '../src';

const user = process.env.API_USER;
const pass = process.env.API_PASS;
const key = process.env.API_KEY;
const mode = process.env.API_MODE;

const vinaudit = new VinAudit(user,pass,key,mode);

const id = 'TEST_ID';

vinaudit.HistoryReport
  .report( id )
  .then(res => console.log(res))
  .catch(err => console.log(err));