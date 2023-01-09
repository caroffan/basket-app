const url = 'https://api-nba-v1.p.rapidapi.com/'
const headers = {
    'X-RapidAPI-Key': '19e69feb72msh2191562c0b697a1p1bf460jsnafcadaf0b068',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
}
export const standingsEast = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/standings',
    params: {league: 'standard', season: '2022', conference: 'east'},
    headers: headers
};
export const standingsWest = {
    method : 'GET',
    url: url+'standings',
    params: {league: 'standard', season: '2022', conference: 'west'},
    headers: headers
}
