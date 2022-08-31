const axios = require('axios');

async function fetchData() {
    try {
        const result = await axios.get('http://jsonplaceholder.typicode.com/users');
        console.log(result);
    } catch (error) {
                console.log('error');
                setTimeout(() => {
                    console.log(error);
                }, 3000)
    }
}

fetchData()