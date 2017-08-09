var TelegramBot = require('node-telegram-bot-api'),
    fs = require('fs'),
    token = '356188286:AAErLrRuXStooS6VVUCM1CVgMNYygb837vY',
    bot = new TelegramBot(token, {polling: true});


bot.on('message', function(msg) {
    var chatId = msg.chat.id,
    file = __dirname+'/document.pdf';


    bot.sendMessage(chatId, 'Senf u document!');
    bot.sendDocument(chatId, file);
});

