const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = 'Iv1.a28d83270a182327';
const client_secret = 'be2f8d7e75a45ef8e174dfed94db5b868bc1b194';

searchButton.addEventListener('click',() =>{
    console.log('Hello');
})

const fetchFollower = async (user) =>{
    const api_call = await fetch('https://api.github.com/users/${user}? client_id=${client_id} & client_secret=${client_secret}');
    const data = await api_call.json();
    return {data}
};

const ShowData = ()=> {
    fetchFollower(inputValue.value).then((res) =>{
        console.log(res);
    })
};

searchButton.addEventListener('click',() =>{
    ShowData();
})

