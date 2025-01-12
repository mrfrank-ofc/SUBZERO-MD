/*/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

Project Name : SubZero MD
Creator      : Darrell Mucheri ( Mr Frank OFC )
Repo         : https//github.com/mrfrank-ofc/SUBZERO-MD
Support      : wa.me/18062212660
*/








































































































































































































/*

const config = require('../config');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { cmd } = require('../command');
const { getRandom } = require('../lib/functions');

var imgmsg = '';
if (config.LANG === 'SI') imgmsg = 'ඡායාරූපයකට mention දෙන්න!';
else imgmsg = 'ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!';

var descg = '';
if (config.LANG === 'SI') descg = 'එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.';
else descg = 'ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.';

cmd({
    pattern: 'sticker',
    react: '🤹‍♀️',
    alias: ['s', 'stic'],
    desc: descg,
    category: 'convert',
    use: '.sticker <Reply to image>',
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'));
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage';

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download();
            await require('fs').promises.writeFile(nameJpg, imageBuffer);

            let sticker = new Sticker(nameJpg, {
                pack: pushname, // The pack name
                author: '', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp');
            const stickerBuffer = await m.quoted.download();
            await require('fs').promises.writeFile(nameWebp, stickerBuffer);

            let sticker = new Sticker(nameWebp, {
                pack: '❄️ＳＵＢＺＥＲＯ - ＭＤ❄️', // The pack name
                author: '『 Mʀ Fʀᴀɴᴋ Oғᴄ』', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else {
            return await reply(imgmsg);
        }
    } catch (e) {
        reply('Error !!');
        console.error(e);
    }
});
*/
const _0x2d5610=_0x3158;(function(_0x28ede3,_0x3ec73c){const _0x32f375=_0x3158,_0x51d277=_0x28ede3();while(!![]){try{const _0x289d17=parseInt(_0x32f375(0x1b6))/0x1*(parseInt(_0x32f375(0x193))/0x2)+parseInt(_0x32f375(0x1ae))/0x3+parseInt(_0x32f375(0x1de))/0x4+parseInt(_0x32f375(0x1cc))/0x5*(-parseInt(_0x32f375(0x1ad))/0x6)+-parseInt(_0x32f375(0x1a8))/0x7+-parseInt(_0x32f375(0x1ef))/0x8+-parseInt(_0x32f375(0x1b8))/0x9;if(_0x289d17===_0x3ec73c)break;else _0x51d277['push'](_0x51d277['shift']());}catch(_0x28daeb){_0x51d277['push'](_0x51d277['shift']());}}}(_0x1238,0x18859));const axios=require(_0x2d5610(0x1eb)),config=require('../config'),{Sticker,createSticker,StickerTypes}=require('wa-sticker-formatter'),{cmd,commands}=require('../command'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('../lib/functions'),path=require('path'),{tmpdir}=require('os'),fetch=require(_0x2d5610(0x1ea)),Crypto=require(_0x2d5610(0x1a3)),ffmpegPath=require(_0x2d5610(0x19a))['path'],ffmpeg=require(_0x2d5610(0x199)),fs=require('fs');ffmpeg[_0x2d5610(0x198)](ffmpegPath);async function videoToWebp(_0x289b8e){const _0xbb042=_0x2d5610,_0x4a920e=path[_0xbb042(0x1aa)](tmpdir(),Crypto[_0xbb042(0x195)](0x6)[_0xbb042(0x1b2)](0x0,0x6)[_0xbb042(0x1bd)](0x24)+'.webp'),_0x50e998=path['join'](tmpdir(),Crypto[_0xbb042(0x195)](0x6)[_0xbb042(0x1b2)](0x0,0x6)[_0xbb042(0x1bd)](0x24)+'.mp4');fs[_0xbb042(0x1e3)](_0x50e998,_0x289b8e),await new Promise((_0x1e0bed,_0x492b56)=>{const _0x11c856=_0xbb042;ffmpeg(_0x50e998)['on'](_0x11c856(0x1c3),_0x492b56)['on']('end',()=>_0x1e0bed(!![]))[_0x11c856(0x1b9)]([_0x11c856(0x1ee),_0x11c856(0x1dd),_0x11c856(0x1a6),_0x11c856(0x1b4),_0x11c856(0x191),'0',_0x11c856(0x1ec),_0x11c856(0x1ab),'-t',_0x11c856(0x1da),_0x11c856(0x1d0),_0x11c856(0x1d4),'-an',_0x11c856(0x1ac),'0'])['toFormat']('webp')[_0x11c856(0x19d)](_0x4a920e);});const _0x23a7ff=fs[_0xbb042(0x1d9)](_0x4a920e);return fs['unlinkSync'](_0x4a920e),fs[_0xbb042(0x1df)](_0x50e998),_0x23a7ff;}function _0x1238(){const _0x30a83c=['.take\x20<Pack\x20Name>','node-fetch','axios','-ss','12345','-vcodec','551480KWKzQt','libx264','-compression_level','-c:a','aac','ɪᴛ\x20ᴄᴏɴᴠᴇʀᴛs\x20ʏᴏᴜʀ\x20ʀᴇᴘʟɪᴇᴅ\x20ᴘʜᴏᴛᴏ\x20ᴛᴏ\x20sᴛɪᴄᴋᴇʀ.','STICKER_AUTHOR','-loop','-vn','224096aRKDur','download','randomBytes','viewOnceMessage','Usage:\x20.take\x20<Pack\x20Name>','setFfmpegPath','fluent-ffmpeg','@ffmpeg-installer/ffmpeg','exports','libopus','save','promises','imageMessage','Error\x20!!','Please\x20mention\x20a\x20photo!!','trim','crypto','-crf','msg','-vf','44100','34286JsfiHK','sticker','join','00:00:00','-vsync','6SOnSSL','154488SwbGuu','writeFile','-ac','sendMessage','readUIntLE','https://api-fix.onrender.com/api/maker/attp?text=','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,split\x20[a][b];[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];[b][p]\x20paletteuse','emojimix','1iBzaLW','quoted','63711LTkRdC','addOutputOptions','toBuffer','-vbr','.jpg','toString','take','transparent','.webp','mp3','slow','error','FULL','.png','convert','*Please\x20give\x20me\x20a\x20text!*','https://api.nexoracle.com/converter/emoji-mix?apikey=FmAOl12DbiXNz92NI&q=','chat','.sticker\x20<Reply\x20to\x20image>','❌\x20An\x20error\x20occurred:\x20','864885oeNasK','arraybuffer','--crop','includes','-preset','*Please\x20provide\x20two\x20emojis\x20separated\x20by\x20a\x20comma!*','attp','-c:v','default','get','Error:','-ar','.attp\x20HI','readFileSync','00:00:05','CROPPED','mp4','libwebp','763144jOfVfL','unlinkSync','data','length','.emojimix\x20😂,😲','writeFileSync','Mix\x20two\x20emojis\x20and\x20convert\x20them\x20into\x20a\x20sticker.','-b:a','stickerMessage','128k','type'];_0x1238=function(){return _0x30a83c;};return _0x1238();}function toAudio(_0x125aa0,_0x932651){const _0x43f090=_0x2d5610;return ffmpeg(_0x125aa0,[_0x43f090(0x192),_0x43f090(0x1b0),'2',_0x43f090(0x1e5),'128k',_0x43f090(0x1d7),_0x43f090(0x1a7),'-f',_0x43f090(0x1c1)],_0x932651,'mp3');}function toPTT(_0x52f8e7,_0x4712fc){const _0x47ebf0=_0x2d5610;return ffmpeg(_0x52f8e7,[_0x47ebf0(0x192),_0x47ebf0(0x18d),_0x47ebf0(0x19c),'-b:a','128k',_0x47ebf0(0x1bb),'on',_0x47ebf0(0x18c),'10'],_0x4712fc,'opus');}function toVideo(_0x5b338e,_0x255d61){const _0x38d768=_0x2d5610;return ffmpeg(_0x5b338e,[_0x38d768(0x1d3),_0x38d768(0x1f0),_0x38d768(0x18d),_0x38d768(0x18e),'-ab',_0x38d768(0x1e7),'-ar',_0x38d768(0x1a7),_0x38d768(0x1a4),'32',_0x38d768(0x1d0),_0x38d768(0x1c2)],_0x255d61,_0x38d768(0x1dc));}module[_0x2d5610(0x19b)]={'videoToWebp':videoToWebp,'toAudio':toAudio,'toPTT':toPTT,'toVideo':toVideo},cmd({'pattern':_0x2d5610(0x1d2),'desc':'Convert\x20text\x20to\x20a\x20GIF\x20sticker.','react':'✨','category':_0x2d5610(0x1c6),'use':_0x2d5610(0x1d8),'filename':__filename},async(_0x333289,_0x2aca8e,_0x34ed21,{from:_0x2d6f87,quoted:_0x5986fd,body:_0xb8c06c,isCmd:_0x2c9c21,command:_0x4859e7,args:_0x510bc0,q:_0x394137,isGroup:_0xc3b588,sender:_0x2150d9,senderNumber:_0x4912fd,botNumber2:_0x1865ba,botNumber:_0x279005,pushname:_0x11fa1e,isMe:_0x3155a2,isOwner:_0x4a310a,groupMetadata:_0x4a4fc1,groupName:_0x146a3b,participants:_0x3a9ab7,groupAdmins:_0x2cb57a,isBotAdmins:_0x949680,isAdmins:_0x52b32b,reply:_0x256b81})=>{const _0x18954b=_0x2d5610;try{if(!_0x510bc0[0x0])return _0x256b81(_0x18954b(0x1c7));let _0x13cc2a=await getBuffer(_0x18954b(0x1b3)+_0x510bc0[0x0]);const _0x2635f2={'quoted':_0x34ed21};await _0x333289['sendMessage'](_0x34ed21['chat'],{'sticker':await videoToWebp(_0x13cc2a)},_0x2635f2);}catch(_0x1808cc){console[_0x18954b(0x1c3)](_0x18954b(0x1d6),_0x1808cc),_0x256b81(_0x18954b(0x1cb)+_0x1808cc['message']);}});var imgmsg=_0x2d5610(0x1a1),descg=_0x2d5610(0x18f);cmd({'pattern':_0x2d5610(0x1a9),'react':'🤹‍♀️','alias':['s','ss','stic'],'desc':descg,'category':_0x2d5610(0x1c6),'use':_0x2d5610(0x1ca),'filename':__filename},async(_0x3cfa62,_0x133043,_0x3d9b39,{from:_0x59a19f,reply:_0x34f8af,isCmd:_0x15d4c5,command:_0x1d11ee,args:_0x759926,q:_0x3f0f7a,isGroup:_0x281e18,pushname:_0x29da5c})=>{const _0x51189d=_0x2d5610;try{const _0x37906f=_0x3d9b39[_0x51189d(0x1b7)]&&(_0x3d9b39[_0x51189d(0x1b7)]['type']===_0x51189d(0x19f)||_0x3d9b39[_0x51189d(0x1b7)][_0x51189d(0x1e8)]===_0x51189d(0x196)&&_0x3d9b39[_0x51189d(0x1b7)][_0x51189d(0x1a5)][_0x51189d(0x1e8)]===_0x51189d(0x19f)),_0x1141c6=_0x3d9b39[_0x51189d(0x1b7)]&&_0x3d9b39[_0x51189d(0x1b7)][_0x51189d(0x1e8)]==='stickerMessage';if(_0x3d9b39[_0x51189d(0x1e8)]===_0x51189d(0x19f)||_0x37906f){const _0x4d49ee=getRandom(_0x51189d(0x1bc)),_0x3cd823=_0x37906f?await _0x3d9b39[_0x51189d(0x1b7)]['download']():await _0x3d9b39[_0x51189d(0x194)]();await require('fs')[_0x51189d(0x19e)][_0x51189d(0x1af)](_0x4d49ee,_0x3cd823);let _0x27b7f2=new Sticker(_0x4d49ee,{'pack':config['STICKER_AUTHOR'],'author':'','type':_0x3f0f7a['includes'](_0x51189d(0x1ce))||_0x3f0f7a[_0x51189d(0x1cf)]('-c')?StickerTypes[_0x51189d(0x1db)]:StickerTypes[_0x51189d(0x1c4)],'categories':['🤩','🎉'],'id':_0x51189d(0x1ed),'quality':0x4b,'background':_0x51189d(0x1bf)});const _0x21a6e0=await _0x27b7f2[_0x51189d(0x1ba)]();return _0x3cfa62[_0x51189d(0x1b1)](_0x59a19f,{'sticker':_0x21a6e0},{'quoted':_0x133043});}else{if(_0x1141c6){const _0x129345=getRandom(_0x51189d(0x1c0)),_0x2b7365=await _0x3d9b39['quoted'][_0x51189d(0x194)]();await require('fs')[_0x51189d(0x19e)][_0x51189d(0x1af)](_0x129345,_0x2b7365);let _0xe826ea=new Sticker(_0x129345,{'pack':config[_0x51189d(0x190)],'author':'','type':_0x3f0f7a[_0x51189d(0x1cf)](_0x51189d(0x1ce))||_0x3f0f7a[_0x51189d(0x1cf)]('-c')?StickerTypes[_0x51189d(0x1db)]:StickerTypes['FULL'],'categories':['🤩','🎉'],'id':_0x51189d(0x1ed),'quality':0x4b,'background':_0x51189d(0x1bf)});const _0xebfa05=await _0xe826ea[_0x51189d(0x1ba)]();return _0x3cfa62[_0x51189d(0x1b1)](_0x59a19f,{'sticker':_0xebfa05},{'quoted':_0x133043});}else return await _0x34f8af(imgmsg);}}catch(_0x156954){_0x34f8af(_0x51189d(0x1a0)),console[_0x51189d(0x1c3)](_0x156954);}});function _0x3158(_0x2a872f,_0x4e0fde){const _0x12381c=_0x1238();return _0x3158=function(_0x31584b,_0x143670){_0x31584b=_0x31584b-0x18c;let _0x550eec=_0x12381c[_0x31584b];return _0x550eec;},_0x3158(_0x2a872f,_0x4e0fde);}var imgmsg=_0x2d5610(0x1a1),usageMsg=_0x2d5610(0x197),descg=_0x2d5610(0x18f);cmd({'pattern':_0x2d5610(0x1be),'react':'⭐','desc':descg,'category':_0x2d5610(0x1c6),'use':_0x2d5610(0x1e9),'filename':__filename},async(_0x54f564,_0x9d0860,_0x4e137e,{from:_0x16aee3,reply:_0x1de34c,isCmd:_0xf73db,command:_0x462154,args:_0x22055c,q:_0x8bb8f1,isGroup:_0x338546,pushname:_0x21ba8c})=>{const _0x3d9c08=_0x2d5610;try{const _0x28c1b8=_0x4e137e[_0x3d9c08(0x1b7)]&&(_0x4e137e[_0x3d9c08(0x1b7)][_0x3d9c08(0x1e8)]===_0x3d9c08(0x19f)||_0x4e137e[_0x3d9c08(0x1b7)][_0x3d9c08(0x1e8)]===_0x3d9c08(0x196)&&_0x4e137e[_0x3d9c08(0x1b7)][_0x3d9c08(0x1a5)][_0x3d9c08(0x1e8)]===_0x3d9c08(0x19f)),_0x13b17b=_0x4e137e[_0x3d9c08(0x1b7)]&&_0x4e137e[_0x3d9c08(0x1b7)][_0x3d9c08(0x1e8)]===_0x3d9c08(0x1e6);let _0xb0f7a6=_0x22055c[0x0]?_0x22055c['join']('\x20'):null;if(!_0xb0f7a6)return _0x1de34c(usageMsg);if(_0x4e137e[_0x3d9c08(0x1e8)]===_0x3d9c08(0x19f)||_0x28c1b8){const _0x471e75=getRandom(_0x3d9c08(0x1bc)),_0x25e2f5=_0x28c1b8?await _0x4e137e[_0x3d9c08(0x1b7)]['download']():await _0x4e137e[_0x3d9c08(0x194)]();await require('fs')[_0x3d9c08(0x19e)][_0x3d9c08(0x1af)](_0x471e75,_0x25e2f5);let _0x2c8b0b=new Sticker(_0x471e75,{'pack':_0xb0f7a6,'author':'','type':_0x22055c[_0x3d9c08(0x1cf)](_0x3d9c08(0x1ce))||_0x22055c[_0x3d9c08(0x1cf)]('-c')?StickerTypes[_0x3d9c08(0x1db)]:StickerTypes[_0x3d9c08(0x1c4)],'categories':['🤩','🎉'],'id':'12345','quality':0x4b,'background':_0x3d9c08(0x1bf)});const _0x24f790=await _0x2c8b0b['toBuffer']();return _0x54f564[_0x3d9c08(0x1b1)](_0x16aee3,{'sticker':_0x24f790},{'quoted':_0x9d0860});}else{if(_0x13b17b){const _0x3efb16=getRandom(_0x3d9c08(0x1c0)),_0x53381d=await _0x4e137e[_0x3d9c08(0x1b7)][_0x3d9c08(0x194)]();await require('fs')[_0x3d9c08(0x19e)][_0x3d9c08(0x1af)](_0x3efb16,_0x53381d);let _0x26f000=new Sticker(_0x3efb16,{'pack':_0xb0f7a6,'author':'','type':_0x22055c[_0x3d9c08(0x1cf)](_0x3d9c08(0x1ce))||_0x22055c[_0x3d9c08(0x1cf)]('-c')?StickerTypes[_0x3d9c08(0x1db)]:StickerTypes[_0x3d9c08(0x1c4)],'categories':['🤩','🎉'],'id':_0x3d9c08(0x1ed),'quality':0x4b,'background':_0x3d9c08(0x1bf)});const _0x32e2a8=await _0x26f000[_0x3d9c08(0x1ba)]();return _0x54f564[_0x3d9c08(0x1b1)](_0x16aee3,{'sticker':_0x32e2a8},{'quoted':_0x9d0860});}else return await _0x1de34c(imgmsg);}}catch(_0x3882f9){_0x1de34c('Error\x20!!'),console[_0x3d9c08(0x1c3)](_0x3882f9);}}),cmd({'pattern':_0x2d5610(0x1b5),'desc':_0x2d5610(0x1e4),'react':'✨','category':_0x2d5610(0x1c6),'use':_0x2d5610(0x1e2),'filename':__filename},async(_0x218412,_0x4acd0b,_0x405595,{args:_0x37c3c7,reply:_0x7bc4a7})=>{const _0x4aa215=_0x2d5610;try{if(!_0x37c3c7[0x0])return _0x7bc4a7(_0x4aa215(0x1d1));const _0x6ff360=_0x37c3c7[0x0]['split'](',');if(_0x6ff360[_0x4aa215(0x1e1)]!==0x2)return _0x7bc4a7('*Please\x20provide\x20exactly\x20two\x20emojis\x20separated\x20by\x20a\x20comma!*');const _0x5d6d1d=encodeURIComponent(_0x6ff360[0x0]['trim']()),_0x5b08f5=encodeURIComponent(_0x6ff360[0x1][_0x4aa215(0x1a2)]()),_0x567662=_0x4aa215(0x1c8)+_0x5d6d1d+'+'+_0x5b08f5,_0x1202b1=await axios[_0x4aa215(0x1d5)](_0x567662,{'responseType':_0x4aa215(0x1cd)}),_0x48605d=Buffer['from'](_0x1202b1[_0x4aa215(0x1e0)]),_0x512a12=path[_0x4aa215(0x1aa)](__dirname,getRandom(_0x4aa215(0x1c5)));fs['writeFileSync'](_0x512a12,_0x48605d);const _0x4d9f59=new Sticker(_0x512a12,{'pack':'KHAN-MD','author':'','type':StickerTypes['FULL'],'categories':['🎉'],'id':_0x4aa215(0x1ed),'quality':0x5a}),_0x385937=await _0x4d9f59[_0x4aa215(0x1ba)]();await _0x218412['sendMessage'](_0x405595[_0x4aa215(0x1c9)],{'sticker':_0x385937},{'quoted':_0x4acd0b}),fs[_0x4aa215(0x1df)](_0x512a12);}catch(_0x4ee0d5){console[_0x4aa215(0x1c3)](_0x4aa215(0x1d6),_0x4ee0d5),_0x7bc4a7(_0x4aa215(0x1cb)+_0x4ee0d5['message']);}});

