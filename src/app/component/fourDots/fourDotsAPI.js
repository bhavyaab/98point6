export async function robotNextTurn(moves){
    const url = 'https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves='
    var dataAddedUrl = url + JSON.stringify(moves || []);
    
    const response = await fetch(dataAddedUrl);
    const nextTurnRecieved = await response.json();
    return nextTurnRecieved;
  }