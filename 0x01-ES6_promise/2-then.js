export default function handleResponseFromAPI(promise){
    const cc = new Promise((resolve, reject) => {

        promise.then((success)=>{
            console.log("Got a response from the API")
            return resolve({ status: 200, body: success });
        }) .catch((error)=>{
            console.log("Got a response from the API")
            return new Error()
        })
      });
}