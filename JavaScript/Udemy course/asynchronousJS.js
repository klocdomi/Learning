document.getElementById("body").innerHTML = "<pre><code>" + `
-----------------------------------------------------------------------------------------

// 1. Async JS, AJAX and APIs

img.src attribute is async, loading images is non blocking

AJAX - Asynchronous JavaScript And XML - allows to communicate with remote web servers in an asynchronous way. Ajax call - request data from web servers dynamically
Nowadays XML is replaced with JSON

                request(get/post/etc.)
CLIENT  ----------------------------------> WEB SERVER
        <---------------------------------
                    response


https://github.com/public-apis/public-apis - list of free public apis, use ones with CORS (cross origin resouce sharing - allows access for 3rd party apis) true or unknown

AJAX oldschool, promises newschool

AJAX:

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/poland');
request.send();

request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
});

// 2. Web server: requests & responses

DNS lookup - convert domain name address to web server address (e.g google.com => 182.23.56.75:443)
TCP - transmisson control protocol
IP - internet protocol
HTTP - hyper text transfer protocol

https://paweladamus.com/page/animals?showGoats=true

  ||            ||              || 
protocol        hostname        resource

 DNS
  || (dns lookup)
  ||
               TCP/IP socket connection
CLIENT  ----------------------------------> WEB SERVER
        <---------------------------------
                    response

// 3. Promises - FETCH API

Callback hell = next request depend on earlier requests data. ES6 feature promises helps to resolve the issue

const request = fetch('https://restcountries.eu/rest/v2/name/poland');
console.log(request); // promise

Promise - an object that is used as a placeholder for the future result of an asynchronous operation, container for the future value
With promises we no longer need to rely on events and callbacks passed into async functions to handle async results.
Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations - escaping callback hell

Promise lifecycle:

(before value is available)          async task                        (async task has finished)
PENDING =============================================================>  SETTLED
                                                                           ||
                                                                FULFILLED OR REJECTED
                                                                (success)       (error)



Consuming promises:




-----------------------------------------------------------------------------------------
` + "</code></pre>";


//Practice:



