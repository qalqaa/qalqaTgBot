import { Telegraf, Markup } from "telegraf";

const token = "6040645316:AAHD0WgvXWuQR6wxt_3DJv96mqFY4ROFsWM";
const webAppUrl = "https://google.com/";
const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    "Welcome! Press below button to start app.",
    Markup.keyboard([Markup.button.webApp("Send message", webAppUrl)])
  );
});

bot.launch();
