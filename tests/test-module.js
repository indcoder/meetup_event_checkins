let meetup_api = require('../src/index.js');

describe('meetup_event_checkins', function() {
  it('should return an empty array when no attendees has checked into the event' , function(done){
      done();
  });
  it('should return the list of attendees that checked into the event');
  it('should return an error if it cannot connect to meetup.com');
  it('should return an error if wrong input was entered as parameter');
});