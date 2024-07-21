async function fetchinDataService(urlFetchService){
    const response =await (await fetch(urlFetchService)).json();
    return response;
}

export default fetchinDataService;