const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VU23KqSBT9l36NOXJXrErVKCAEFVRQIlPnoYFGW+40FzHlv09hkkoe5mQyb119WXv1WmvvV5BmmKAF6sDkFeQlbmCF+mXV5QhMwKwOQ1SCAQhgBcEELOZwsZF117p6+zrzWNztwzFfaGq8NQ13Hnni4Voe4sLZZ0/gNgB57cXY/wZwuJYpQzjp4mp1buLODJN0rI0e7DIvzeUoEpDQkIMpuemZegK3HhHiEqdHJT+hBJUwXqBuDXH5M/qWikuRtdj5OIHO7qGs291hNX/ROAMWzrWImXbqqFIYOnv/Z/QtV3a3AruSqgKfz0ECcecttZxZLE19djHXw/PR28itnmntG32CjykKngOUVrjqfq675LFSFcv5zuIvqbLAW4452cFydQylXZQ7KmnL5mEzP7Htz4gXetPQVjhLvKL0p/NE19VMoZHjqoXQwl08M2BzGC34Ybf5SnxdfmQl+j+6JyZPPMUv/JyDF9JaJ0OhJT6MWv801A7GrKBmuR4JfDv/IX1NwI3r0OM1ZGgbb8wXhJ91ZS8psXEwBX8d2ESP11fDTL/Qh1VdfseyFahcTf1hYEGlenC1VV5ELtLKJqAOEbJZ32sN37jKyw3dMApp13Ui47niXgrdLhx7aca8rbUhGm6f93i/3T4v9vV0+nT/UYS65wBM6NsAlOiISVXCCmfpfY8RBwAGjYX8ElV3ecHWFRilvJ5XY6OmH5pjN1Z2OenUwD3zyZ7MHpqa83AAZ7TyBAYgLzMfEYICDZMqK7sVIgQeEQGTv38PQIou1ZtxfTmWHoAQl6TapXUeZzD4cPXjEPp+VqeV1aW+1C9QCSbU5zaqKpweSa9jncLSP+EGSSdYETAJYUzQbQAC1GAf9Xig0/S1OaL8bc68bGdatxzNOu3YUz5l6duVMRP6iAr4R59F/CPHQu5xLDL0I/JElveQL4rBCAwAfu+Z/s0fLRQbVe+IIHdulDaFnsy4kRGrZD0qlLsNb9qjEgVgUpU1GgAP+lGd21mE0m9wTTxORVV0FoVvpNo0oFhDh5ktMXr7BffNUzB5/ZxTUhb0eAfd5gRmxIIBSO4RxP3PGZ4biTRFcyzDTcbUX+RX2wsJ8/xXiqoe9130/kWAKohjAiZAWoY5ETeyYl4Rt6RUdfp8nErHKfg06SPtb2nSTi+yWI9izIdJthe1dDU1ZSqIgm59vlB6xW0dKzUvrLV/fvoXkL7k6sLS851dJHE03Ji62jZtQTibQ/Wl6Dq0UlnZlmNveFm1oWvZW8opFop5cTU/PcyWV71an4cHY6f61S6iksVyI9uzvjU+wvK1mPYgrFzs8IqIqPNwIx/bPFTT3D9bDqmxJimRNrT1peCpRcOGOedcLkJXxWhTN8IWRry7OOEz3OjqZTwWBFO0smA9Pb714X0OxO/zF9875PU9WiFG93GWwt6i/zLna8qp2+ALxvuA/EOSZltu3w69mj/UL3wxD7f8dSofRc3V/DM3DiQPKfsov5KAii1wu/0egDyGVZiVCZgAmAZlhgMwADEk1fSzUW2cIFLBJAcTesRRNMNRzOj2D6BAuwbeBwAA',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "KENNEDY/>",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254791014324",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "😊, 🤭,🤞,🐺,❤️, 🥰,👀,📌, 💯",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'no',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
