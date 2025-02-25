const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VV25KiSBT8l3rVWUGQixEdsYAoSuNdATf2oaAKKLkKhYgT/vsG7fROx+7MbC9PFQWVlSdP5uEryHJSYRO3YPwVFCW5Qoq7JW0LDMZArYMAl6APEKQQjMHBMJzUb1Q1wS5/R+5NvbHsyOXw5b6aDJWycjiDmzThIolfwKMPitpLiP8LQE3aoptFuKsYo62JzOXN4IL0YGY1Pq0yzvMnZcLZa7M9KC/g0SFCUpIs1IsIp7iEiYnbNSTl5+jvjKmWnvxjxZkbn5c3NWtfdsV8YZjKvfYI9KrR2ZqpGjLyz9Fvz77ZUxhE8p6pKhAPBx46lk5PuyJvz9zt5UWfprXP7Uj4pF+RMMNojnBGCW0/rbula426Lu4rYXPjhKxSoLLk7+blrlHpguzQVY4D3dgaK+eTunO74BIdGT4Tfft4WpzPuhDo4X2HCu5ViS8Xa4Em0yZtXg/WR+Lr8t0r8f/RfaZG18MgmO2OsXviTWpdi9lAkgQ2Dl2jcOdGIWyZ2fB+jOefo39zX+/2ZNZIpKVUNxKN+hPrLlY4O2jDsz9rKZIke6sejeY7fUjr8lcsq2huoFKRBWEvVJZwHrpuDHd8KXns2qnnznx+VtuF7qgWzG6OPKFcNEDajG2bXk9f24tU4aR00aOXjaF7ZsYjEzHn5uWtohi3cwTG7KMPShySipaQkjx72xP7AKLrDvslpm/qgmQ+XckmzlfK2dqwFytjuGC4WtEb6x3xvNc2o/k2LHqxeApfQB8UZe7jqsLIIBXNy9bCVQVDXIHxH2+N6moucZpTvCAIjMFwxIsyy7A8N+R/r35rIkgrWBS/ZZiCPgjKPLUwGNOyxn3wdoAXJpouTxVpwikso7K6Iku6OFVVkRUmPM91FabPS/ckxRWFadEVxjO8IIgj6fFnH2T4Rp/26Yrm2D4ISFnRQ1YXSQ7Ru7feX0Lfz+uM7trM17oFLsGY+b6NKSVZWHWV1Rks/YhcsdbVAcYBTCr86AOEr8THHR7AUqWXB7HcGPYqp7Z5WzXeLeyUi/Ls+YkseEgeQfkLA0XmC49k+QsURP6L5MMRFqVgxMAh6OR4Jrc781MjrZxpo/nOIQ7sPRlsi4CuWf00zF6Fp72fDsAlRu8qe9CP62Kfxzj7Ba4z9fMtWdgjRbc4t1x6ZCC17SgkqPqA+3QWGH/9Pi21HHV4u+nrXlqKJ9B1q7vnX24YS+I/DfH4W/TuBMIUkqTqJvc6aCPibyq6Z68b11WIopiK0vnxvUnvmXua2u1x/mt7pZ5imM4VXVWOKWGTt7d1vJWu0r2IbDMaaJqgMz8CAWNw6s3z1h8OU0cl08g7OU5jON5ROtnTxXKrNkGhRVdjSLNkOLJHacPGJ+oyQ0b0N8konMtHS7zvd2Tp3de7YntS5q5y0LqAvpvl42X1IGBn+sqC1V1GxXQqR2a8lhcXQd45C41vkllyZc8ndR1lt7habCdGQHmOnImgLwzkpr6+YSe+U9bF0cuWvcjx63UUPqfB2zRKvv0FyLegPq0VEPw2VDPYtei/mvPR5cyj/wHj25j+iZNUe005TSpFu1HbROS8BsnmsDKtaj/Sg9eBJbhHkgdNWEdL8OjiWySQBnmZgjGAGSpzgkAfJLCiyveg/ij7XB+krVIUOwrpe76B0j2r8AoefwFIna7dgQgAAA==',
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
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'no',
              
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
