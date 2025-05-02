import http from 'k6/http';
import {sleep, check} from 'k6';


export let options = {
    // duration: '30s',  //we want to test our api for 30sec
    // vus: 50


    stages: [
        {duration: '30s', target: 50}, //simulate ramp-up of traffic from 1 to 50 users over 30 seconds
        {duration: '1m', target: 100}, // stay at 100 users for 1 minute
        {duration: '30s', target: 0} // ramp down to 0 users
    ]
}


export default function() {
    let res = http.get('http://localhost:3000/api/v1/flights');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}