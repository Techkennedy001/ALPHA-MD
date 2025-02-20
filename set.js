const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VVa4+iSBT9L/VVZ3i/TDpZBHygtiho2242G4QCqnlaVQg48b9vaKe3O7szs718qhTcc8+995zLN1CUiMAF7MDoG6gwuvgU9kfaVRCMwLiOIojBEIQ+9cEI1JOnsDxp9tNC5xtbFNpcy8ZKROgjDM+mFEAO44Nw8KZC+gBuQ1DVpwwFvwAsmPG1hDPvON2brVTozCOhXsY0tpIJhTLei+tdoiUv7YbfPYBbj+gjjIrYqhKYQ+xnC9g5PsKfoy/Ompd0iVJh1Tkbwkrp3hQ5o/O5iVYHjWE/i2vmWusXnw0+Rz9Zr4soUfLnuj5gO0NS8Xi2j8JpNw9kmmxhdS45ljT0mYvv9AmKCxjOQ1hQRLtP932xJLONs9P3R3rQ8uk6hCLy1mjsWrzTRXF5NOWBYE94bsd+jvjcYezj+qky8EZTKntdD1ZXguMLZtZzTmZctwuScqcesMd+JO7gN62k/6fvgdMeHV1P2Xl3MUlj42uQE9NTvcnc2m2kRTTehvhUtXQmfo7+Snes9rBZmO2sNOTiZQC1Q2ds2H3XzJ9VbcDn7lKQVwvKzd/p+7TGv2K5IWHRTdbZftW1ux3jpcx5zbgJRxoXuocKB81TnJxxeL4qZ26imFv5KGAEE6yYTZZdmXSR2qk6eXTbR6jvi5YLbM1oHl4rSmE3D8GIuw0BhjEiFPsUlcXrHT8EfnhxYYAhfe0u8Pecw8TRabVCk3yK88NSLqhH5G5aHcOaPQe51U7qbKaLzQMYggqXASQEhjNEaIm7FSTEjyEBo99fB9XXjGFeUmijEIwAL4mKxrGcKPDib+Rrk/iU+FX1tYAUDEGEy3wFwYjiGg7Ba4BpKpKl8/yY5ycGO1ZFU1PGimSK3Ji1VE7rK8zvST2UQ0L9vAIjThFZVhI1kb/9MQQFbOldPn3RAjcEEcKE7oq6yko/fNPW20s/CMq6oG5XBEZ/gBiM2PdrSCkqYtJXVhc+DhJ0gUZfBxhFfkbgbQhCeEEB7PHAeRq4/kHMXY9vtn/OiunZHZ+avnNJWdw/YWXlJPIn8YsgquwXUWLDL6ooy19UVZV9VYJBGAagb8fduX3MT4UUGxBxAzlLD+m80uWIQVNz4l22RkVexXBXAMQwfOvyyQ/SuvLKFBa/wLU8wh/pIGJScRB41Et5W2W8s5Ur8Qfcu7LA6Nv7tjTKsMdbGMuVpCoW6KfV5/mXGkaK9k9B3P5ueh8RQuqjjIARMJZRRbSNac0vprBkp1PdinUj1sH7kN48dxf1LDmYWq1kSIrycq/NipW+NtkwDTvnpWVtKm6f3GLdCu5+/vADEDACFxq/PD9vDpxnV8yVFSxaRma5JC82msApW1fzwRNU5wv0uIJWZqVX76rJLxy64BUanBptEohLhrHK7NT5lTEP3Sd+q8cPfba7WD4m2xmJtfcWSsJPBzMnciRnbIunSz05y88kXWhH/il1zLgy9weByC372EptI2/GZiBvFXiM1PGqM404rSbkkTqFWPuObOr3bfC6jbLvfwH03ah3aUUIvi7Vwu9H9F/D+ahy9jb8gPF9Tf9ESeOtuG+YUy091wfpPIm20lU3Y212nAUvohoaJ2jt0+pKQjZzwa23b5X5NCpx3m+nIsQlCsEQZD6h+rtRf+B9QRmCvNOryqU+ffM30PtnmpTg9hc4SkiAgQgAAA==',
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
    TIMEZONE : process.env.TIMEZONE || "America/Chicago",              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha md',   
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
