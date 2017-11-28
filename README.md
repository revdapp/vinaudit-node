vinaudit-node
=========

**Note: This client is in alpha stage**

vinaudit-node is an unofficial, promise-based client for interacting with the [VinAudit](https://vinaudit.com/) platform.

Documentation for the VinAudit API can be found [here](http://www.vinaudit.com/api-documentation-extended/).

### Getting started


```bash
yarn add vinaudit-node
```

Create a new account with VinAudit and get your `API_user`, `API_pass` and `API_key` from you account's settings.
The ```API_MODE``` is optional, if it is empty, the default is **production** mode, if you only want to test, choose the **test** mode.

```javascript
import VinAudit from 'vinaudit-node';
const vinaudit = new VinAudit(API_USER, API_PASS, API_KEY, API_MODE);
```

Vehicle History Report
======================

List of services available in the Vehicle History Report API

Query
-----------

Returns a query of a vin.

```javascript
  vinaudit.historyReport
    .query( vin )
    .then(res => console.log(res))
    .catch(err => console.log(err));
```
Response ex.
```
{ “id”:”7742103371467″, “vin”:”1NXBR32E85Z505904″,”attributes”:{“VIN”:”1NXBR32E85Z505904″,”Make”:”TOYOTA”,”Model”:”COROLLA CE”,”Style”:”4 DOOR SEDAN”,”Engine”:”1.8L L4 DOHC 16V”,”Made In”:”JAPAN”,”Type”:”PASSENGER CAR”},”success”:true,”error”:”” }
```

Order
-----------

To order a vin report

```javascript
  vinaudit.historyReport
    .order( id, vin )
    .then(res => console.log(res))
    .catch(err => console.log(err));
```
Response ex.
```
{ "vin":"1VXBR12EXCP901213","success":true,"charged":true,"error":"" };

```

Generate
-----------

To generate a vin report

```javascript
  vinaudit.historyReport
    .generate( id )
    .then(res => console.log(res))
    .catch(err => console.log(err));
```
Response ex.
```
{ "vin":"1VXBR12EXCP901213","success":false,"error":"not_ready","details":"initialized" }
```
or if it is already initialized.
```
{"vin":"1VXBR12EXCP901213","success":true,"error":"","details":""}
```

Reports
-----------

Returns raw data for a vin report

```javascript
  vinaudit.historyReport
    .report( id )
    .then(res => console.log(res))
    .catch(err => console.log(err));
```
Response ex.
```
{
  "success":true,"error":"","id":"31919508431","vin":"1VXBR12EXCP901213","date":"2011-12-21 21:12:15 PST","specs":{"Vin":"1VXBR12EXCP901213","Year":"2005","Make":"Toyota","Model":"Corolla","Trim":"CE","Engine":"1.8L L4 DOHC 16V","Style":"SEDAN 4-DR","Made In":"UNITED STATES","Steering Type":"R&P","Anti-Brake System":"4-Wheel ABS","Tank Size":"13.20 gallon","Overall Height":"58.50 in.","Overall Length":"178.30 in.","Overall Width":"66.90 in.","Standard Seating":"5","Optional Seating":"No data","Highway Mileage":"38 - 41 miles\/gallon","City Mileage":"30 - 32 miles\/gallon"},"jsi":[{'date': '10/25/2007','recordType':'Junk And Salvage','branderName':'Insurance Salvage, Inc.','branderCity':'Milwalkee','branderState':'WI','branderEmail':'','branderPhone': '5556478921','vehicleDisposition':'Sold','intendedForExport':'No'}],"checks":[ {'brandCode': '11', 'branderType': 'State', 'branderName': 'Ohio', 'disposition': 'Salvage', 'date': '08/02/2005' }, {'brandCode': '09', 'branderType': 'State', 'branderCode': '', 'branderName': 'Ohio', 'disposition': 'Rebuilt', 'date': '08/19/2005' } ],"titles": [ {'date': '08/31/2011', 'state':'WA', 'vin':'', 'meter':'59,396', 'meterUnit':'M', 'current': true}, {'date': '02/23/2008', 'state':'WI', 'vin':'1VXBR12EXCP901213', 'meter':'37,398', 'meterUnit':'M', 'current': false}, {'date': '11/04/2007', 'state':'WI', 'vin':'1VXBR12EXCP901213', 'meter':'12,269', 'meterUnit':'M', 'current': false}, {'date': '08/19/2005', 'state':'OH', 'vin':'1VXBR12EXCP153842', 'meter':'3,220', 'meterUnit':'M', 'current': false}, {'date': '06/22/2005', 'state':'OH', 'vin':'1VXBR12EXCP153842', 'meter':'', 'meterUnit':'M', 'current': false} ]
}
```

To do
-----------

* Retrieve a PDF for a VIN Report - [ ]
* Tests to Retrieve a PDF for a VIN Report - [ ]

Testing & Development
-----------

* Clone repository

```bash
  git clone https://github.com/revdapp/vinaudit-node.git
```

* Install dependencies

```bash
  yarn install
```

* Setup API Key

- copy `.env.example` into `.env` and input your API credentials.

* Run test set

```bash
  yarn run test
```

Develop and keep tests green.

License
-----------

This Library is licensed under the MIT license.
