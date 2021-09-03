const url = 'https://www.youtu.be/-ZClicWm0zM';
const regex = /(?:https?:\/\/)?(?:www.)?youtu.be\/([a-zA-Z0-9-]{11})/;
const result = url.match(regex);

console.log(result[1]);