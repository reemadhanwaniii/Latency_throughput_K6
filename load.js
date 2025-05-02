import http from 'k6/http';
import {sleep, check} from 'k6';


export let options = {
    duration: '30s',  //we want to test our api for 30sec
    vus: 20
}


export default function() {
    let res = http.get('http://localhost:3000/api/v1/flights');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}