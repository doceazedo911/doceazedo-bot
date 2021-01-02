const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Iniciado como ${client.user.tag}!`);
  client.user.setPresence({
    status: 'dnd',
    game: {
      name: 'osu!',
      type: 'PLAYING'
    }
  });
});

client.on('message', msg => {
  if (!msg.content.startsWith('<@795035460593516574>') && !msg.content.startsWith('<@!795035460593516574>')) return;
  if (msg.channel.id !== '691484613771657236' && msg.channel.id !== '692434369683521609') {
    const errors = [
      'conversa no <#691015330096611352> por favor',
      'talvez eu te responda no <#691015330096611352>',
      'canal errado',
      'olha aqui seu merdinha, é pra conversar no <#691015330096611352> ok'
    ];
    const error = messages[Math.floor(Math.random() * errors.length)];
    msg.channel.send(`${msg.author} ${error}`);
    return;
  }

  var messages;
  if (msg.content.endsWith('?')) {
    messages = [
      'não sei dizer',
      'por enquanto não',
      'talvez',
      'vou ver e te falo',
      'ss',
      'nn',
      'mds n?????',
      'eu que te pergunto',
      'olhando por esse lado, acredito que sim',
      'não tenho previsão pra isso nn',
      'não sei ao certo',
      'pergunta pro dalca',
      'é verdade',
      'eu acho que',
      'NÃO',
      'depende do ponto de vista',
      'minha api retornou que sim'
    ];
  } else {
    messages = [
      'ok eu vou te bloquear agr',
      'banido',
      'não, o jotinha não vai ser desbanido',
      'parece mentira',
      'pse eu ia falar isso agora inclusive',
      'por favor pare',
      'desculpa',
      'fui conferir aqui e me parece que você é corno',
      'ulala',
      'quando eu voltar eu vejo isso',
      'não posso dizer com certeza',
      'oi, não posso responder agora',
      'calada gostosa'
    ];
  }

  const message = messages[Math.floor(Math.random() * messages.length)];
  msg.channel.send(`${msg.author} ${message}`);
});

var lastHour = 0;
setInterval(() => {
  const postAt = [16, 18, 20, 22];
  const d = new Date();
  const time = d.getHours();

  if (time == lastHour) return;

  lastHour = time;
  console.log(`São ${time}h agora.`);
  if (postAt.includes(time)) {
    const random = Math.floor(Math.random() * 3);
    eval(`func${random}()`);
  }
}, 5000);

// Farmar melancia
function func0 () {
  const d = new Date();
  const time = d.getHours();
  let greeting;
  
  if (time < 1 || time > 17) {
    greeting = 'boa noite';
  } else if (time < 5) {
    greeting = 'boa madrugada';
  } else if (time < 12) {
    greeting = 'bom dia';
  } else if (time < 18) {
    greeting = 'boa tarde';
  }

  client.channels.cache.get('692434369683521609').send(greeting);
}

// Redirecionar para chat geral
function func1 () {
  const emojis = ['😠', '😡', '😤'];
  const channels = ['692434369683521609'];

  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const channel = channels[Math.floor(Math.random() * channels.length)];

  client.channels.cache.get(channel).send(`<#691015330096611352> ${emoji}`);
}

// Mensagem aleatória
function func2 () {
  const messages = [
    'servidor tá off?',
    'leiam os avisos',
    'gente manutenção hj em 30min',
    'por favor não mande esse tipo de coisa no chat',
    'doente',
    'oi gente boa noite parem de me xingar nos comentários que vcs não me conhecem vcs não sabem como eu sou quem eu sou vcs nem moram aonde eu moro vai se foder todo mundo vai tomar no meio do cu caralho',
    'https://doceazedo.com/floppa-1.gif',
    'https://doceazedo.com/floppa-2.gif',
    'https://doceazedo.com/turkish-1.gif',
    'https://doceazedo.com/turkish-2.gif',
    'https://doceazedo.com/turkish-3.gif',
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];

  client.channels.cache.get('691015330096611352').send(message);
}

client.login('');