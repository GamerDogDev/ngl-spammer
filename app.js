const config = require('./config.json');
const qs = require('qs');
const axios = require('axios')
let x = 1


//Function
const spamFunction = async () => {
    console.log(`
            User Destroyed: ${config.username}
            Type Game: ${config.gameSlug}
            Message: ${config.question}
        
        `)
    setInterval( async() => {
        const data = await axios.post('https://ngl.link/api/submit', qs.stringify(config)).then(() => console.log(`Request: ${x++}`)).catch((err) => console.log(err));
    
    }, 3300)

}

spamFunction()