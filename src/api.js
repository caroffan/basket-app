const url = 'https://api-nba-v1.p.rapidapi.com/'
const headers = {
    'X-RapidAPI-Key': 'a1e163a699msh8d8fbfd00076e7fp18810ejsnf2aa9a3715dc',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
}
export const standingsEast = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/standings',
    params: {league: 'standard', season: '2022', conference: 'east'},
    headers: headers
}
export const standingsWest = {
    method : 'GET',
    url: url+'standings',
    params: {league: 'standard', season: '2022', conference: 'west'},
    headers: headers
}
