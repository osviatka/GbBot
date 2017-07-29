var TelegramBot = require('node-telegram-bot-api'),
    token = '356188286:AAErLrRuXStooS6VVUCM1CVgMNYygb837vY',
    bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg) {
    var chatId = msg.chat.id;

// send a message to the chat acknowledging receipt of their message
bot.sendMessage(chatId, 'Received your message');
});
