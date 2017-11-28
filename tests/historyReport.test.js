import chai, { expect } from 'chai';
import Dotenv from 'dotenv';
import VinAudit from '../src';

const dotenv = Dotenv.config();
const user = process.env.API_USER;
const pass = process.env.API_PASS;
const key = process.env.API_KEY;
const mode = process.env.API_MODE;

const vinaudit = new VinAudit(user, pass, key, mode);

chai.config.includeStack = true;
// process.env.SILENT_ERRORS = true; //comment this to view errors

describe('## Vehicle History Report', () => {
  // Make sure that you are testing with a vin with 4 numbers only to not pay
  let vin = '6211';

  // Default test id
  let id = 'TESTID';

  describe( '# QUERY', () => {

    it('should query a vin', async () => {
      try{
        const res = await vinaudit.HistoryReport
        .query(vin)

        expect(res.success).to.be.true;
        expect(res).to.have.property('id');

        return res;
      }catch( err ){
        if (err) {
          console.log(err);
        }
        expect(err).to.be.null;
      }

    });

  });

  describe( '# ORDER', () => {
    it('should order a vin report', async () => {

      try{
        const res = await vinaudit.HistoryReport
        .order(id, vin)

        expect(res.success).to.be.true;

        return res;
      }catch( err ){
        if (err) {
          console.log(err);
        }
        expect(err).to.be.null;
      }

    });
  });

  describe( '# GENERATE', () => {
    it('should generate a vin report', async () => {

      try{
        const res = await vinaudit.HistoryReport
        .generate( id )

        expect(res.success).to.be.true;
        expect(res).to.have.property('details');

        return res;
      }catch( err ){
        if (err) {
          console.log(err);
        }
        expect(err).to.be.null;
      }

    });
  });

  describe( '# REPORT', () => {

    it('should retrieve raw data for a vin report', async () => {

      try{
        const res = await vinaudit.HistoryReport
        .report( id )

        expect(res.success).to.be.true;
        expect(res).to.have.property('id');
        expect(res).to.have.own.property('jsi');
        expect(res.jsi).to.be.an('array');

        return res;
      }catch( err ){
        if (err) {
          console.log(err);
        }
        expect(err).to.be.null;
      }

    });

  });

});
