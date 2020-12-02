const fetch = require('node-fetch');

const client_id = 'Iv1.a28d83270a182327';
const client_secret = 'be2f8d7e75a45ef8e174dfed94db5b868bc1b194';

const fetchFollower2 = async (user) =>{
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    const data = await api_call.json();
    return {data}
};

fetchFollower2('mtax').then((res) =>{
        console.log(res);
});
