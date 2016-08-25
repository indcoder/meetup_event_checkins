let meetup_api = require('../src/index.js');
let sinon = require('sinon');
let PassThrough = require('stream').PassThrough;
let https = require('https');
let chai = require('chai');
let should = chai.should();
let chaiAsPromised = require("chai-as-promised");


chai.use(chaiAsPromised);
chai.config.includeStack = true;

describe('meetup_event_checkins in online mode', function() {
  /*

  beforeEach(function(){
    this.get = sinon.stub(https,'get');
  });

  afterEach(function(){
    https.get.restore();
  });

*/
  it('should return an empty array when no attendees has checked into the event' , function(){
  /*  
      this.timeout(000);
      const expected = {'attendees' : []};
      const response = new PassThrough();
	    response.write(JSON.stringify(expected));
	    response.end();
      
 
	    const get = new PassThrough();
 
	    this.get.callsArgWith(1, response)
	            .returns(get);
    */
 //     result.should.eventually.be.empty;
 /*
      meetup_api('dummy_token', 'non-event')
        .then(function(result){
            console.log("result is " + result.attendees);
            console.log("expected is " + expected);
            result.should.have.property('attendees').with.length(0);
            done(); 
        });
*/    
      this.timeout(10000); //adjust this as per your internet bandwidth speed. [Should work with > 110 Kbps]
      return meetup_api('<Add your acesss token here>', '<Meetup Event id with 0 checkins>').should.eventually.have.length(0) ;
  });
  it('should return the list of attendees that checked into the event', function(){

    this.timeout(10000); //adjust this as per your internet bandwidth speed. [Should work with > 110 Kbps]
    return meetup_api('<Add your acesss token here>', '<Meetup Event id with known no. of checkins>').should.eventually.have.length('known no of checkins') ;

  });
  it('should return an error if it cannot connect to meetup.com', function(){
    return meetup_api('dee89d2da457730bd93f95bbe3e3de6f', '229152961').should.be.rejectedWith("getaddrinfo ENOTFOUND") ;
  }  );
  it('should return an error if wrong input was entered as parameter', function(){
          this.timeout(8000);
          return meetup_api('dee89d2da457730bd93f95bbe3e3de6f', '229152961').should.be.rejectedWith("401") ;

  });
});