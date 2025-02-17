const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VUW2+jOBj9L35NOoFAIESqtEDIPYWE3FfzYLABBzAEmySkyn8f0bRqV9qZ7fJkAT4+PpfvFdCMMDzFFei9grwgZ8hxveRVjkEPGGUQ4AI0AYIcgh5YTPruLG4sdVvrSkqpFJXDds5IlgYrV4AvM5sPVOImhbwWnsG9CfLSS4j/B8BUuqBgfPFEIrTHhp8LpwZbeKs4H+xtwrPBcXa70mO6ydrxM7jXiJAUhIZWHuEUFzCZ4sqBpPge/f2Id9ShcDx5RWL5Gt5ZlemUg9Z8PlEnE0O3ozA/GlS+ptb36EPJNpjW2m47+UrZmP50GyvRSDkdGx2LRibLtbFVyDs+FdcP+oyEFKMxwpQTXn1b9+FwJo7NzQ26u8nUPy3FIOqoi65vkfMAmsNoL51tOxPWyvbyPeK0nLljbpRlpZ+P0jw+ocwI0qoKD9W6m0anQ0BfJJ2t56t/EHeKj6zE/0d3eTqYLgtzmhG0FDPLXw/9KZOGiapxJbEX5NiSbXpoRWo8/x79rlPx8Dpy7ZZ5VWAQLkdV3rKtwDxhfWsYxo1Mtlt5s21dhU/6kJfFn1iq3c58cBGjQ4jKWduho4Ak/r66BC+V7+inFhqLu1yJ+nqK1prO9BW2NHd+al0wFFZmmO/68aY8rNHR1M9LeDhch0YaLp7fbhTjaoxAT7w3QYFDwngBOclo/U5rNwFEZxf7BeZv6gLRmONr43wx9eqYKzSx1rTtHOeix87ufnxV3DwdjLWJaLn7Z9AEeZH5mDGMRoTxrKjmmDEYYgZ6f/9sAoqv/OFbfZokNkFACsbXtMyTDKIPUz8+Qt/PSsrdivpmvcAF6AmfrzHnhIaslrGksPAjcsZmBDkDvQAmDN+bAOEz8XGNB7RTEZcnkay6+ClP46exV0y3ek05yujjF6jJougr3afAE+Qn2VM6T1DW2k+epCmq1wmUtoxAE5D3ytR7fuugpMTblY+DjmzROCJ543zDY09ap2X45sJDelxgBHq8KHETeNCPy3yVxZj+AfeasMNwr/m7taZL6u5SuegmjPD1eBG+4D4sBb3XzzFlZqjGc8wXXTF2XdAE6VsCSX3zdkdWNVEQZakt91TxL/bjUgsJ8/wHxbzGfRe93oEwhyRhoAfM2Spn2qJvTfvDShWGQ30e6mZYq/ph0kfYH2kaRbu+VqoJ6QRpttFGdK7bfQHFqHKOV2HC5eXWpfZVcjfj538BAT2QM+wj6Twcl9YgCLqyGWothBatFdt7N2e5l29+lMByYvujPNpv9bQzCrK4WImySQ1CBLs1cPZoBrOX9tKJpw173Tr0w+f6tEdYvh7WPp1HbneSBuySduKzobyskwumpgT5wT4yy3lxyHXc9rfO3jNWItqKoXpA+504aywKdzswvHafYmkxWOpLcZY1NDbhUfio4dsYSN7HL3lryOt7tAKC36YZhSn+b3O+ply4N79gvM/H3yTJWMqbS8srO/ty1zkNgmXnpvdDbXQY+Ue5i0wPW5s4vzEkJC643382QZ5AHmRFWleFoiIjdRsSyLj+WdQVSTHjMM1BT1QlTVWVrig3QVrpee5yyD/6DfT6GUYBuP8C5w9M5/oHAAA=',
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
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'non',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
    TIMEZONE : process.env.TIMEZONE || "America/Chicago",              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha md',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
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
         ssl: { require: true, rejectUnauthorized: false },
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
