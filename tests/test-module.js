'use strict';

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
  
  beforeEach(function(){
    this.get = sinon.stub(https,'get');
  });

  afterEach(function(){
    https.get.restore();
  });


  it('should return an empty array when no attendees has checked into the event' , function(){
    
      const expected = {
                "results": []
      };
      const response = new PassThrough();
	  response.write(JSON.stringify(expected));
	  response.end();
      
      
	  const get = new PassThrough();
	  this.get.callsArgWith(1, response)
	            .returns(get);
     
//    this.timeout(10000); //adjust this as per your internet bandwidth speed. [Should work with > 110 Kbps]
      return meetup_api('<Add your acesss token here>', '<Meetup Event id with 0 checkins>').should.eventually.have.length(0) ;
  });
  it('should return the list of attendees that checked into the event', function(){

    const expected = {
            "results": [
                {
                   "created": 1471323854000,
                    "member_photo": {
                        "highres_link": "http://photos3.meetupstatic.com/photos/member/7/d/2/a/highres_136412042.jpeg",
                        "photo_id": 136412042,
                        "photo_link": "http://photos3.meetupstatic.com/photos/member/7/d/2/a/member_136412042.jpeg",
                        "thumb_link": "http://photos3.meetupstatic.com/photos/member/7/d/2/a/thumb_136412042.jpeg"
                    },
                    "rsvp_id": 1624967216,
                    "mtime": 1471323854000,
                    "response": "yes",
                    "tallies": {
                        "no": 1,
                        "waitlist": 0,
                        "maybe": 0,
                        "yes": 4
                    },
                    "guests": 0,
                    "member": {
                        "member_id": 103431362,
                        "name": "Rambo"
                    },
                    "event": {
                        "name": "August 2016 #mumtechup - Mobility",
                        "id": "233366829",
                        "time": 1471689000000,
                        "event_url": "http://www.meetup.com/Mumbai-Technology-Meetup/events/233366829/"
                    },
                    "attendance_status": "noshow",
                    "group": {
                        "join_mode": "open",
                        "created": 1472147974352,
                        "group_lon": 72.81999969482422,
                        "id": 13138832,
                        "urlname": "Mumbai-Technology-Meetup",
                        "group_lat": 18.959999084472656
                    }
                },
                {
                    
                    "created": 1471261964000,
                    "member_photo": {
                        "highres_link": "http://photos1.meetupstatic.com/photos/member/7/4/9/2/highres_107069842.jpeg",
                        "photo_id": 107069842,
                        "photo_link": "http://photos1.meetupstatic.com/photos/member/7/4/9/2/member_107069842.jpeg",
                        "thumb_link": "http://photos1.meetupstatic.com/photos/member/7/4/9/2/thumb_107069842.jpeg"
                    },
                    "rsvp_id": 1624817747,
                    "mtime": 1471261964000,
                    "response": "yes",
                    "tallies": {
                        "no": 1,
                        "waitlist": 0,
                        "maybe": 0,
                        "yes": 4
                    },
                    "guests": 0,
                    "member": {
                        "member_id": 26318352,
                        "name": "Augustine Correa"
                    },
                    "event": {
                        "name": "August 2016 #mumtechup - Mobility",
                        "id": "233366829",
                        "time": 1471689000000,
                        "event_url": "http://www.meetup.com/Mumbai-Technology-Meetup/events/233366829/"
                    },
                    "attendance_status": "attended",
                    "group": {
                        "join_mode": "open",
                        "created": 1472147974352,
                        "group_lon": 72.81999969482422,
                        "id": 13138832,
                        "urlname": "Mumbai-Technology-Meetup",
                        "group_lat": 18.959999084472656
                    }
                },
                {
                    "created": 1471363673000,
                    "response": "no",
                    "member_photo": {
                        "highres_link": "http://photos4.meetupstatic.com/photos/member/3/2/4/5/highres_257832869.jpeg",
                        "photo_id": 257832869,
                        "photo_link": "http://photos4.meetupstatic.com/photos/member/3/2/4/5/member_257832869.jpeg",
                        "thumb_link": "http://photos2.meetupstatic.com/photos/member/3/2/4/5/thumb_257832869.jpeg"
                    },
                    "tallies": {
                        "no": 1,
                        "waitlist": 0,
                        "maybe": 0,
                        "yes": 4
                    },
                    "guests": 0,
                    "member": {
                        "member_id": 21905097,
                        "name": "Jhakaas"
                    },
                    "rsvp_id": 1625028198,
                    "mtime": 1471363673000,
                    "event": {
                        "name": "August 2016 #mumtechup - Mobility",
                        "id": "233366829",
                        "time": 1471689000000,
                        "event_url": "http://www.meetup.com/Mumbai-Technology-Meetup/events/233366829/"
                    },
                    "group": {
                        "join_mode": "open",
                        "created": 1472147974352,
                        "group_lon": 72.81999969482422,
                        "id": 13138832,
                        "urlname": "Mumbai-Technology-Meetup",
                        "group_lat": 18.959999084472656
                    }
                },
                {
                    "created": 1471368244000,
                    "member_photo": {
                        "highres_link": "http://photos3.meetupstatic.com/photos/member/1/5/7/1/highres_253565489.jpeg",
                        "photo_id": 253565489,
                        "photo_link": "http://photos3.meetupstatic.com/photos/member/1/5/7/1/member_253565489.jpeg",
                        "thumb_link": "http://photos3.meetupstatic.com/photos/member/1/5/7/1/thumb_253565489.jpeg"
                    },
                    "rsvp_id": 1625039776,
                    "mtime": 1471368244000,
                    "response": "yes",
                    "tallies": {
                        "no": 1,
                        "waitlist": 0,
                        "maybe": 0,
                        "yes": 4
                    },
                    "guests": 0,
                    "member": {
                        "member_id": 109154970,
                        "name": "L Singh"
                    },
                    "event": {
                        "name": "August 2016 #mumtechup - Mobility",
                        "id": "233366829",
                        "time": 1471689000000,
                        "event_url": "http://www.meetup.com/Mumbai-Technology-Meetup/events/233366829/"
                    },
                    "attendance_status": "attended",
                    "group": {
                        "join_mode": "open",
                        "created": 1472147974352,
                        "group_lon": 72.81999969482422,
                        "id": 13138832,
                        "urlname": "Mumbai-Technology-Meetup",
                        "group_lat": 18.959999084472656
                    }
                },
                {
                   
                    "created": 1471320844000,
                    "member_photo": {
                        "highres_link": "http://photos3.meetupstatic.com/photos/member/a/7/f/a/highres_257383002.jpeg",
                        "photo_id": 257383002,
                        "photo_link": "http://photos1.meetupstatic.com/photos/member/a/7/f/a/member_257383002.jpeg",
                        "thumb_link": "http://photos3.meetupstatic.com/photos/member/a/7/f/a/thumb_257383002.jpeg"
                    },
                    "rsvp_id": 1624962742,
                    "mtime": 1471320844000,
                    "response": "yes",
                    "tallies": {
                        "no": 1,
                        "waitlist": 0,
                        "maybe": 0,
                        "yes": 4
                    },
                    "guests": 0,
                    "member": {
                        "member_id": 206757186,
                        "name": "Tech"
                    },
                    "event": {
                        "name": "August 2016 #mumtechup - Mobility",
                        "id": "233366829",
                        "time": 1471689000000,
                        "event_url": "http://www.meetup.com/Mumbai-Technology-Meetup/events/233366829/"
                    },
                    "attendance_status": "noshow",
                    "group": {
                        "join_mode": "open",
                        "created": 1472147974352,
                        "group_lon": 72.81999969482422,
                        "id": 13138832,
                        "urlname": "Mumbai-Technology-Meetup",
                        "group_lat": 18.959999084472656
                    }
                }
            ],
            "meta": {
                "next": "",
                "method": "RSVPs v2",
                "total_count": 5,
                "link": "https://api.meetup.com/2/rsvps",
                "count": 5,
                "description": "Query for Event RSVPs by event",
                "lon": "",
                "title": "Meetup RSVPs v2",
                "url": "https://api.meetup.com/2/rsvps?offset=0&format=json&access_token=acffcc7a3333fcdabe6b312174cc3366&event_id=233366829&page=800&fields=attendance_status&order=event&desc=false",
                "id": "",
                "updated": 1471368244000,
                "lat": ""
            }
        }
    const response = new PassThrough();
	    response.write(JSON.stringify(expected));
	    response.end();
      
 
	const get = new PassThrough();
 
    this.get.callsArgWith(1, response)
	            .returns(get);


    this.timeout(10000); //adjust this as per your internet bandwidth speed. [Should work with > 110 Kbps]
    return meetup_api('<Add your acesss token here>', '<Meetup Event id with known no. of checkins>').should.eventually.have.length(2) ;

  });
  it('should return an error if it cannot connect to meetup.com', function(){
    var connect_error = new Error("getaddrinfo ENOTFOUND");
    this.get.throws(connect_error);
    
       
    
    return meetup_api('dee89d2da457730bd93f95bbe3e3de6f', '229152961').should.be.rejectedWith("getaddrinfo ENOTFOUND") ;
    
  });
  it('should return an error if wrong input was entered as parameter', function(){
        this.timeout(8000);
        
        this.get.yields({statusCode:401});  

        return meetup_api('dee89d2da457730bd93f95bbe3e3de6f', '229152961').should.be.rejectedWith("401") ;

  });
});