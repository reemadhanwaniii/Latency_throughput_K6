# what is stages in k6?

-- Stages is step in our load test
        example : {duration : '10s', target: 10}
        in 10 sec let say we want 10 user , so in this way we prepare gradual stages.


## Vus means virtual user

A virtual user represent concurrent user that interacts with the application during the load test.
each vu executesthe predefined test script. it is the integer value and take 1 as default value. 


![alt text](image.png)



## p(90), p(95)  what does it mean?

p(95) means 95% of request , if we say p(95) is less than 2000ms then 95% of our request should be completed in less than 2000ms means 2s

'p 95 in api -- google it'

![alt text](image-1.png)

http_req_duration : avg is our average latency, P(90) 90% of request having latency 5.08 ms or less


## throughput : total no request process/ given interval of time

http_reqs/Vus


![alt text](image-2.png)

Stress testing we gradually increase load then decrease, 90% of request now less than 1.5ms because there is not consistent load

# Spike Testing 
![alt text](image-3.png)

## Thresholds in K6

Threshold is like pass or fail criteria, let say we have dedicated ci/cd pipeline job which is doing performance testing for us, then how do we know whether our application  is still performing based on the old metrics or not, so we can define thresholds i.e we can define pass fail criteria that the no of fail request should be less than 1%


![alt text](image-4.png)

We define criteria and we failed one criteria 


# how to improve latency and throughput : 

 - network latency : time particular packet takes to travel in network from a source to destination.let say ur user are sitting here in india, and the servers that we have we deployed in us there is huge network latency that can come up because of cross continent call. 

 - application latency : this is the delay at application server means business logic layer(backend server) may be you are not querying database efficiently.

 - Read/write latency : writting , reading from disk 

 `https://www.cloudflare.com/en-in/learning/performance/more/website-performance-conversion-rates/`

## how to improve
 Geographical load balancing 
 Scaling (horizontal and vertical)
 least connection strategy 
 CDN's 
 minimizing network hops and cross continental call
 database level (sharding, caching)
 change communication protocol 



## Load Balancer types : 


 - Application load balancer (L7 -> ELB/ALB )  works at 7 layer of osi model
 - Network load balancer (L4 - >AWs-NLB)  works at 4 layer 
 