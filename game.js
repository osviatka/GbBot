var TelegramBot = require('node-telegram-bot-api'),
    fs = require('fs'),
    token = '356188286:AAErLrRuXStooS6VVUCM1CVgMNYygb837vY',
    bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg) {
    var chatId = msg.chat.id;

    switch (msg.text) {
        case '/start':
            start();
        break;
    }
});

function start(chatID) {
    bot.sendMessage(chatID, 'Strat the game!\nYour hero appear near the castle. What we gonna do: explore the castle or explore location?', {

    });
}