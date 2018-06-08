function search(query, cb) {
    //Returns a Promise
    let urlDuck = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";
    //let urlBing = "https://api.cognitive.microsoft.com/bing/v7.0/search?q=" + query;

    //let bingSubscriptionKey = 'f76a7d400cc6474c947df45beb10b1e9';
    //let combinedData = {};

    //Promise 1
    // let searchBing = fetch(urlBing, {
    //                     accept: 'application/json',
    //                     headers : {
    //                     'Ocp-Apim-Subscription-Key' : bingSubscriptionKey,
    //                     }
    //                 })
    //                 .then(checkStatus)
    //                 .then(parseJSON);

    //Promise 2
    let searchDuck = fetch(urlDuck, {
                        accept: 'application/json',
                    })
                    .then(checkStatus)
                    .then(parseJSON).then(cb);

    //Once both promises have succeeded merge them into a single object
    //For easier manupulation of the data, then execute the callback
    // Promise.all([searchBing, searchDuck]).then(function(data){
    //     combinedData.bing = data[0];
    //     combinedData.duck = data[1];
    //     return combinedData;
    // }).then(cb);
}

//Checking for bad statuses
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
}

function parseJSON(response){
    return response.json();
}

const GetData = {search};
export default GetData;