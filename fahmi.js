/*
* Bot Ini Saya Bagikan gratis untuk penginstalan bisa liat channel yt Fahmi Cog
* Youtube : https://www.youtube.com/channel/UCKnzdl1cYOqTnmKvDjvRaOA
* Follow : https://www.instagram.com/fahmicog


- What's New?
* New Features
*/

const {
   WAConnection,
   MessageType,
   Presence,
   Mimetype,
   GroupSettingChange,
   MessageOptions,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   mentionedJid,
   processTime,
   ChatModification,
} = require('@adiwajshing/baileys');

const fs = require('fs');
const axios = require('axios');
const request = require('request');
const moment = require('moment-timezone');
const { exec } = require('child_process');
const fetch = require('node-fetch');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const google = require('google-it');
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const imgbb = require('imgbb-uploader');
const { removeBackgroundFromImageFile } = require('remove.bg');
const brainly = require('brainly-scraper');
const cd = 4.32e7;
const lolis = require('lolis.life');
const loli = new lolis();

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'));
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'));
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'));
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'));
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'));
const user = JSON.parse(fs.readFileSync('./database/json/user.json'));
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'));
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'));
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'));
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'));
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'));
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'));
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'));
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'));
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'));
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'));
let { instagram, yt, groupLink } = setting;

const { fetchJson } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { color, bgcolor } = require('./lib/color');
const { help, bahasa, donasi, menu, limitend, limitcount, bottt } = require('./fahmi/help');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, open } = require('./lib/functions');

const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:NOBITA H\n' + 'ORG:Owner bot;\n' + 'TEL;type=CELL;type=VOICE;waid=6287861810657:+62 878-6181-0657\n' + 'END:VCARD';

const vcard1 = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:NOBIGA Cog\n' + 'ORG:Co Owner bot;\n' + 'TEL;type=CELL;type=VOICE;waid=6287861810657:+62 878-6181-0657\n' + 'END:VCARD';

prefix = '.';
name = 'GABUT BOT';
rdaftar = 'TERIMA KASIH TELAH DAFTAR MENJADI TEMEN GABUT bot 😁';
rmenu = 'HAI TEMEN Fbot 👋🏻 JANGAN LUPA DONASI YAA:)';
botinfo = 'UNTUK INVITE BOT SILAHKAN DONASI DULU YAA:)';
limitt = 999999999;
memberLimit = 2;
ban = [];
premium = ['6287861810657@s.whatsapp.net', '6287861810657@s.whatsapp.net'];

function kyun(seconds) {
   function pad(s) {
      return (s < 10 ? '0' : '') + s;
   }
   var hours = Math.floor(seconds / (60 * 60));
   var minutes = Math.floor((seconds % (60 * 60)) / 60);
   var seconds = Math.floor(seconds % 60);

   return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`;
}

async function starts() {
   const fahmi = new WAConnection();
   fahmi.logger.level = 'warn';
   console.log(banner.string);
   fahmi.on('qr', () => {
      console.log(color('[', 'red'), color('!', 'yellow'), color(']', 'red'), color(' Scan the qr code above', 'green'));
   });

   fs.existsSync('./fahmi.json') && fahmi.loadAuthInfo('./fahmi.json');
   fahmi.on('connecting', () => {
      start('2', 'Connecting...');
   });
   fahmi.on('open', () => {
      success('2', 'Connected');
   });
   await fahmi.connect({ timeoutMs: 30 * 1000 });
   fs.writeFileSync('./fahmi.json', JSON.stringify(fahmi.base64EncodedAuthInfo(), null, '\t'));

   fahmi.on('group-participants-update', async (anu) => {
      if (!welkom.includes(anu.jid)) return;
      try {
         const mdata = await fahmi.groupMetadata(anu.jid);
         console.log(anu);
         if (anu.action == 'add') {
            num = anu.participants[0];
            try {
               ppimg = await fahmi.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_Hallo👋_* @${num.split('@')[0]}\n selamat datang di group *${mdata.subject}*`;
            let buff = await getBuffer(ppimg);
            fahmi.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         } else if (anu.action == 'promote') {
            num = anu.participants[0];
            try {
               ppimg = await fahmi.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_「 promote deteᴄted 」_*\n@${num.split('@')[0]} yang add admin siapa?, dah iᴢin oᴡne grup belum!`;
            let buff = await getBuffer(ppimg);
            fahmi.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         } else if (anu.action == 'demote') {
            num = anu.participants[0];
            try {
               ppimg = await fahmi.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_「 demote deteᴄted 」_*\n@${num.split('@')[0]} yang un admin siapa?, dah iᴢin oᴡne grup belum!`;
            let buff = await getBuffer(ppimg);
            fahmi.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         } else if (anu.action == 'remove') {
            num = anu.participants[0];
            try {
               ppimg = await fahmi.getProfilePicture(`${num.split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_Sayonara👋_* @${num.split('@')[0]} Kalau balik jangan lupa donasi ya`;
            let buff = await getBuffer(ppimg);
            fahmi.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         }
      } catch (e) {
         console.log('Error : %s', color(e, 'yellow'));
      }
   });

   fahmi.on('CB:Blocklist', (json) => {
      if (blocked.length > 2) return;
      for (let i of json[1].blocklist) {
         blocked.push(i.replace('c.us', 's.whatsapp.net'));
      }
   });

   fahmi.on('chat-update', async (mek) => {
      try {
         if (!mek.hasNewMessage) return;
         mek = JSON.parse(JSON.stringify(mek)).messages[0];
         if (!mek.message) return;
         if (mek.key && mek.key.remoteJid == 'status@broadcast') return;
         if (mek.key.fromMe) return;
         global.prefix;
         global.blocked;
         const content = JSON.stringify(mek.message);
         const from = mek.key.remoteJid;
         const type = Object.keys(mek.message)[0];
         const FarhanGans = ['0@s.whatsapp.net']; // ubah aja gapapa
         const farhan = mek.message.conversation;
         const insom = from.endsWith('@g.us');
         const nameReq = insom ? mek.participant : mek.key.remoteJid;
         pushname2 = fahmi.contacts[nameReq] != undefined ? fahmi.contacts[nameReq].vname || fahmi.contacts[nameReq].notify : undefined;

         const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;

         const date = new Date().toLocaleDateString();
         const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
         const jam = moment.tz('Asia/Jakarta').format('HH:mm');

         body =
            type === 'conversation' && mek.message.conversation.startsWith(prefix)
               ? mek.message.conversation
               : type == 'imageMessage' && mek.message.imageMessage.caption.startsWith(prefix)
               ? mek.message.imageMessage.caption
               : type == 'videoMessage' && mek.message.videoMessage.caption.startsWith(prefix)
               ? mek.message.videoMessage.caption
               : type == 'extendedTextMessage' && mek.message.extendedTextMessage.text.startsWith(prefix)
               ? mek.message.extendedTextMessage.text
               : '';
         budy = type === 'conversation' ? mek.message.conversation : type === 'extendedTextMessage' ? mek.message.extendedTextMessage.text : '';
         var Link =
            type === 'conversation' && mek.message.conversation
               ? mek.message.conversation
               : type == 'imageMessage' && mek.message.imageMessage.caption
               ? mek.message.imageMessage.caption
               : type == 'videoMessage' && mek.message.videoMessage.caption
               ? mek.message.videoMessage.caption
               : type == 'extendedTextMessage' && mek.message.extendedTextMessage.text
               ? mek.message.extendedTextMessage.text
               : '';
         const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase();
         const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
         const args = body.trim().split(/ +/).slice(1);
         const Far = args.join(' ');
         const isCmd = body.startsWith(prefix);
         fahmi.chatRead(from);

         mess = {
            wait: '*⏳ Tunggu sedang di proses...*',
            success: '*Sukses...*',
            error: {
               stick: '*Gagal, tejadi kesalahan saat mengkonᴠesi gambar ke stiᴄke*',
               Iv: '*Maaf link tidak ᴠalid!*',
            },
            only: {
               group: '*Maaf peintah ini hanya bisa di gunakan dalam group!*',
               benned: '*Maaf nome kamu ke banned silahkan hubungi oᴡne agar membuka banned anda*',
               ownerG: '*Maaf peintah ini hanya bisa di gunakan oleh oᴡne group!*',
               ownerB: '*Maaf peintah ini hanya bisa di gunakan oleh oᴡne bot!* ',
               premium: '*Maaf fitur ini khusus use premium!*',
               userB: `*Hallo kak ${pushname2} kamu belom tedaftar didatabase silahkan ketik* \n${prefix}daftar`,
               admin: '*Maaf peintah ini hanya bisa di gunakan oleh admin group!*',
               Badmin: '*Maaf peintah ini hanya bisa di gunakan ketika bot menjadi admin!*',
               publikG: `*Maaf bot sekarang sudah dipriᴠate oleh oᴡne*\n*untuk lebih jelasnya ketik* \n${prefix}infobot`,
            },
         };

         const botNumber = fahmi.user.jid;
         const ownerNumber = ['6287861810657@s.whatsapp.net', '6287861810657@s.whataapp.net']; // owner number ubah aja
         const isGroup = from.endsWith('@g.us');
         const sender = isGroup ? mek.participant : mek.key.remoteJid;
         const groupMetadata = isGroup ? await fahmi.groupMetadata(from) : '';
         const groupName = isGroup ? groupMetadata.subject : '';
         const groupId = isGroup ? groupMetadata.jid : '';
         const groupMembers = isGroup ? groupMetadata.participants : '';
         const groupDesc = isGroup ? groupMetadata.desc : '';
         const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
         const totalchat = await fahmi.chats.all();
         const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
         const isGroupAdmins = groupAdmins.includes(sender) || false;
         const isWelkom = isGroup ? welkom.includes(from) : false;
         const isNsfw = isGroup ? nsfw.includes(from) : false;
         const isAnime = isGroup ? anime.includes(from) : false;
         const isSimi = isGroup ? samih.includes(from) : false;
         const isPublic = isGroup ? publik.includes(from) : false;
         const isAntiLink = isGroup ? antilink.includes(from) : false;
         const isBadWord = isGroup ? badword.includes(from) : false;
         const isOwner = ownerNumber.includes(sender);
         const isUser = user.includes(sender);
         const isBanned = ban.includes(sender);
         const isPrem = premium.includes(sender);

         const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
         };
         const reply = (teks) => {
            fahmi.sendMessage(from, teks, text, { quoted: mek });
         };
         const sendMess = (hehe, teks) => {
            fahmi.sendMessage(hehe, teks, text);
         };
         const sendPtt = (teks) => {
            fahmi.sendMessage(from, audio, mp3, { quoted: mek });
         };
         const costum = (pesan, tipe, target, target2) => {
            fahmi.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } });
         };
         const mentions = (teks, memberr, id) => {
            id == null || id == undefined || id == false
               ? fahmi.sendMessage(from, teks.trim(), extendedText, { contextInfo: { mentionedJid: memberr } })
               : fahmi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: memberr } });
         };

         colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'aqua'];
         const isMedia = type === 'imageMessage' || type === 'videoMessage';
         const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
         const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
         const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
         const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');

         const checkLimit = (sender) => {
            let found = false;
            for (let lmt of _limit) {
               if (lmt.id === sender) {
                  limitCounts = limitt - lmt.limit;
                  found = true;
               }
            }
            if (found === false) {
               let obj = { id: sender, limit: 1 };
               _limit.push(obj);
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit));
               fahmi.sendMessage(from, limitcount(limitCounts), text, { quoted: mek });
            }
         };
         if (isGroup) {
            try {
               const getmemex = groupMembers.length;
               if (getmemex <= memberLimit) {
                  fahmi.sendMessage(from, `*maaf Fbot tidak bisa masuk group karna membe group ${groupMetadata.subject} tidak memenuhi limit membe*\n\n*minimal membe ${memberLimit}*`, text);
                  setTimeout(() => {
                     fahmi.groupLeave(from);
                  }, 11000);
                  setTimeout(() => {
                     fahmi.updatePresence(from, Presence.composing);
                  }, 10000);
                  setTimeout(() => {
                     reply(`*maaf Fbot segea keluar dari group ${groupMetadata.subject}*`);
                  }, 0);
               }
            } catch (err) {
               console.error(err);
            }
         }
         const isLimit = (sender) => {
            let position = false;
            for (let i of _limit) {
               if (i.id === sender) {
                  let limits = i.limit;
                  if (limits >= limitt) {
                     position = true;
                     fahmi.sendMessage(from, limitend(pushname2), text, { quoted: mek });
                     return true;
                  } else {
                     _limit;
                     position = true;
                     return false;
                  }
               }
            }
            if (position === false) {
               const obj = { id: sender, limit: 1 };
               _limit.push(obj);
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit));
               return false;
            }
         };
         const limitAdd = (sender) => {
            let position = false;
            Object.keys(_limit).forEach((i) => {
               if (_limit[i].id == sender) {
                  position = i;
               }
            });
            if (position !== false) {
               _limit[position].limit += 1;
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit));
            }
         };
         if (messagesLink.includes('://chat.whatsapp.com/')) {
            if (!isGroup) return;
            if (!isAntiLink) return;
            if (isGroupAdmins) return reply(`*${pushname2}* adalah admin group kamu tidak akan di kiᴄk`);
            fahmi.updatePresence(from, Presence.composing);
            if (messagesLink.includes('#izinadmin')) return reply('#izinadmin *_「 diteima 」_*');
            var kic = `${sender.split('@')[0]}@s.whatsapp.net`;
            reply(`*_「 link grup deteᴄted 」_*\nmaaf *${pushname2}* anda mengirim link grup!, anda segea dikiᴄk dari grup *${groupMetadata.subject}*`);
            setTimeout(() => {
               fahmi.groupRemove(from, [kic]).catch((e) => {
                  reply(`*ERR:* ${e}`);
               });
            }, 11000);
            setTimeout(() => {
               fahmi.groupRemove(from, [Kick]).catch((e) => {
                  reply(`*ERROR:* ${e}`);
               });
            }, 10000);
            setTimeout(() => {
               reply(`*take of otᴡ kiᴄk!*`);
            }, 0);
         }
         if (messagesLink.includes('bot')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/hai.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('hallo')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/hai.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('halo')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/hai.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('hai')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/hai.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('tapi')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/tapi.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('boong')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/boong.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('iri')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/iri.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bilang')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/iri.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound1')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound1.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound2')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound2.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound3')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound3.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound4')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound4.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound5')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound5.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound6')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound6.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound7')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound7.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound8')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound8.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound9')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound9.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound10')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound10.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound11')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound11.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound12')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound12.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound13')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound13.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('mengontol')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/mengontol.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ngocok')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ngocok.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bapak')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bapaklo.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('terimakasih')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/mksih.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('yamete')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/yamete.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ngakak')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ngakak.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pap')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pap.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pota')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pota.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sad')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sad.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pale')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pale.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('anjim')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/anjim.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ara')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ara2.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ara2')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ara1.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bengek')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bengek.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bernyanyi')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bernyanyi.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('krik')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/krik.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('menyukaiku')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/menyukaiku.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('why')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/why.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('what')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/why.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('gam')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/gam.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('jujur')) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/jujur.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('6281333782061')) {
            // respon tag ubah aja
            reply(`*maaf ${pushname2}, oᴡne Fbot tidak meneima tag!*`);
            const d = fs.readFileSync('./sticker/owner.webp');
            fahmi.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('fahmi')) {
            // respon tag ubah aja
            reply(`*maaf ${pushname2}, oᴡne Fbot tidak meneima tag!*`);
            const d = fs.readFileSync('./sticker/owner1.webp');
            fahmi.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (bad.includes(messagesLink)) {
            fahmi.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/kasar.mp3');
            fahmi.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (bad.includes(messagesLink)) {
            if (!isGroup) return;
            if (!isAntiLink) return;
            if (isGroupAdmins) return reply(`*${pushname2}* adalah admin group kamu tidak akan di kiᴄk`);
            fahmi.updatePresence(from, Presence.composing);
            var Kick = `${sender.split('@')[0]}@s.whatsapp.net`;
            setTimeout(() => {
               reply(`*take of otᴡ kiᴄk!*`);
            }, 11000);
            setTimeout(() => {
               fahmi.groupRemove(from, [Kick]).catch((e) => {
                  reply(`*ERROR:* ${e}`);
               });
            }, 10000);
            setTimeout(() => {
               reply(`*_「 badᴡord deteᴄted 」_*\nmaaf *${pushname2}* anda bebiᴄara kotor!, anda segea dikiᴄk dari grup *${groupMetadata.subject}*`);
            }, 0);
         }

         if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length));
         if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length));

         if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length));
         if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length));

         switch (command) {
            case 'menu':
               if (!isUser) return reply(mess.only.userB);
               if (isBanned) return reply(mess.only.benned);
               me = fahmi.user;
               user.push(sender);
               uptime = process.uptime();
               const Menu = {
                  text: `      「 *_User info_* 」

» Name: ${pushname2}
» Limit: ${limitt}
» Prefix: ${prefix}
» Registeed: √
» Tedaftar: ${user.length} 


      「 *_FF NOBITA_* 」
      
Subscribe : 
https://youtube.com/channel/UChhpwRfanc26Rx0uEPZw95w


      「 *_bot Info_* 」

» ${prefix}report
» ${prefix}info
» ${prefix}donasi
» ${prefix}oᴡne
» ${prefix}ᴄooᴡne
» ${prefix}speed
» ${prefix}daftar
» ${prefix}limit
» ${prefix}totaluse
» ${prefix}bloᴄklist
» ${prefix}banlist
» ${prefix}premiumlist
» ${prefix}bahasa


͏͏͏͏͏͏͏͏͏͏͏͏͏͏      「 *_bot Doᴡnload_* 」

» ${prefix}tiktokstalk
» ${prefix}igstalk
» ${prefix}instaᴠid
» ${prefix}instaimg
» ${prefix}instastory 
» ${prefix}playmp3
» ${prefix}fb 
» ${prefix}snaᴄk 
» ${prefix}ytmp3
» ${prefix}ytmp4
» ${prefix}joox
» ${prefix}smule
» ${prefix}ssᴡeb
» ${prefix}url2img
» ${prefix}tiktok
» ${prefix}fototiktok
» ${prefix}kbbi
» ${prefix}ᴡait
» ${prefix}trendtᴡit
» ${prefix}google


      「 *_bot Creator_* 」

» ${prefix}quotemake
» ${prefix}nulis
» ${prefix}slide
» ${prefix}trigge
» ${prefix}ᴡasted
» ${prefix}draᴡing
» ${prefix}gtaᴠ
» ${prefix}ᴡanted
» ${prefix}laptop
» ${prefix}linephoto
» ${prefix}ᴄrossgun
» ${prefix}raindrop
» ${prefix}nightbeaᴄh
» ${prefix}sketᴄh
» ${prefix}tts
» ${prefix}gemuk
» ${prefix}tupai
» ${prefix}bass
» ${prefix}sloᴡ
» ${prefix}ttp
» ${prefix}stike
» ${prefix}gifstike
» ${prefix}toimg
» ${prefix}nangis
» ${prefix}peluk
» ${prefix}ᴄium
» ${prefix}ngeᴡe
» ${prefix}img2url
» ${prefix}tomp3
» ${prefix}tomp4
» ${prefix}oᴄr


      「 *_bot Sound_* 」

» iri
» tapi
» bernyanyi
» pale
» pota
» yamete
» sad

      「 *_bot Anime_* 」

» ${prefix}neko
» ${prefix}loli
» ${prefix}husbu
» ${prefix}neonime
» ${prefix}naruto
» ${prefix}minato
» ${prefix}boruto
» ${prefix}hinata
» ${prefix}sakura
» ${prefix}sasuke
» ${prefix}toukaᴄhan
» ${prefix}riᴢe
» ${prefix}akira
» ${prefix}itori
» ${prefix}kurumi
» ${prefix}miku
» ${prefix}anime


      「 *_bot Grup_* 」

» ${prefix}ganteng
» ${prefix}ᴄantik
» ${prefix}beban
» ${prefix}ᴄlosetime
» ${prefix}modeanime 
» ${prefix}antilink
» ${prefix}antibadᴡord
» ${prefix}listbadᴡord
» ${prefix}ᴡelᴄome
» ${prefix}grup
» ${prefix}oᴡnegrup
» ${prefix}setpp
» ${prefix}infogᴄ
» ${prefix}add
» ${prefix}kiᴄk 
» ${prefix}kiᴄktime 
» ${prefix}promote 
» ${prefix}demote
» ${prefix}setname
» ${prefix}setdesᴄ
» ${prefix}grup
» ${prefix}tagme
» ${prefix}hidetag
» ${prefix}tagall
» ${prefix}mentionall
» ${prefix}jadian
» ${prefix}fitnah
» ${prefix}listadmin
» ${prefix}nsfᴡ
» ${prefix}simih


      「 *_bot Maker_* 」

» ${prefix}tahta
» ${prefix}burnpape
» ${prefix}8bit
» ${prefix}gloᴡneon
» ${prefix}gsuggest
» ${prefix}ᴄandlemug
» ${prefix}loᴠemss
» ${prefix}mugfloᴡe
» ${prefix}narutobanne
» ${prefix}papeglass
» ${prefix}romanᴄe
» ${prefix}shadoᴡ
» ${prefix}glitᴄh
» ${prefix}ᴄoffe
» ${prefix}ᴄandy
» ${prefix}hpotte
» ${prefix}ᴡoodbloᴄk


      「 *_bot Funn_* 」

» ${prefix}asupan
» ${prefix}anjing
» ${prefix}kuᴄing
» ${prefix}ᴄybepunk
» ${prefix}testime
» ${prefix}ᴢodiak
» ${prefix}hilih
» ${prefix}ᴄeᴄan
» ${prefix}ᴄogan
» ${prefix}apakah
» ${prefix}kapankah
» ${prefix}bisakah
» ${prefix}rate
» ${prefix}ᴡatak
» ${prefix}hobby
» ${prefix}infogempa
» ${prefix}infonomor
» ${prefix}quotes
» ${prefix}truth
» ${prefix}dare
» ${prefix}katabijak
» ${prefix}fakta
» ${prefix}darkjokes
» ${prefix}buᴄin
» ${prefix}pantun
» ${prefix}kataᴄinta
» ${prefix}jadᴡaltᴠnoᴡ
» ${prefix}randomkpop
» ${prefix}hekebuᴄin
» ${prefix}katailham
» ${prefix}jarak
» ${prefix}translate
» ${prefix}pasangan 
» ${prefix}gantengᴄek 
» ${prefix}ᴄantikᴄek 
» ${prefix}artinama 
» ${prefix}pesengay 
» ${prefix}pbuᴄin 
» ${prefix}bpfont 
» ${prefix}textstyle 
» ${prefix}jadᴡaltᴠ 
» ${prefix}lirik 
» ${prefix}ᴄhord 
» ${prefix}ᴡiki 
» ${prefix}brainly 
» ${prefix}resepmasakan 
» ${prefix}beitahoax
» ${prefix}map 
» ${prefix}film 
» ${prefix}pinteest
» ${prefix}infoᴄuaᴄa 
» ${prefix}jamdunia 
» ${prefix}mimpi
» ${prefix}infoalamat 
» ${prefix}playstore
» ${prefix}readmore
» ${prefix}puisiimg
» ${prefix}asupan
» ${prefix}tebakgambar
» ${prefix}ᴄaklontong
» ${prefix}family100
» ${prefix}memeindo
» ${prefix}kalkulator
» ${prefix}moddroid
» ${prefix}happymod


      「 *_bot Sange_* 」

» ${prefix}ᴄesex
» ${prefix}randombokep
» ${prefix}pornhub
» ${prefix}xᴠideos
» ${prefix}nsfᴡloli
» ${prefix}nsfᴡbloᴡjob
» ${prefix}nsfᴡneko
» ${prefix}nsfᴡtrap
» ${prefix}hentai
» ${prefix}nekopoi


      「 *_bot Religi* 」

» ${prefix}jadᴡalsholat
» ${prefix}quran
» ${prefix}quranlist
» ${prefix}quransurah 


      「 *_bot Other_* 」

» ${prefix}beᴄrypt 
» ${prefix}enᴄode64
» ${prefix}deᴄode64
» ${prefix}enᴄode32
» ${prefix}deᴄode32
» ${prefix}enᴄbinary 
» ${prefix}deᴄbinary 
» ${prefix}enᴄoᴄtal 
» ${prefix}deᴄoᴄtal 
» ${prefix}hashidentifie 
» ${prefix}dorking 
» ${prefix}pastebin 
» ${prefix}tinyurl 
» ${prefix}bitly 


      「 *_bot Spam_* 」

» ${prefix}spamᴄall 
» ${prefix}spamgmail 


      「 *_bot Owner_* 」

» ${prefix}addprem
» ${prefix}remoᴠeprem
» ${prefix}addbadᴡord
» ${prefix}delbadᴡord
» ${prefix}addbuᴄin
» ${prefix}addaudio
» ${prefix}addstiᴄke
» ${prefix}setmemlimit
» ${prefix}resetlimit
» ${prefix}setlimit
» ${prefix}setreply
» ${prefix}setprefix
» ${prefix}setnamebot
» ${prefix}setppbot
» ${prefix}bᴄ
» ${prefix}bᴄgᴄ
» ${prefix}ban
» ${prefix}unban
» ${prefix}bloᴄk
» ${prefix}unbloᴄk
» ${prefix}ᴄlearall
» ${prefix}delete
» ${prefix}ᴄlone
» ${prefix}leaᴠe


Create By _@fahmicog_`,

                  contextInfo: {
                     mentionedJid: [sender],
                  },
               };
               fahmi.sendMessage(from, Menu, text, {
                  quoted: {
                     key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },
                     message: {
                        imageMessage: {
                           url: 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                           mimetype: 'image/jpeg',
                           caption: 'Youtube : Fahmi Cog',
                           fileSha256: '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                           fileLength: '28777',
                           height: 1080,
                           width: 1079,
                           mediaKey: 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                           fileEncSha256: 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
                           directPath: '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',
                           mediaKeyTimestamp: '1610993486',
                           jpegThumbnail: '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',
                           scansSidecar: '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==',
                        },
                     },
                  },
               });
               break;
            case 'zodiak':
               if (args.length < 1) return reply('Masukkan nama zodiak');
               fahmi.updatePresence(from, Presence.composing);
               if (!isUser) return reply(mess.only.userB);
               teks = body.slice(8);
               try {
                  data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${VthearApi}`);
                  hasil = `Zodiak : *${data.result.zodiak}*\nRamalan hari ini : *${data.result.ramalan}*\n${data.result.inspirasi}`;
                  reply(hasil);
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'cyberpunk':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               fahmi.updatePresence(from, Presence.composing);
               co = ['anime cyberpunk', 'fotografi cyberpunk', 'tokyo cyberpunk'];
               nk = co[Math.floor(Math.random() * co.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  fahmi.sendMessage(from, pok, image, {
                     quoted: mek,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'wasted':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ger);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  teks = `${anu.display_url}`;
                  ranp = getRandom('.gif');
                  rano = getRandom('.webp');
                  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`;
                  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     fs.unlinkSync(ranp);
                     if (err) return reply(mess.error.stick);
                     nobg = fs.readFileSync(rano);
                     fahmi.sendMessage(from, nobg, sticker, {
                        quoted: mek,
                     });
                     fs.unlinkSync(rano);
                  });
               } else {
                  reply('Gunakan foto!');
               }
               break;

            case 'drawing':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'nightbeach':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'laptop':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'linephoto':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'raindrop':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'sketch':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'crossgun':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'wanted':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'gtav':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`);
                  fahmi.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;
            case 'cecan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               tels = body.slice(5);
               fahmi.updatePresence(from, Presence.composing);
               ty = ['ulzhang girl', 'cewek cantik', 'cewe hijab', 'cute girl', 'cewe rusia cantik', 'cewe jepang cantik', 'cecan indo'];
               nk = ty[Math.floor(Math.random() * ty.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  fahmi.sendMessage(from, pok, image, {
                     quoted: mek,
                     caption: `Gimana ?`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'cogan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               fahmi.updatePresence(from, Presence.composing);
               uk = ['ulzhang boy', 'cowok keren', 'cowo ganteng', 'cogan', 'cogan jawa'];
               nk = uk[Math.floor(Math.random() * uk.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  fahmi.sendMessage(from, pok, image, {
                     quoted: mek,
                     caption: `Wah ganteng kek gua`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'jadian':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               jds = [];
               const jdii = groupMembers;
               const koss = groupMembers;
               const akuu = jdii[Math.floor(Math.random() * jdii.length)];
               const diaa = koss[Math.floor(Math.random() * koss.length)];
               teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `;
               jds.push(akuu.jid);
               jds.push(diaa.jid);
               mentions(teks, jds, true);
               break;
            case 'cantik':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               membr = [];
               const mes = groupMembers;
               const msk = groupMembers;
               const siaps = mes[Math.floor(Math.random() * mes.length)];
               const sips = pushname2[Math.floor(Math.random() * msk.length)];
               teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`;
               membr.push(siaps.jid);
               mentions(teks, membr, true);
               break;
            case 'slow':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=0.7,asetrate=44100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  fahmi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'gemuk':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=1.6,asetrate=22100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  fahmi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'tupai':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=0.5,asetrate=65100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  fahmi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'ganteng':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               membr = [];
               const nus = groupMembers;
               const msl = groupMembers;
               const siapss = nus[Math.floor(Math.random() * nus.length)];
               const sipss = pushname2[Math.floor(Math.random() * msl.length)];
               teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`;
               membr.push(siapss.jid);
               mentions(teks, membr, true);
               break;
            case 'beban':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               membr = [];
               const nge = groupMembers;
               const tod = groupMembers;
               const beb = nge[Math.floor(Math.random() * nge.length)];
               const an = pushname2[Math.floor(Math.random() * tod.length)];
               teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`;
               membr.push(beb.jid);
               mentions(teks, membr, true);
               break;
            case 'brainly':
               if (!isUser) return reply(mess.only.userB);

               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               brien = body.slice(9);
               brainly(`${brien}`).then((res) => {
                  teks = '❉───────────────────────❉\n';
                  for (let Y of res.data) {
                     teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`;
                  }
                  fahmi.sendMessage(from, teks, text, { quoted: mek, detectLinks: false });
                  console.log(res);
               });
               await limitAdd(sender);
               break;
            case 'daftar':
               fahmi.updatePresence(from, Presence.composing);
               if (isUser) return reply('*kamu sudah menjadi teman Fbot :d*');
               if (isBanned) return reply(mess.only.benned);
               user.push(sender);
               fs.writeFileSync('./database/json/user.json', JSON.stringify(user));
               try {
                  ppimg = await fahmi.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`);
               } catch {
                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               captionnya = `╭─「 *_pendaftaran_* 」\`\`\`\n│ pendaftaran behasil dengan sn: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`pada ${date} ${time}\`\`\`\n│\`\`\`「 nama 」: ${pushname2}\`\`\`\n│\`\`\`「 nomor 」: wa.me/${
                  sender.split('@')[0]
               }\`\`\`\n│\`\`\`untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}help/menu\`\`\`\n│\`\`\`\n│total pengguna: ${user.length} orang\`\`\`\n╰────────────────`;
               daftarimg = await getBuffer(ppimg);
               fahmi.sendMessage(from, daftarimg, image, { quoted: mek, caption: captionnya });
               break;
            case 'help':
               if (!isUser) return reply(mess.only.userB);
               if (isBanned) return reply(mess.only.benned);
               uptime = process.uptime();
               user.push(sender);
               myMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
               myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
               var tgl = new Date();
               var day = tgl.getDate();
               bulan = tgl.getMonth();
               var thisDay = tgl.getDay(),
                  thisDay = myDays[thisDay];
               var yy = tgl.getYear();
               var year = yy < 1000 ? yy + 1900 : yy;
               const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
               await costum(help(prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal), text, FarhanGans, rmenu);
               break;
            case 'infobot':
               await costum(bottt(prefix), text, FarhanGans, botinfo);
               break;
            case 'profile':
               fahmi.updatePresence(from, Presence.composing);

               if (!isUser) return reply(mess.only.userB);
               if (isBanned) return reply(mess.only.benned);
               try {
                  profil = await fahmi.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`);
               } catch {
                  profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               profile = `╭─「 *_profile anda_* 」\n│• *name:* ${pushname2}\n│• *use tedaftar:* √\n│• *link:* wa.me/${sender.split('@')[0]}\n╰────────────────────`;
               buff = await getBuffer(profil);
               fahmi.sendMessage(from, buff, image, { quoted: mek, caption: profile });
               break;

            case 'bahasa':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               fahmi.sendMessage(from, bahasa(prefix), text, { quoted: mek });
               break;
            case 'donasi':
            case 'donate':
               fahmi.sendMessage(from, donasi(name), text, { quoted: mek });
               break;
            case 'info':
               me = fahmi.user;
               user.push(sender);
               uptime = process.uptime();
               teks = `        「Bot Info」\n\n➻ *Nama bot* : ${me.name}\n➻ *Oᴡne bot* : Fahmi Hdytllah\n➻ *Prefix* : 「${prefix} 」\n➻ *Total bloᴄk* : ${blocked.length}\n➻ *Aktif sejak* : ${kyun(uptime)}\n➻ *Total pengguna* : ${
                  user.length
               } use\n\n Follow : https://www.instagram.com/fahmicog`;
               const daca = fs.readFileSync('fbot.jpg');
               fahmi.sendMessage(from, daca, image, { quoted: mek, caption: teks });
               break;
            case 'totaluser':
               fahmi.updatePresence(from, Presence.composing);

               if (!isUser) return reply(mess.only.userB);
               if (!isOwner) return reply(mess.only.ownerB);
               teks = `╭────「 *TOTAL USER ${name}* 」\n`;
               no = 0;
               for (let hehehe of user) {
                  no += 1;
                  teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`;
               }
               teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`;
               fahmi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: user } });
               break;
            case 'blocklist':
               teks = 'List Block :\n';
               for (let block of blocked) {
                  teks += `~> @${block.split('@')[0]}\n`;
               }
               teks += `Total : ${blocked.length}`;
               fahmi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: blocked } });
               break;
            case 'banlist':
               ben = '```List Banned``` :\n';
               for (let banned of ban) {
                  ben += `~> @${banned.split('@')[0]}\n`;
               }
               ben += `Total : ${ban.length}`;
               fahmi.sendMessage(from, ben.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: ban } });
               break;
            case 'premiumlist':
               fahmi.updatePresence(from, Presence.composing);

               if (!isUser) return reply(mess.only.userB);
               teks = `╭─「 *TOTAL USER PREMIUM ${name}* 」\n`;
               no = 0;
               for (let prem of premium) {
                  no += 1;
                  teks += `[${no.toString()}] @${prem.split('@')[0]}\n`;
               }
               teks += `│+ Total User Premium : ${premium.length}\n╰──────⎿ *${name}* ⏋────`;
               fahmi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: premium } });
               break;
            case 'ban':
               fahmi.updatePresence(from, Presence.composing);
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               ban = mentioned;
               reply(`berhasil banned : ${ban}`);
               break;
            case 'tahta':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}tahta Fbot`);
               teks = body.slice(6);
               reply(mess.wait);
               buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${VthearApi}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'burnpaper':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper Fbot`);
               todi = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case '8bit':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}8bit 𝙼𝚎𝚐𝚞𝚖𝚒𝚗/𝙱𝙾𝚃`);
               ds = `${body.slice(10)}`;
               tex1 = ds.split('/')[0];
               tex2 = ds.split('/')[1];
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, { method: 'get' });
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'glowneon':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}glowneon Fbot`);
               tekas = body.slice(9);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'gsuggest':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest 𝙼𝚎𝚐𝚞𝚖𝚒𝚗/𝙱𝙾𝚃/wea`);
               du = `${body.slice(9)}`;
               ted1 = du.split('/')[0];
               ted2 = du.split('/')[1];
               ted3 = du.split('/')[2];
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, { method: 'get' });
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'candlemug':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}candlemug Fbot`);
               ddu = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'lovemss':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}lovemss Fbot`);
               lop = body.slice(8);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'mugflower':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}mugflower Fbot`);
               mug = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'narutobanner':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner Fbot`);
               nar = body.slice(13);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'paperglass':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}paperglass Fbot`);
               papg = body.slice(11);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'romance':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}romance Fbot`);
               roce = body.slice(7);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'shadow':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}shadow Fbot`);
               sdow = body.slice(7);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'glitch':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}glitch 𝙼𝚎𝚐𝚞𝚖𝚒𝚗/𝙱𝙾𝚃`);
               gl = `${body.slice(7)}`;
               gel1 = gl.split('/')[0];
               gel2 = gl.split('/')[1];
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, { method: 'get' });
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'coffe':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}coffe Fbot`);
               kop = body.slice(6);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'candy':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}candy Fbot`);
               cndy = body.slice(6);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'hpotter':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}hpotter Fbot`);
               hpter = body.slice(8);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'woodblock':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}woodblock Fbot`);
               woblk = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'addprem':
               fahmi.updatePresence(from, Presence.composing);
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               premium = addpremium;
               reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`);
               break;
            case 'removeprem':
               if (!isOwner) return reply(mess.only.ownerB);
               rprem = body.slice(13);
               premium.splice(`${rprem}@s.whatsapp.net`, 1);
               reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`);
               break;
            case 'unban':
               if (!isOwner) return reply(mess.only.ownerB);
               bnnd = body.slice(8);
               ban.splice(`${bnnd}@s.whatsapp.net`, 1);
               reply(`Nomor wa.me/${bnnd} telah di unban!`);
               break;
            case 'block':
               fahmi.updatePresence(from, Presence.composing);
               if (!isGroup) return reply(mess.only.group);
               if (!isOwner) return reply(mess.only.ownerB);
               fahmi.blockUser(`${body.slice(7)}@c.us`, 'add');
               fahmi.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text);
               break;
            case 'unblock':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isOwner) return reply(mess.only.ownerB);
               fahmi.blockUser(`${body.slice(9)}@c.us`, 'remove');
               fahmi.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text);
               break;
            case 'readmore':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('teks nya mana om?');
               var kls = body.slice(9);
               var has = kls.split('/')[0];
               var kas = kls.split('/')[1];
               if (args.length < 1) return reply(mess.blank);
               fahmi.sendMessage(
                  from,
                  `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`,
                  text,
                  { quoted: mek }
               );
               break;
            case 'resetlimit':
               if (!isOwner) return reply(mess.only.ownerB);
               var obj = [];
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj));
               await reply(`LIMIT BERHASIL DI RESET`);
               break;
            case 'limit':
               var found = false;
               const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'));
               for (let lmt of limidat) {
                  if (lmt.id === sender) {
                     let limitCounts = limitt - lmt.limit;
                     if (limitCounts <= 0) return reply(from, `Limit anda habis`, id);
                     await reply(`*LIMIT ANDA TINGGAL: ${limitCounts}*`);
                     found = true;
                  }
               }
               if (found === false) {
                  let obj = { id: sender, limit: 1 };
                  limit.push(obj);
                  fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                  await reply(`LIMIT ANDA ${limitCounts}`);
               }
               break;
            case 'ocr':
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  const media = await fahmi.downloadAndSaveMediaMessage(encmedia);
                  reply(mess.wait);
                  await recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
                     .then((teks) => {
                        reply(teks.trim());
                        fs.unlinkSync(media);
                     })
                     .catch((err) => {
                        reply(err.message);
                        fs.unlinkSync(media);
                     });
               } else {
                  reply('Foto aja gan Jangan Video');
               }
               await limitAdd(sender);
               break;
            case 'gifstiker':
            case 'stiker':
            case 'sticker':
            case 'gifsticker':
            case 'stickergif':
            case 'stikergif':
            case 'sgif':
            case 's':
               if (isBanned) return reply(mess.only.benned);
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  reply(mess.wait);
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  const media = await fahmi.downloadAndSaveMediaMessage(encmedia);
                  ran = getRandom('.webp');
                  await ffmpeg(`./${media}`)
                     .input(media)
                     .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`);
                     })
                     .on('error', function (err) {
                        console.log(`Error : ${err}`);
                        fs.unlinkSync(media);
                        reply(mess.error.stick);
                     })
                     .on('end', function () {
                        console.log('Finish');
                        fahmi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek });
                        fs.unlinkSync(media);
                        fs.unlinkSync(ran);
                     })
                     .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                     ])
                     .toFormat('webp')
                     .save(ran);
               } else if (((isMedia && mek.message.videoMessage.seconds < 11) || (isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) && args.length == 0) {
                  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  const media = await fahmi.downloadAndSaveMediaMessage(encmedia);
                  ran = getRandom('.webp');
                  reply(mess.wait);
                  await ffmpeg(`./${media}`)
                     .inputFormat(media.split('.')[1])
                     .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`);
                     })
                     .on('error', function (err) {
                        console.log(`Error : ${err}`);
                        fs.unlinkSync(media);
                        tipe = media.endsWith('.mp4') ? 'video' : 'gif';
                        reply(`Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.`);
                     })
                     .on('end', function () {
                        console.log('Finish');
                        buff = fs.readFileSync(ran);
                        fahmi.sendMessage(from, buff, sticker);
                        fs.unlinkSync(media);
                        fs.unlinkSync(ran);
                     })
                     .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                     ])
                     .toFormat('webp')
                     .save(ran);
               }
               await limitAdd(sender);
               break;
            case 'trigger':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await fahmi.downloadAndSaveMediaMessage(ger);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  teks = `${anu.display_url}`;
                  ranp = getRandom('.gif');
                  rano = getRandom('.webp');
                  anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`;
                  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     fs.unlinkSync(ranp);
                     if (err) return reply(mess.error.stick);
                     nobg = fs.readFileSync(rano);
                     fahmi.sendMessage(from, nobg, sticker, { quoted: mek });
                     fs.unlinkSync(rano);
                  });
               } else {
                  reply('Gunakan foto!');
               }
               break;

            case 'img2url':
               if (!isUser) return reply(mess.only.userB);

               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
               var media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               var imgbb = require('imgbb-uploader');
               imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                  .then((data) => {
                     var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`;
                     ibb = fs.readFileSync(media);
                     fahmi.sendMessage(from, ibb, image, { quoted: mek, caption: caps });
                  })
                  .catch((err) => {
                     throw err;
                  });
               await limitAdd(sender);
               break;

            case 'kalkulator':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1)
                  return reply(
                     `[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`
                  );
               mtk = `${body.slice(12)}`;
               anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, { method: 'get' });
               fahmi.sendMessage(from, `*${anu.result.data}*`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'owner':
               fahmi.sendMessage(from, { displayname: 'jeff', vcard: vcard }, MessageType.contact, { quoted: mek });
               fahmi.sendMessage(from, '*_saᴠe ya ntar saᴠe baᴄk :)_*', text, { quoted: mek });
               break;
            case 'coowner':
               fahmi.sendMessage(from, { displayname: 'jeff', vcard: vcard1 }, MessageType.contact, { quoted: mek });
               fahmi.sendMessage(from, '*_itu paᴄarku eh maksudnya oᴡneku >-<_*', text, { quoted: mek });
               break;
            case 'fitnah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`);
               var gh = body.slice(8);
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               var replace = gh.split('/')[0];
               var target = gh.split('/')[1];
               var bot = gh.split('/')[2];
               fahmi.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } });
               break;

            case 'infogc':
            case 'groupinfo':
            case 'infogrup':
            case 'grupinfo':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               fahmi.updatePresence(from, Presence.composing);
               if (!isGroup) return reply(mess.only.group);
               try {
                  ppUrl = await fahmi.getProfilePicture(from);
               } catch {
                  ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               reply(mess.wait); // leave empty to get your own
               buffer = await getBuffer(ppUrl);
               fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}` });
               break;
            case 'trendtwit':
               fahmi.updatePresence(from, Presence.composing);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, { method: 'get' });
               reply(mess.wait);
               teks = '=================\n';
               for (let i of data.result) {
                  teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'testime':
               setTimeout(() => {
                  fahmi.sendMessage(from, 'Waktu habis:v', text, { quoted: mek }); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '5 Detik lagi', text, { quoted: mek }); // ur cods
               }, 5000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '10 Detik lagi', text, { quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               break;
            case 'neonime':
               fahmi.updatePresence(from, Presence.composing);
               data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, { method: 'get' });
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isGroup) return reply(mess.only.group);
               reply(mess.wait);
               teks = '#############################\n';
               for (let i of data.result) {
                  teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'animehug':
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, { method: 'get' });
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isGroup) return reply(mess.only.group);
               reply(mess.wait);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  buffer = fs.readFileSync(rano);
                  fahmi.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gruplink':
            case 'grouplink':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               linkgc = await fahmi.groupInviteCode(from);
               yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`;
               fahmi.sendMessage(from, yeh, text, { quoted: mek });
               break;
            case 'hidetag':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               var value = body.slice(9);
               var group = await fahmi.groupMetadata(from);
               var member = group['participants'];
               var mem = [];
               member.map(async (adm) => {
                  mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
               });
               var options = {
                  text: value,
                  contextInfo: { mentionedJid: mem },
                  quoted: mek,
               };
               fahmi.sendMessage(from, options, text);
               break;
            case 'gantengcek':
            case 'cekganteng':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               ganteng = body.slice(12);
               const gan = ['10%', '30%', '20%', '40%', '50%', '60%', '70%', '62%', '74%', '83%', '97%', '100%', '29%', '94%', '75%', '82%', '41%', '39%'];
               const teng = gan[Math.floor(Math.random() * gan.length)];
               fahmi.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *' + ganteng + '*\n\nJawaban : ' + teng + '', text, { quoted: mek });
               break;
            case 'cantikcek':
            case 'cekcantik':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               cantik = body.slice(11);
               if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??');
               const can = [
                  '10% banyak perawatan ya kak:v\nCanda Perawatan:v',
                  '30% Semangat Kaka Merawat Dirinya><',
                  '20% Semangat Ya Kakak',
                  '40% Wahh Kaka><',
                  '50% kaka cantik deh><',
                  '60% Hai Cantik:v',
                  '70% Hai Ukhty(:',
                  '62% Kakak Cantik><',
                  '74% Kakak ni cantik deh><',
                  '83% Love You Kakak><',
                  '97% Assalamualaikum Ukhty',
                  '100% Kakak Pake Susuk ya??:v',
                  '29% Semangat Kakak:)',
                  '94% Hai Cantik><',
                  '75% Hai Kakak Cantik',
                  '82% wihh Kakak Pasti Sering Perawatan kan??',
                  '41% Semangat:)',
                  '39% Lebih Semangat',
               ];
               const tik = can[Math.floor(Math.random() * can.length)];
               fahmi.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *' + cantik + '*\n\nPersen Kecantikan : ' + tik + '', text, { quoted: mek });
               break;
            case 'ownergrup':
            case 'ownergroup':
               fahmi.updatePresence(from, Presence.composing);
               options = {
                  text: `Owner Group ini adalah : wa.me/${from.split('-')[0]}`,
                  contextInfo: { mentionedJid: [from] },
               };
               fahmi.sendMessage(from, options, text, { quoted: mek });
               break;
            case 'leave':
               if (!isGroup) return reply(mess.only.group);
               if (!isOwner) return reply(mess.only.ownerB);
               anu = await fahmi.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId);
               break;
            case 'setname':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               fahmi.groupUpdateSubject(from, `${body.slice(9)}`);
               fahmi.sendMessage(from, `\`\`\`âœ“Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: mek });
               break;
            case 'setdesc':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               fahmi.groupUpdateDescription(from, `${body.slice(9)}`);
               fahmi.sendMessage(from, `\`\`\`âœ“Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek });
               break;
            case 'tts':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return fahmi.sendMessage(from, 'Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*', text, { quoted: mek });
               const gtts = require('./lib/gtts')(args[0]);
               if (args.length < 2) return fahmi.sendMessage(from, 'Textnya mana gan?', text, { quoted: mek });
               dtt = body.slice(9);
               ranm = getRandom('.mp3');
               rano = getRandom('.ogg');
               dtt.length > 600
                  ? reply('Textnya kebanyakan gan')
                  : gtts.save(ranm, dtt, function () {
                       exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                          fs.unlinkSync(ranm);
                          buff = fs.readFileSync(rano);
                          if (err) return reply('Gagal gan:(');
                          reply(mess.wait);
                          fahmi.sendMessage(from, buff, audio, { quoted: mek, ptt: true });
                          fs.unlinkSync(rano);
                       });
                    });
               await limitAdd(sender);
               break;
            case 'translate':
            case 'translete':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return fahmi.sendMessage(from, 'Kode Bahasanya???', text, { quoted: mek });
               if (args.length < 2) return fahmi.sendMessage(from, 'Text Yg Mau Di translate??', text, { quoted: mek });
               ts = body.slice(11);
               kode = ts.split('/')[0];
               teks = ts.split('/')[1];
               anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`);
               reply(mess.wait);
               translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`;
               fahmi.sendMessage(from, translate, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'ts':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return fahmi.sendMessage(from, 'Kode Bahasanya???', text, { quoted: mek });
               if (args.length < 2) return fahmi.sendMessage(from, 'Text Yg Mau Di translate??', text, { quoted: mek });
               ts = body.slice(4);
               kode = ts.split('/')[0];
               teks = ts.split('/')[1];
               anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`);
               reply(mess.wait);
               ts = `Text Asli: *${body.slice(7)}*\n\nHasil: *${anu.text}*`;
               fahmi.sendMessage(from, ts, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'setpp':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               media = await fahmi.downloadAndSaveMediaMessage(mek);
               await fahmi.updateProfilePicture(from, media);
               reply(mess.wait);
               reply(`\`\`\`âœ“Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`);
               break;
            case 'apakah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               apakah = body.slice(1);
               const apakahh = ['Ya', 'Tidak', 'Ga tau'];
               const kah = apakahh[Math.floor(Math.random() * apakahh.length)];
               fahmi.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: mek });
               break;
            case 'rate':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               rate = body.slice(1);
               ratee = ['100%', '95%', '90%', '85%', '80%', '75%', '70%', '65%', '60%', '55%', '50%', '45%', '40%', '35%', '30%', '25%', '20%', '15%', '10%', '5%'];
               const te = ratee[Math.floor(Math.random() * ratee.length)];
               fahmi.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '', text, { quoted: mek });
               break;
            case 'watak':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               watak = body.slice(1);
               wa = ['penyayang', 'pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'baperan', 'Baik Hati', 'penyabar', 'Uwu', 'top deh, pokoknya', 'Suka Membantu'];
               const tak = wa[Math.floor(Math.random() * wa.length)];
               fahmi.sendMessage(from, 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak, text, { quoted: mek });
               break;
            case 'hobby':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hobby = body.slice(1);
               hob = [
                  'Memasak',
                  'Membantu Atok',
                  'Mabar',
                  'Nobar',
                  'Sosmed an',
                  'Membantu Orang lain',
                  'Nonton Anime',
                  'Nonton Drakor',
                  'Naik Motor',
                  'Nyanyi',
                  'Menari',
                  'Bertumbuk',
                  'Menggambar',
                  'Foto fotoan Ga jelas',
                  'Maen Game',
                  'Berbicara Sendiri',
               ];
               const by = hob[Math.floor(Math.random() * hob.length)];
               fahmi.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: mek });
               break;
            case 'bisakah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               bisakah = body.slice(1);
               const bisakahh = ['Bisa', 'Tidak Bisa', 'Ga tau'];
               const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)];
               fahmi.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: mek });
               break;
            case 'kapankah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               kapankah = body.slice(1);
               const kapankahh = ['1 Minggu lagi', '1 Bulan lagi', '1 Tahun lagi', '100 tahun lagi', 'gatau', '2030', '1 Jam lagi', '1 Menit lagi'];
               const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)];
               fahmi.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: mek });
               break;
            case 'truth':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, { method: 'get' });
               ttrth = `${anu.Dare}`;
               truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
               fahmi.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: mek });
               await limitAdd(sender);
               break;
            case 'dare':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, { method: 'get' });
               der = `${anu.Dare}`;
               tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
               fahmi.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n' + der });
               await limitAdd(sender);
               break;
            case 'speed':
            case 'ping':
               const timestamp = speed();
               const latensi = speed() - timestamp;
               fahmi.sendMessage(from, `Speed: ${latensi.toFixed(4)} _Second_`, text, { quoted: mek });
               break;
            case 'tagme':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               var nom = mek.participant;
               const tag = {
                  text: `@${nom.split('@s.whatsapp.net')[0]} tag!`,
                  contextInfo: { mentionedJid: [nom] },
               };
               fahmi.sendMessage(from, tag, text, { quoted: mek });
               break;
            case 'lirik':
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`);
               thum = await getBuffer(anu.result.thumb);
               teks = `* LAGU DI TEMUKAN *\n\n*Judul* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*Public in* : ${anu.result.dipublikasi}\n*Lyrics* : ${anu.result.lirik}`;
               fahmi.sendMessage(from, thum, image, { quoted: mek, caption: teks });
               break;
            case 'report':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               const pesan = body.slice(8);
               if (pesan.length > 300) return fahmi.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek });
               var nomor = mek.participant;
               const teks1 = `*[REPORT]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${pesan}`;

               var options = {
                  text: teks1,
                  contextInfo: { mentionedJid: [nomor] },
               };
               fahmi.sendMessage('6281333782061@s.whatsapp.net', options, text, { quoted: mek });
               reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.');
               break;
            case 'request':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               const cfrr = body.slice(8);
               if (cfrr.length > 300) return fahmi.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek });
               var nomor = mek.participant;
               const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${cfrr}`;

               var options = {
                  text: ress,
                  contextInfo: { mentionedJid: [nomor] },
               };
               fahmi.sendMessage('6281333782061@s.whatsapp.net', options, text, { quoted: mek });
               reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.');
               break;
            case 'memeindo':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`);
               buffer = await getBuffer(memein.result);
               fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: '.......' });
               await limitAdd(sender);
               break;
            case 'ssweb':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Urlnya mana gan?');
               teks = `${body.slice(7)}`;
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=tablet&url=${teks}&apiKey=${BarBarApi}`);
               ssweb = await getBuffer(anu.result);
               fahmi.sendMessage(from, ssweb, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'neko':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               fahmi.updatePresence(from, Presence.composing);
               uk = ['anime neko'];
               nk = uk[Math.floor(Math.random() * uk.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  fahmi.sendMessage(from, pok, image, {
                     quoted: mek,
                     caption: `*Neko*`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'loli':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LOLI`, { method: 'get' });
               naru = JSON.parse(JSON.stringify(anu));
               to = naru[Math.floor(Math.random() * naru.length)];
               nye = await getBuffer(to);
               fahmi.sendMessage(from, nye, image, { caption: '*Loli*', quoted: mek });
               await limitAdd(sender);
               break;
            case 'nsfwloli':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limits.limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result.result);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'Jangan jadiin bahan buat comli om' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nsfwblowjob':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'Jangan jadiin bahan buat comli om' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nsfwneko':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nsfwtrap':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'hentai':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'hilih':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Teksnya mana gan?');
               anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'chord':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??');
               tels = body.slice(7);
               anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'infogempa':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               buff = await getBuffer(anu.map);
               reply(mess.wait);
               gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`;
               fahmi.sendMessage(from, buff, image, { quoted: mek, caption: gempa });
               await limitAdd(sender);
               break;
            case 'kucing':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, { method: 'get' });
               reply(mess.wait);
               buff = await getBuffer(anu.result.url);
               fahmi.sendMessage(from, buff, image, { quoted: mek, caption: 'meong🐈' });
               await limitAdd(sender);
               break;

            // only grup fitur anime
            case 'anime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, { method: 'get' });
               reply(mess.wait);
               pok = await getBuffer(anu.result);
               fahmi.sendMessage(from, pok, image, { quoted: mek, caption: 'nihhh' });
               await limitAdd(sender);
               break;
            case 'naruto':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, { method: 'get' });
               naru = JSON.parse(JSON.stringify(anu));
               to = naru[Math.floor(Math.random() * naru.length)];
               nye = await getBuffer(to);
               fahmi.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'minato':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, { method: 'get' });
               min = JSON.parse(JSON.stringify(anu));
               ato = min[Math.floor(Math.random() * min.length)];
               nye = await getBuffer(ato);
               fahmi.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'boruto':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, { method: 'get' });
               bor = JSON.parse(JSON.stringify(anu));
               uto = bor[Math.floor(Math.random() * bor.length)];
               nye = await getBuffer(uto);
               fahmi.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'hinata':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, { method: 'get' });
               hina = JSON.parse(JSON.stringify(anu));
               ta = hina[Math.floor(Math.random() * hina.length)];
               nye = await getBuffer(ta);
               fahmi.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'sasuke':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, { method: 'get' });
               sasu = JSON.parse(JSON.stringify(anu));
               ke = sasu[Math.floor(Math.random() * sasu.length)];
               nye = await getBuffer(ke);
               fahmi.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'sakura':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, { method: 'get' });
               sak = JSON.parse(JSON.stringify(anu));
               kura = sak[Math.floor(Math.random() * sak.length)];
               nye = await getBuffer(kura);
               fahmi.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek });
               await limitAdd(sender);
               break;

            case 'kaneki':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, { method: 'get' });
               var ka = JSON.parse(JSON.stringify(anu.result));
               var ne = ka[Math.floor(Math.random() * ka.length)];
               ki = await getBuffer(ne);
               fahmi.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'toukachan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, { method: 'get' });
               tou = JSON.parse(JSON.stringify(anu));
               ka = tou[Math.floor(Math.random() * tou.length)];
               nye = await getBuffer(ka);
               fahmi.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'rize':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, { method: 'get' });
               ri = JSON.parse(JSON.stringify(anu));
               ze = ri[Math.floor(Math.random() * ri.length)];
               nye = await getBuffer(ze);
               fahmi.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'akira':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, { method: 'get' });
               ak = JSON.parse(JSON.stringify(anu));
               ara = ak[Math.floor(Math.random() * ak.length)];
               nye = await getBuffer(ara);
               fahmi.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'itori':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, { method: 'get' });
               it = JSON.parse(JSON.stringify(anu));
               ori = it[Math.floor(Math.random() * it.length)];
               nye = await getBuffer(ori);
               fahmi.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'kurumi':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, { method: 'get' });
               kur = JSON.parse(JSON.stringify(anu));
               imi = kur[Math.floor(Math.random() * kur.length)];
               nye = await getBuffer(imi);
               fahmi.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'miku':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, { method: 'get' });
               mi = JSON.parse(JSON.stringify(anu));
               ku = mi[Math.floor(Math.random() * mi.length)];
               nye = await getBuffer(ku);
               fahmi.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            // akhir fitur anime

            case 'anjing':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, { method: 'get' });
               reply(mess.wait);
               n = JSON.parse(JSON.stringify(anu));
               nimek = n[Math.floor(Math.random() * n.length)];
               pok = await getBuffer(nimek);
               fahmi.sendMessage(from, pok, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'resepmasakan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, { method: 'get' });
               masak = '==============================\n';
               for (let msk of anu.results) {
                  masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`;
               }
               reply(masak.trim());
               await limitAdd(sender);
               break;
            case 'cersex':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               sex = await getBuffer(anu.result.image);
               reply(mess.wait);
               cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`;
               fahmi.sendMessage(from, sex, image, { quoted: mek, caption: cerita });
               await limitAdd(sender);
               break;
            case 'randomkpop':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, { method: 'get' });
               buff = await getBuffer(anu.result);
               fahmi.sendMessage(from, buff, image, { quoted: mek });
               break;
            case 'puisiimg':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, { method: 'get' });
               fahmi.sendMessage(from, pus, image, { quoted: mek });
               break;
            case 'playstore':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               ps = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, { method: 'get' });
               store = '======================\n';
               for (let ply of anu.result) {
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`;
               }
               reply(store.trim());
               break;
            case 'pornhub':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('teksnya mana gan?');
               teks = body.slice(9);
               anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, { method: 'get' });
               teks = `===============\n`;
               for (let bokep of anu.result) {
                  teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'nekopoi':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('teksnya mana gan?');
               teks = body.slice(9);
               anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, { method: 'get' });
               teks = `===============\n`;
               for (let neko of anu.result) {
                  teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'xvideos':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('teksnya mana gan?');
               anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, { method: 'get' });
               teks = `===============\n`;
               for (let b of anu.result) {
                  teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;

            case 'fb':
               fahmi.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Urlnya mana gan?');
               if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               fahmi.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, { quoted: mek });
               efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`;
               tefbe = await getBuffer(anu.thumb);
               fahmi.sendMessage(from, tefbe, image, { quoted: mek, caption: efbe });
               buffer = await getBuffer(anu.result);
               fahmi.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan' });
               await limitAdd(sender);
               break;
            case 'instaimg':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv);
               anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, { method: 'get' });
               insta = getBuffer(anu.result);
               reply(mess.wait);
               fahmi.sendMessage(from, insta, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'bass':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  fahmi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'instavid':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv);
               anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, { method: 'get' });
               insta = getBuffer(anu.result);
               reply(mess.wait);
               fahmi.sendMessage(from, insta, video, { mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek });
               await limitAdd(sender);
               break;
            case 'instastory':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (args.length < 1) return reply('username??');
               if (isLimit(sender)) return reply(limitend(pushname2));
               instor = `${body.slice(12)}`;
               anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, { method: 'get' });
               insta = '=========================\n';
               for (let i of anu.result.story.itemlist) {
                  insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`;
               }
               reply(insta.trim());
               await limitAdd(sender);
               break;
            case 'hekerbucin':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hasil = hekerbucin[Math.floor(Math.random() * hekerbucin.length)];
               fahmi.sendMessage(from, '*' + hasil + '*', text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'ytsearch':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Yang mau di cari apaan? titit?');
               anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               teks = '=================\n';
               for (let i of anu.result) {
                  teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`;
               }
               reply(teks.trim());
               break;
            case 'tiktok':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Urlnya mana um?');
               if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               buffer = await getBuffer(anu.result);
               fahmi.sendMessage(from, buffer, video, { quoted: mek });
               break;

            case 'film':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Mau Cari Film Apa?');
               reply(mess.wait);
               anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, { method: 'get' });
               hasil = '=========================\n';
               for (let film of anu.Search) {
                  hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`;
               }
               reply(hasil.trim());
               await limitAdd(sender);
               break;
            case 'tiktokstalk':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (args.length < 1) return fahmi.sendMessage(from, 'Usernamenya mana gan?', text, { quoted: mek });
                  let { user, stats } = await tiktod.getUserProfileInfo(args[0]);
                  reply(mess.wait);
                  teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`;
                  buffer = await getBuffer(user.avatarLarger);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: teks });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply('Kemungkinan username tidak valid');
               }
               await limitAdd(sender);
               break;
            //creator
            case 'nulis':
            case 'tulis':
               fahmi.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`);
               reply(mess.wait);
               tulis = body.slice(7);
               nama = tulis.split('/')[0];
               kelas = tulis.split('/')[1];
               isi = tulis.split('/')[2];
               nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, { method: 'get' });
               fahmi.sendMessage(from, nulis, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'ttp':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('*Textnya mana om?*');
               ranp = getRandom('.png');
               rano = getRandom('.webp');
               teks = body.slice(5).trim();
               anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               reply(mess.wait);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  bufferhgf = fs.readFileSync(rano);
                  fahmi.sendMessage(from, bufferhgf, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;

            case 'slide':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('*Textnya mana gan?*');
               teks = `${body.slice(7)}`;
               atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, { method: 'get' });
               reply(mess.wait);
               fahmi.sendMessage(from, atytyd, video, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'quotemaker':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               gh = `${body.slice(12)}`;
               quote = gh.split('/')[0];
               wm = gh.split('/')[1];
               bg = gh.split('/')[2];
               const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`;
               if (args.length < 1) return reply(pref);
               anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, { method: 'get' });
               buffer = await getBuffer(anu.result);
               fahmi.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;

            //akhir kreator
            case 'jarak':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               jarak = `${body.slice(7)}`;
               ja = jarak.split('/')[0];
               rak = jarak.split('/')[1];
               anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result.data}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'infoalamat':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result.data}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'tinyurl':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`);
               tinyurl = `${anu.result}`;
               reply(tinyurl);
               await limitAdd(sender);
               break;
            case 'infonomor':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`);
               infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`;
               reply(infonomor);
               await limitAdd(sender);
               break;
            case 'igstalk':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VthearApi}`, { method: 'get' });
               buffer = await getBuffer(anu.result.picture);
               reply(mess.wait);
               hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`;
               fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: hasil });
               await limitAdd(sender);
               break;
            case 'mimpi':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, { method: 'get' });
               mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`;
               fahmi.sendMessage(from, mimpi, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'quotes':
               fahmi.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               data = fs.readFileSync('./fahmi/quotes.js');
               jsonData = JSON.parse(data);
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               randQuote = 'Author: *' + randKey.author + '*\n\n*' + randKey.quotes + '*';
               fahmi.sendMessage(from, randQuote, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'fakta':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, { method: 'get' });
               fakta = `Faktanya: *${anu.result}*`;
               fahmi.sendMessage(from, fakta, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'katabijak':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, { method: 'get' });
               katabijak = `Kata Bijak: *${anu.result}*`;
               fahmi.sendMessage(from, katabijak, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'profiltiktok':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, { method: 'get' });
               tiktok = await getBuffer(anu.result.picture);
               fahmi.sendMessage(from, tiktok, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'closetime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               fahmi.updatePresence(from, Presence.composing);
               if (args[1] == 'detik') {
                  var timer = args[0] + '000';
               } else if (args[1] == 'menit') {
                  var timer = args[0] + '0000';
               } else if (args[1] == 'jam') {
                  var timer = args[0] + '00000';
               } else {
                  return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik');
               }
               setTimeout(() => {
                  var nomor = mek.participant;
                  const close = {
                     text: `*tepat ᴡaktu* grup ditutup oleh admin @${nomor.split('@s.whatsapp.net')[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
                     contextInfo: { mentionedJid: [nomor] },
                  };
                  fahmi.groupSettingChange(from, GroupSettingChange.messageSend, true);
                  reply(close);
               }, timer);
               break;
            case 'darkjokes':
               fahmi.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               data = fs.readFileSync('./fahmi/drak.js');
               jsonData = JSON.parse(data);
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               darkjokes = await getBuffer(randKey.result);
               fahmi.sendMessage(from, darkjokes, image, { quoted: mek, caption: '```DARK JOKES```' });
               await limitAdd(sender);
               break;
            case 'katailham':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hasil = katailham[Math.floor(Math.random() * katailham.length)];
               fahmi.sendMessage(from, '*' + hasil + '*', text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'addsticker':
               if (!isOwner) return reply(mess.only.ownerB);
               if (!isQuotedSticker) return reply('Reply stiker nya');
               svst = body.slice(12);
               if (!svst) return reply('Nama sticker nya apa?');
               boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               delb = await fahmi.downloadMediaMessage(boij);
               fs.writeFileSync(`./sticker/${svst}.webp`, delb);
               fahmi.sendMessage(from, `Berhasil menyimpan sticker!`, MessageType.text, { quoted: mek });
               break;
            case 'addaudio':
               if (!isOwner) return reply(mess.only.ownerB);
               if (!isQuotedAudio) return reply('Reply audio nya om');
               gsh = body.slice(7);
               if (!gsh) return reply('Nama file nya apa?');
               uyw = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               gx = await fahmi.downloadMediaMessage(uyw);
               fs.writeFileSync(`./mp3/${gsh}.mp3`, gx);
               reply('Berhasil menyimpan audio!');
               break;
            case 'katacinta':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, { method: 'get' });
               katacin = `*${anu.result}*`;
               fahmi.sendMessage(from, katacin, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'pasangan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               pa = `${body.slice(10)}`;
               sa = pa.split('/')[0];
               ngan = pa.split('/')[1];
               anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result.hasil}`, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'persengay':
            case 'gaypersen':
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('tag temanmu!');
               rate = body.slice(11);
               persengayy = [
                  '*4%*\n\n*Tobat Ngegay Gan:v*',
                  '*9%*\n\n*OTW Tobat Gan:v*',
                  '*17%*\n\n*Kang Coli*',
                  '*28%*\n\n*Buset Dah GayðŸ¤¦*',
                  '*34%*\n\n *Korban Tusbol*',
                  '*48%*\n\n*Kang Hunter Bool:v*',
                  '*59%*\n\n *Bahaya Ni Orang Gan*',
                  '*62%*\n\n*HatiÂ² Sama Ni Orang Beneran Dah*',
                  '*74%*\n\n*Astagfirullah Kabur GanðŸƒðŸŒ¬ï¸*',
                  '83%\n\n Yaallah NakðŸ¤¦',
                  '97%\n\nAstagfirullahðŸ¤¦',
                  '100%\n\nKabur ae Gan Daripada Ditusbol Bool luðŸƒ',
                  '29%\n\n amann:v',
                  '94%\n\n YaallahðŸƒ',
                  '75%\n\nHadehh GayðŸ¤¦',
                  '82%\n\nMending Lu Tobat DahðŸƒ',
                  '41%\n\nSering Cari Bool Diperempatan',
                  '39%\n\nSering Tusbol Bool TopanðŸƒ',
               ];
               const kl = persengayy[Math.floor(Math.random() * persengayy.length)];
               fahmi.sendMessage(from, 'Persen Gay: *' + rate + '*\n\nJawaban : ' + kl + '', text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'pbucin':
            case 'persenbucin':
            case 'bucinpersen':
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Mana Nama?');
               rate = body.slice(8);
               persenbucin = [
                  '4%\n\nHadehhðŸ¤¦',
                  '9%\n\nMasih Kecil Dah Bucin Ae',
                  '17%\n\nNakk Masih Kecil',
                  '28%\n\nYoalahh hmm',
                  '34%\n\nMayan Lah',
                  '48%\n\nGatau',
                  '59%\n\nBiasa Kang Bucin',
                  '62%\n\n HadehhhðŸƒ',
                  '74%\n\n bucen Teroosss',
                  '83%\n\n SekaliÂ² kek Ga bucin Gitu',
                  '97%\n\nHadehh PakboiÂ²',
                  '100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi',
                  '29%\n\nKasian Mana Masih Muda',
                  '94%\n\n Dasar Pakboi',
                  '75%\n\n Ya Ampun',
               ];
               const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)];
               fahmi.sendMessage(from, 'Persen Bucin Kak: *' + rate + '*\n\nJawaban : ' + pbucin + '', text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'map':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Masukan nama daerah');
               daerah = body.slice(5);
               try {
                  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`);
                  reply(mess.wait);
                  hasil = await getBuffer(data.gambar);
                  fahmi.sendMessage(from, hasil, image, {
                     quoted: mek,
                     caption: `Hasil Dari *${daerah}*`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'url2img':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               tipelist = ['desktop', 'tablet', 'mobile'];
               if (args.length < 1) return reply('Tipenya apa gan?');
               if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile');
               if (args.length < 2) return reply('Urlnya mana gan?');
               if (!isUrl(args[1])) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               url2img = await getBuffer(anu.result);
               fahmi.sendMessage(from, url2img, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'tagall':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               members_id = [];
               teks = args.length > 1 ? body.slice(8).trim() : '';
               teks += '\n';
               for (let mem of groupMembers) {
                  teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`;
                  members_id.push(mem.jid);
               }
               mentions(`╔═══✪ Tag By *${pushname2}* ✪══` + teks + '╚═══〘 Fbot 〙═══', members_id, true);
               break;
            case 'mentionall':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               members_id = [];
               teks = '\n';
               for (let mem of groupMembers) {
                  teks += `╠➥ @${mem.jid.split('@')[0]}\n`;
                  members_id.push(mem.jid);
               }
               mentions(`╔══〘  *${body.slice(12)}*  〙✪══` + teks + '╚═〘 Fbot 〙', members_id, true);
               break;
            case 'kbbi':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Apa yang mau dicari gan?');
               anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, { method: 'get' });
               reply('Menurut Kbbi:\n\n' + anu.result);
               await limitAdd(sender);
               break;
            case 'grup':
            case 'gc':
            case 'group':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args[0] === 'buka') {
                  reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`);
                  fahmi.groupSettingChange(from, GroupSettingChange.messageSend, false);
               } else if (args[0] === 'tutup') {
                  reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`);
                  fahmi.groupSettingChange(from, GroupSettingChange.messageSend, true);
               }
               break;
            case 'artinama':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Apa yang mau dicari gan?');
               anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, { method: 'get' });
               fahmi.sendMessage(from, anu.result, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'clearall':
               if (!isOwner) return reply('Kamu siapa?');
               anu = await fahmi.chats.all();
               fahmi.setMaxListeners(25);
               for (let _ of anu) {
                  fahmi.deleteChat(_.jid);
               }
               reply(`\`\`\`Sukses delete all chat Fbot\`\`\``);
               break;
            case 'bcgc':
               fahmi.updatePresence(from, Presence.composing);
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply('.......');
               if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  bcgc = await fahmi.downloadMediaMessage(encmedia);
                  for (let _ of groupMembers) {
                     fahmi.sendMessage(_.jid, bcgc, image, { caption: `「 *_broadᴄast group_* 」\n*group* : ${groupName}\n\n${body.slice(6)}` });
                  }
                  reply('');
               } else {
                  for (let _ of groupMembers) {
                     sendMess(_.jid, `「 *_broadᴄast group_* 」\n*group* : ${groupName}\n\n${body.slice(6)}`);
                  }
                  reply('Suksess broadcast group');
               }
               break;
            case 'bc':
               if (!isOwner) return reply('Kamu siapa?');
               if (args.length < 1) return reply('.......');
               anu = await fahmi.chats.all();
               if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  bc = await fahmi.downloadMediaMessage(encmedia);
                  for (let _ of anu) {
                     fahmi.sendMessage(_.jid, bc, image, { caption: `「 *_broadᴄast_* 」\n\n${body.slice(4)}` });
                  }
                  fahmi.sendMessage(_.jid, bc, image, { caption: `「 *_broadᴄast_* 」\n\n${body.slice(4)}` });
                  reply('Suksess broadcast');
               } else {
                  for (let _ of anu) {
                     sendMess(_.jid, `「 *_broadᴄast_* 」\n\n${body.slice(4)}`);
                  }
                  reply('Suksess broadcast');
               }
               break;
            case 'add':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args.length < 1) return reply('Yang mau di add siapa??');
               if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan');
               try {
                  num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`;
                  fahmi.groupAdd(from, [num]);
               } catch (e) {
                  console.log('Error :', e);
                  reply('Gagal menambahkan target, mungkin karena di private');
               }
               break;
            case 'kick':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, mengeluarkan :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  fahmi.groupRemove(from, mentioned);
               } else {
                  mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true);
                  fahmi.groupRemove(from, mentioned);
               }
               break;
            case 'kicktime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               setTimeout(() => {
                  fahmi.sendMessage(from, 'Yok Sama Al-fatihah', text);
               }, 8000);
               setTimeout(() => {
                  reply('sukses min:D');
               }, 7000);
               setTimeout(() => {
                  fahmi.groupRemove(from, mentioned);
               }, 6000);
               setTimeout(() => {
                  fahmi.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text); // ur cods
               }, 5000);
               setTimeout(() => {
                  fahmi.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text);
               }, 2500);
               setTimeout(() => {
                  reply('Perintah Diterima min:D');
               }, 0);
               break;
            case 'promote':
            case 'pm':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, anda menjdi admin :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  fahmi.groupMakeAdmin(from, mentioned);
               } else {
                  mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true);
                  fahmi.groupMakeAdmin(from, mentioned);
               }
               break;
            case 'delete':
            case 'del':
            case 'd':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               fahmi.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true });
               break;
            case 'demote':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, anda tidak menjadi admin :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  fahmi.groupDemoteAdmin(from, mentioned);
               } else {
                  mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true);
                  fahmi.groupDemoteAdmin(from, mentioned);
               }
               break;
            case 'listadmins':
            case 'listadmin':
            case 'adminlist':
            case 'adminslist':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`;
               no = 0;
               for (let admon of groupAdmins) {
                  no += 1;
                  teks += `[${no.toString()}] @${admon.split('@')[0]}\n`;
               }
               mentions(teks, groupAdmins, true);
               break;
            case 'toimg':
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isQuotedSticker) return reply(' reply stickernya gan');
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.png');
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media);
                  if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ');
                  buffer = fs.readFileSync(ran);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'nihhh' });
                  fs.unlinkSync(ran);
               });
               await limitAdd(sender);
               break;
            case 'simih':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isSimi) return reply('Mode simi sudah aktif');
                  samih.push(from);
                  fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih));
                  reply(`\`\`\`Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  samih.splice(from, 1);
                  fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih));
                  reply(`\`\`\`âœ“Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'nsfw':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isNsfw) return reply('Mode nsfw sudah aktif');
                  nsfw.push(from);
                  fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✓“Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  nsfw.splice(from, 1);
                  fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✓“Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'modeanime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isAnime) return reply('Mode anime sudah aktif');
                  anime.push(from);
                  fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime));
                  reply(`\`\`\`✓“Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  anime.splice(from, 1);
                  fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime));
                  reply(`\`\`\`✓“Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'welcome':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isWelkom) return reply('Udah aktif gan');
                  welkom.push(from);
                  fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom));
                  reply(`\`\`\`✓“Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  welkom.splice(from, 1);
                  fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom));
                  reply(`\`\`\`✓“Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'antilink':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args.length < 1) return reply('ketik #antilink on untuk mengaktifkan');
               if (args[0] === 'on') {
                  if (isAntiLink) return reply('anti link sudah on');
                  antilink.push(from);
                  fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink));
                  reply(`\`\`\`✓“Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  if (!isAntiLink) return reply('anti link sudah off');
                  antilink.splice(from, 1);
                  fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink));
                  reply(`\`\`\`✓“Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('on untuk mengaktifkan, off untuk menonaktifkan');
               }
               break;
            case 'antibadword':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan');
               if (args[0] === 'on') {
                  if (isBadWord) return reply('anti badword sudah on');
                  badword.push(from);
                  fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword));
                  reply(`\`\`\`✓“Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  if (!isBadWord) return reply('anti badword sudah off');
                  badword.splice(from, 1);
                  fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword));
                  reply(`\`\`\`✓“Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply(ind.satukos());
               }
               break;
            case 'addbadword':
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`);
               const bw = body.slice(12);
               bad.push(bw);
               fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad));
               reply('Success Menambahkan Bad Word!');
               break;
            case 'delbadword':
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply(`Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`);
               let dbw = body.slice(12);
               bad.splice(dbw);
               fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad));
               reply('Success Menghapus BAD WORD!');
               break;
            case 'listbadword':
               let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`;
               for (let i of bad) {
                  lbw += `➸ ${i.replace(bad)}\n`;
               }
               await reply(lbw);
               break;
            case 'caklontong':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, { method: 'get' });
               caklontong = `*${anu.result.soal}*`;
               setTimeout(() => {
                  fahmi.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban + '\n\n• Penjelasan: *' + anu.result.desk + '*', text, { quoted: mek }); // ur cods
               }, 30000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_10 Detik lagi…_', text); // ur cods
               }, 20000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_20 Detik lagi_…', text); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_30 Detik lagi_…', text); // ur cods
               }, 2500); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, caklontong, text, { quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               await limitAdd(sender);
               break;
            case 'tebakgambar':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, { method: 'get' });
               bufferkkk = await getBuffer(anu.result.soal_gbr);
               setTimeout(() => {
                  fahmi.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban, text, { quoted: mek }); // ur cods
               }, 30000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_10 Detik lagi…_', text); // ur cods
               }, 20000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_20 Detik lagi_…', text); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_30 Detik lagi_…', text); // ur cods
               }, 2500); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               await limitAdd(sender);
               break;
            case 'family100':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, { method: 'get' });
               family = `*${anu.result.soal}*`;
               setTimeout(() => {
                  fahmi.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban, text, { quoted: mek }); // ur cods
               }, 30000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_10 Detik lagi…_', text); // ur cods
               }, 20000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_20 Detik lagi_…', text); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, '_30 Detik lagi_…', text); // ur cods
               }, 2500); // 1000 = 1s,
               setTimeout(() => {
                  fahmi.sendMessage(from, family, text, { quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               await limitAdd(sender);
               break;
            case 'randombokep':
               fahmi.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               data = fs.readFileSync('./fahmi/18.js');
               jsonData = JSON.parse(data);
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               randBokep = await getBuffer(randKey.image);
               reply(mess.wait);
               randTeks = randKey.teks;
               fahmi.sendMessage(from, randBokep, image, { quoted: mek, caption: randTeks });
               await limitAdd(sender);
               break;

            case 'clone':
               if (!isOwner) return reply(mess.only.ownerB);
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Tag target yang ingin di clone');
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
               let { jid, id, notify } = groupMembers.find((x) => x.jid === mentioned);
               try {
                  pp = await fahmi.getProfilePicture(id);
                  buffer = await getBuffer(pp);
                  fahmi.updateProfilePicture(botNumber, buffer);
                  mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true);
               } catch (e) {
                  reply('Gagal om');
               }
               break;
            //setting bot
            case 'setprefix':
            case 'setpref':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               prefix = args[0];
               reply(`Prefix berhasil di ubah menjadi : ${prefix}`);
               break;
            case 'setlimit':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               limitt = args[0];
               reply(`Limit berhasil di ubah menjadi : ${limitt}`);
               break;
            case 'setmemlimit':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               memberLimit = args[0];
               reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`);
               break;
            case 'setnamebot':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               name = body.slice(12);
               reply(`Nama Bot berhasil di ubah menjadi : ${name}`);
               break;
            case 'setreply':
               if (!isOwner) return reply(mess.only.ownerB);
               fahmi.updatePresence(from, Presence.composing);
               if (args.length < 1) return;
               rmenu = body.slice(10);
               reply(`reply berhasil di ubah menjadi : ${rmenu}`);
               break;
            ////////////
            case 'wait':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  reply(mess.wait);
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  media = await fahmi.downloadMediaMessage(encmedia);
                  await wait(media)
                     .then((res) => {
                        fahmi.sendMessage(from, res.video, video, { quoted: mek, caption: res.teks.trim() });
                     })
                     .catch((err) => {
                        reply(err);
                     });
               } else {
                  reply('Foto aja mas');
               }
               break;

            case 'quran':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, { method: 'get' });
               quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`;
               fahmi.sendMessage(from, quran, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'infocuaca':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text);
               reply(mess.wait);
               tempat = `${body.slice(11)}`;
               weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah=' + tempat, { method: 'get' });
               if (weather.error) {
                  reply(from, weather.error, text);
               } else {
                  fahmi.sendMessage(
                     from,
                     `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`,
                     text,
                     { quoted: mek }
                  );
               }
               await limitAdd(sender);
               break;

            case 'pinterest':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Mau Nyari Foto Apa???');
               pinte = body.slice(11);
               anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${VthearApi}`, { method: 'get' });
               reply(mess.wait);
               var pin = JSON.parse(JSON.stringify(anu.result));
               var trest = pin[Math.floor(Math.random() * pin.length)];
               pinehg = await getBuffer(trest);
               fahmi.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : ' + pinte + '*', quoted: mek });
               await limitAdd(sender);
               break;

            case 'jadwalsholat':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Masukan nama daerah!!');
               sholat = `${body.slice(14)}`;
               anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${sholat}&apiKey=${BarBarApi}`, { method: 'get' });
               reply(mess.wait);
               if (anu.result) return reply(anu.result);
               jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\nâž¸ *Subuh :* ${anu.Subuh} WIB\n*âž¸ Dzuhur :* ${anu.Dzuhur} WIB\n*âž¸ Ashar :* ${anu.Ashar} WIB\n*âž¸ Maghrib :* ${anu.Maghrib} WIB\n*âž¸ Isya :* ${anu.Isya} WIB`;
               fahmi.sendMessage(from, jsol, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'jadwaltvnow':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               fahmi.updatePresence(from, Presence.composing);
               reply(mess.wait);
               try {
                  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
                     method: 'get',
                  });
                  reply(anu.result.jadwalTV);
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'jadwaltv':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               ch = body.slice(10);
               if (args.length < 1) return reply('Masukan nama channel');
               fahmi.updatePresence(from, Presence.composing);
               reply(mess.wait);
               try {
                  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarApi}`, {
                     method: 'get',
                  });
                  n = JSON.parse(JSON.stringify(anu.result));
                  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`;
                  reply(hasil);
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;

            // premium user
            case 'joox':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Judul* : ${anu.result.judul}\n│ *• Album* : ${anu.result.album}\n│ *• Dipublikasi* : ${anu.result.dipublikasi}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM*\n╰─────────────────────`;
               bufferddd = await getBuffer(anu.result.thumb);
               reply(mess.wait);
               buff = await getBuffer(anu.result.mp3);
               fahmi.sendMessage(from, bufferddd, image, { quoted: mek, caption: infomp3 });
               fahmi.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek });
               await limitAdd(sender);
               break;

            case 'snack':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (args.length < 1) return reply('Urlnya mana gan?');
               if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv);
               anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`;
               bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png');
               reply(mess.wait);
               buff = await getBuffer(anu.result);
               fahmi.sendMessage(from, bufferddd, image, { quoted: mek, caption: sck });
               fahmi.sendMessage(from, buff, video, { mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek });
               await limitAdd(sender);
               break;

            case 'ytmp4':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Urlnya mana gan?');
               if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(mess.error.Iv);
               anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               ytt = `╭─「 *YOUTUBE MP4 DOWNLOADER* 」\n│\n│• *Title:* ${anu.result.title}\n│• *Size:* ${anu.result.size}\n│• *Link:* https://www.youtu.be/${anu.result.id}\n│\n│ Tunggu Sebentar 1 menit Mungkin Agak Lama \n│ Karna Mendownload Video\n╰─────────────────────`;
               buff = await getBuffer(anu.result.imgUrl);
               reply(mess.wait);
               buffer = await getBuffer(anu.result.UrlVideo);
               fahmi.sendMessage(from, buff, image, { quoted: mek, caption: ytt });
               fahmi.sendMessage(from, buffer, video, { mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, caption: 'Nih Gan' });
               await limitAdd(sender);
               break;

            case 'ytmp3':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Urlnya mana gan?');
               if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv);
               anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               yta = `╭─「 *YOUTUBE MP3 DOWNLOADER* 」\n│\n│• *Title:* ${anu.result.title}\n│• *Size:* ${anu.result.size}\n│• *Link:* https://www.youtu.be/${anu.result.id}\n│\n│ Tunggu Sebentar 1 menit Mungkin Agak Lama \n│ Karna Mendownload Video\n╰─────────────────────`;
               buff = await getBuffer(anu.result.imgUrl);
               reply(mess.wait);
               buffer = await getBuffer(anu.result.UrlMp3);
               fahmi.sendMessage(from, buff, image, { quoted: mek, caption: yta });
               fahmi.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih Gan' });
               await limitAdd(sender);
               break;

            case 'play':
            case 'playmp3':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               data = await fetchJson(`https://videfikri.com/api/ytplay/?query=${body.slice(6)}`, { method: 'get' });
               reply(mess.wait);
               infomp3 = ` *PLAY* \n*Judul* : ${data.result.title}\n*Duration* : ${data.result.duration}\n*Filesize* : ${data.result.size}\n\n*[ WAIT ] Audionya Sedang Dikirim....*`;
               bufferddd = await getBuffer(data.result.image);
               lagu = await getBuffer(data.result.mp3);
               fahmi.sendMessage(from, bufferddd, image, { quoted: mek, caption: infomp3 });
               fahmi.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek });
               break;

            case 'smule':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Urlnya mana gan?');
               if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`;
               thumb = await getBuffer(anu.thumb);
               fahmi.sendMessage(from, thumb, image, { quoted: mek, caption: teks });
               buffer = await getBuffer(anu.result);
               fahmi.sendMessage(from, buffer, video, { mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan' });
               await limitAdd(sender);
               break;

            // Akhir Fitur Premium

            case 'asupan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               try {
                  data = await fetchJson(`https://api.itsmeikyxsec404.xyz/asupan?apikey=itsmeiky633`);
                  reply(mess.wait);
                  hasil = await getBuffer(data.result);
                  fahmi.sendMessage(from, hasil, video, {
                     caption: 'Nih gan',
                     quoted: mek,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'wiki':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('teks nya mana om?');
               reply(mess.wait);
               wiki = `${body.slice(6)}`;
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               wikii = `${anu.result}`;
               fahmi.sendMessage(from, wikii, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'pastebin':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               paste = `${body.slice(10)}`;
               anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'bpfont':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               bp = `${body.slice(8)}`;
               anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, { method: 'get' });
               reply(anu.text);
               await limitAdd(sender);
               break;
            case 'spamcall':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               call = `${body.slice(11)}`;
               anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result.logs}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'spamgmail':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               spam = `${body.slice(10)}`;
               anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result.log_lengkap}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'quransurah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               surah = `${body.slice(12)}`;
               anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`);
               quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`;
               for (let surah of anu.ayat) {
                  quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`;
               }
               reply(quran.trim());
               await limitAdd(sender);
               break;
            case 'quranlist':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/quranlist?&apikey=${VthearApi}`, { method: 'get' });
               list = '';
               for (let sur of anu) {
                  list = `Nomer: ${sur.list}\n`;
               }
               reply(list.trim());
               break;
            case 'bitly':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               link = `${body.slice(7)}`;
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, { method: 'get' });
               bitly = `${bitlyy.result}`;
               fahmi.sendMessage(from, anu, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'textstyle':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               style = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, { method: 'get' });
               reply(anu.result);
               await limitAdd(sender);
               break;
            case 'pantun':
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'jamdunia':
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               jamdunia = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, { method: 'get' });
               wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`;
               fahmi.sendMessage(from, wtime, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'tomp3':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               fahmi.updatePresence(from, Presence.composing);
               if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_');
               reply(mess.wait);
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp4');
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Gagal, pada saat mengkonversi video ke mp3');
                  bufferlkj = fs.readFileSync(ran);
                  fahmi.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: mek });
                  fs.unlinkSync(ran);
               });
               await limitAdd(sender);
               break;
            case 'tomp4':
               fahmi.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (!isQuotedSticker) return reply('Reply stikernya');
               reply(mess.wait);
               anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               anum = await fahmi.downloadAndSaveMediaMessage(anumedia);
               ran = getRandom('.webp');
               exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
                  fs.unlinkSync(anum);
                  if (err) return reply('Gagal, pada saat mengkonversi sticker ke Video');
                  buffer = fs.readFileSync(ran);
                  fahmi.sendMessage(from, buffer, video, {
                     quoted: mek,
                     caption: 'Nih Kak',
                  });
                  fs.unlinkSync(ran);
               });
               break;

            case 'setppbot':
               if (!isOwner) return reply(mess.only.owner);
               fahmi.updatePresence(from, Presence.composing);
               if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`);
               enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await fahmi.downloadAndSaveMediaMessage(enmedia);
               await fahmi.updateProfilePicture(botNumber, media);
               reply('Makasih profil barunya☺️™‚');
               break;

            // Fitur Defacer

            case 'dorking':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               dork = `${body.slice(9)}`;
               anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, { method: 'get' });
               hasil = `${anu.result}`;
               fahmi.sendMessage(from, hasil, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encode64':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encode64 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decode64':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decode64 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decode32':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decode32 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encode32':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encode32 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encbinary':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encbinary = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decbinary':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decbin = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encoctal':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encoc = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decoctal':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decoc = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'becrypt':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               becry = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, { method: 'get' });
               fahmi.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'hashidentifier':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               hash = `${body.slice(16)}`;
               anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`);
               hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`;
               fahmi.sendMessage(from, hasilhash, text, { quoted: mek });
               await limitAdd(sender);
               break;
            // akhir encrypt & decrypt Fitur

            case 'google':
               const googleQuery = body.slice(8);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`);
               google({ query: googleQuery })
                  .then((results) => {
                     let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`;
                     for (let i = 0; i < results.length; i++) {
                        vars += `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`;
                     }
                     reply(vars);
                  })
                  .catch((e) => {
                     console.log(e);
                     fahmi.sendMessage(from, 'Google Error : ' + e);
                  });
               await limitAdd(sender);
               break;

            case 'addbucin':
               if (!isOwner) return reply(mess.only.owner);
               huu = body.slice(10);
               bucinrandom.push(huu);
               fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom));
               reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`);
               break;
            case 'bucin':
            case 'quotebucin':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hasil = bucinrandom[Math.floor(Math.random() * bucinrandom.length)];
               fahmi.sendMessage(from, '*' + hasil + '*', text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'beritahoax':
               if (!isUser) return reply(mess.only.userB);
               fahmi.updatePresence(from, Presence.composing);
               data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, { method: 'get' });
               teks = '=================\n';
               for (let i of data.result) {
                  teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'husbu':
               if (!isUser) return reply(mess.only.userB);
               try {
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`);
                  buffer = await getBuffer(res.image);
                  fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: 'Ingat! Cintai Husbumu' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nangis':
               if (!isUser) return reply(mess.only.userB);
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  fahmi.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'ngewe':
               if (!isUser) return reply(mess.only.userB);
               if (!isNsfw) return reply(' *NSFW OF* ');
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  fahmi.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'cium':
               if (!isUser) return reply(mess.only.userB);
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  fahmi.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'peluk':
               if (!isUser) return reply(mess.only.userB);
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  fahmi.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'moddroid':
               if (!isUser) return reply(mess.only.userB);
               data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`);
               hepi = data.result[0];
               teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`;
               buffer = await getBuffer(hepi.image);
               fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: `${teks}` });
               await limitAdd(sender);
               break;
            case 'happymod':
               if (!isUser) return reply(mess.only.userB);
               data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`);
               hupo = data.result[0];
               teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`;
               buffer = await getBuffer(hupo.image);
               fahmi.sendMessage(from, buffer, image, { quoted: mek, caption: `${teks}` });
               await limitAdd(sender);
               break;
            default:
               if (body.startsWith(`${prefix}${command}`)) {
                  reply(`*maaf kak, ᴄommand ${prefix}${command} tidak tedaftar di dalam database* ${prefix}menu`);
               }
               if (isGroup && isSimi && budy != undefined) {
                  console.log(budy);
                  muehe = await simih(budy);
                  console.log(muehe);
                  reply(muehe);
               } else {
                  console.log(color('[Fbot', 'aqua'), 'Command Tidak Terdaftar', color(sender.split('@')[0]));
               }
         }
      } catch (e) {
         console.log('Error : %s', color(e, 'white'));
      }
   });
}
starts();
