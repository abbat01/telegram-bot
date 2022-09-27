const TelegramApi = require('node-telegram-bot-api')
const token = '5627644282:AAF6VzGl_Q59wTFKYSKr4ZZHP6PYKrR0r2Q'


const bot = new TelegramApi(token, {polling: true})
const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Текст кнопки', callback_data: 'Текст кнопки'}]
        ]
    })
}
bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Информация обо мне'},
    {command: '/works', description: 'Выполненные проекты'},

])
function start() {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatID = msg.chat.id;
        if (text === '/start') {
            return bot.sendMessage(chatID, 'Привет! Я Андрей, начинающий веб-разработчик. В этом боте ты можешь узнать обо мне, посмотреть список моих работ и написать мне.')
        }
        if (text === '/info') {
            await bot.sendMessage(chatID, 'Меня зовут Андрей, мне 20 лет и я из Беларуси. В течении года активно занимаюсь веб-разработкой и за это время успел поработать в команде, выполнить несколько коммерческих проектов, изучил множество технологий для написания чистого кода. Как основной IDE я использвую VS Code.');
            return bot.sendMessage(chatID, 'Я хорошо знаю HTML, CSS, JS. В качестве фреймворка использую Angular. Так же знаю SCSS(SASS), LESS, Tailwind CSS, Bootstrap, GSAP, относясь к JS знаю Node JS, PHP. Умею работать с API, и углубленно изучаю CEO оптимизацию')
        }
        if (text === '/works') {
            return bot.sendMessage(chatID, 'Это выполненные мною проекты (Некоторые проекты не имеют полноценных функций, а каких именно я укажу в кнопке)', options)
        }
        await bot.sendMessage(chatID, `Прости, не понимаю тебя 😓`);
        return bot.sendMessage(chatID, 'Попробуй использовать предложенные мною команды')
    })
}

start()