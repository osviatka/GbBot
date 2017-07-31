var TelegramBot = require('node-telegram-bot-api'),
    dbConfig = 'mongodb://admin:root@ds129733.mlab.com:29733/gbbot'
    token = '356188286:AAErLrRuXStooS6VVUCM1CVgMNYygb837vY',
    bot = new TelegramBot(token, {polling: true});

var login = null;
var password = null;
var field = null;

bot.on('message', function (msg) {

    if (msg.text == '/enter'){
        field = 'login';
        login (chatId);
    }
    else if  (login != null){
        login (chatId, msg.text);
    }
    else{
        defaultCommand(chatId);
    }
})

function login(chatId, text) {
    if (login == 'login'){
        if (text){
            login = text;
            field = 'password';
        }
        else{
            bot.sendMessage('Enter your login');
        }
    }
    if (field == 'password'){
        if (text){
            password = text;
            checkAccess(chatId);
        }
        else{
            bot.sendMessage('Enter your password');
        }
    }
}
function checkAccess(chatId) {
    bot.sendMessage('Blocked');
}

function  defaultCommand(chatId) {
    bot.sendMessage('Hello! It is defult command :)');
}