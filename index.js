const Discord = require("discord.js");
const axios = require("axios");
const TOKEN = "OTY3MzU5ODE0Nzc2NzkxMDcw.YmPKCA.odEsZpdpF1JL1F1QlqfE_lNy478";

const getPriceUSD = () => {
    // try{
    return axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
    
}

const getPriceINR = () => {
    // try{
    return axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=inr")
    
}

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!solUSD"){
        getPriceUSD()
        .then((res) => {
            const price = res.data.solana.usd;
            // console.log(price)
            message.reply(`$${price}!`);
        })
        .catch((err) => {
            
            console.log(err);
        })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!solINR"){
        getPriceINR()
        .then((res) => {
            const price = res.data.solana.inr;
            // console.log(price)
            message.reply(`${price} rupees!`);
        })
        .catch((err) => {
            
            console.log(err);
        })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!howtouse"){
        getPriceINR()
        .then((res) => {
            const price = res.data.solana.inr;
            // console.log(price)
            message.reply(`Commands: \n!solUSD : Sol price in USD \n!solINR: Sol price in INR`);
        })
        .catch((err) => {
            
            console.log(err);
        })
    }
})

client.login(TOKEN);