'use strict';

/**
 * Get attendees that are checked-in for an event
 * @param {string} accessToken
 * @param {number} eventID
 * @return {[string]} 
 */
const http = require('http');
const Promise = require('bluebird');
const debug = require('debug')('meetup-module-checkin');
const callMeetupAPI = require('../lib/get-content.js');
const host = 'https://api.meetup.com';
                 
debug('IN initial declaration');
             


module.exports = function(accessToken, eventID) {
        debug('in the callback function');
        const path = `/2/rsvps?access_token=${accessToken}&event_id=${eventID}&fields=attendance_status`;


        var responseString = '';
        debug(`Url is ${host + path}`);
                   
        return Promise.try(() => 
        callMeetupAPI(host+path))
                .then(function(result){
                        //var obj = { 'attendees' : [] };
                        debug('result payload ' + result );
                        var payload = JSON.parse(result);
                        return payload.results;
                })
                .then(attendees => {
                        debug('Attendees received in filter ' + attendees);
                        if(attendees) {
                                return attendees.filter((attendee) => {
                                        return attendee.attendance_status === 'attended';
                                });
                        }  
                                        
                })
                .catch(function(error){
                        throw new Error(error);
                });
};