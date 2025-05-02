import http from 'k6/http';
import {sleep, check} from 'k6';


// export let options = {
//     // duration: '30s',  //we want to test our api for 30sec
//     // vus: 50


//     stages: [
//         {duration: '30s', target: 50}, //simulate ramp-up of traffic from 1 to 50 users over 30 seconds
//         {duration: '1m', target: 100}, // stay at 100 users for 1 minute
//         {duration: '30s', target: 0} // ramp down to 0 users
//     ]
// }

export let options = {
    stages: [
        { duration: '4s', target: 1000}, 
        { duration: '20s', target: 1000},
        { duration: '30s', target: 0}
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<2'], // 95% of requests should be below 2ms
      },
}


export default function() {
    let res = http.get('http://localhost:3000/api/v1/flights');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}