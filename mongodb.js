var TelegramBot = require('node-telegram-bot-api'),

    token = '356188286:AAErLrRuXStooS6VVUCM1CVgMNYygb837vY',
    bot = new TelegramBot(token, {polling: true});

var login = null;
var password = null;

bot.on('message', function (msg) {

    if (msg.text == '/enter' || login != null){
        login ();
    }
    else{
        defaultCommand(chatId);
    }
})

function  defaultCommand(chatId) {
    bot.sendMessage('Hello! It is defult command :)');
}