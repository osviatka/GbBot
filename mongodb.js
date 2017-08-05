var TelegramBot = require('node-telegram-bot-api'),
    MongoClient = require('mongodb').MongoClient,
    dbConfig = 'mongodb://admin:root@ds129733.mlab.com:29733/gbbot'
    token = '356188286:AAErLrRuXStooS6VVUCM1CVgMNYygb837vY',
    bot = new TelegramBot(token, {polling: true});



bot.on('message', function (msg) {
    var chatId = msg.from.id;

    if (msg.text == '/start'){
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
    if (field == 'login'){
        if (text){
            _login = text;
            field = 'password';
            text = null;
        }
        else{
            bot.sendMessage(chatId, 'Enter your login');
        }
    }
    if (field == 'password'){
        if (text){
            _password = text;
            checkAccess(chatId);
        }
        else{
            bot.sendMessage(chatId, 'Enter your password');
        }
    }
}
function checkAccess(chatId) {
    MongoClient.connect(dbConfig, function(err, db) {
        var collection = db.collection('user');

        collection.find({
            login: _login
        }).toArray(function(err, docs) {
            var user = docs[0];

            if (user && user.password == _password){
                bot.sendMessage(chatId, 'You are logged in!');
            }
            else {
                bot.sendMessage(chatId, 'Login or passport are not valid!');
            }

            _login = null;
            _password = null;
            field = null;
        });

        db.close();
    });

}

function defaultCommand(chatId) {
    bot.sendMessage('Hello! It is default command :)');
}