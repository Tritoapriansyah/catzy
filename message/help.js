const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${setting.botName} 

𝐿𝑖𝑏𝑟𝑎𝑟𝑦 : 𝐵𝑎𝑖𝑙𝑒𝑦𝑠-𝑀𝐷
𝑃𝑟𝑒𝑓𝑖𝑥 𝑏𝑜𝑡 : 𝑚𝑢𝑙𝑡𝑖 𝑝𝑟𝑒𝑓𝑖𝑥
𝑇𝑎𝑛𝑔𝑔𝑎𝑙 𝑆𝑒𝑟𝑣𝑒𝑟 : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
𝑊𝑎𝑘𝑡𝑢 𝑆𝑒𝑟𝑣𝑒𝑟 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎❍─ [ 𝐵𝑂𝐾𝐸𝑃 𝑀𝐸𝑁𝑈 ] ─❍
 
❒➥ 𝘬𝘭𝘪𝘬 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 → .𝘣𝘰𝘬𝘦𝘱𝘮𝘦𝘯𝘶
┗
❍── [ 𝑀𝐴𝐼𝑁 𝑀𝐸𝑁𝑈] ──❍ 
❒➥${prefix}𝑚𝑒𝑛𝑢
❒➥${prefix}𝑜𝑤𝑛𝑒𝑟
❒➥${prefix}𝑑𝑜𝑛𝑎𝑠𝑖
❒➥${prefix}𝑠𝑝𝑒𝑒𝑑
❒➥${prefix}𝑟𝑢𝑛𝑡𝑖𝑚𝑒
❒➥${prefix}𝑐𝑒𝑘𝑝𝑟𝑒𝑚
❒➥${prefix}𝑙𝑖𝑠𝑡𝑝𝑟𝑒𝑚
┗

❍── [ 𝐶𝑂𝑁𝑉𝐸𝑅𝑇𝐸𝑅] ──❍ 
❒➥${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟
❒➥${prefix}𝑡𝑜𝑣𝑖𝑑
┗

❍── [ 𝑆𝐶𝐻𝑂𝐿] ──❍ 
❒➥${prefix}𝑛𝑢𝑙𝑖𝑠-𝑏𝑖𝑎𝑠𝑎 _<𝑡𝑒𝑥𝑡>_
❒➥${prefix}𝑏𝑟𝑎𝑖𝑛𝑙𝑦 _<𝑞𝑢𝑒𝑟𝑦>_ ( 𝑆𝑒𝑑𝑎𝑛𝑔 𝐸𝑟𝑟𝑜𝑟 )
❒➥${prefix}𝑛𝑢𝑙𝑖𝑠𝑘𝑎𝑛𝑎𝑛 _<𝑡𝑒𝑥𝑡>_
❒➥${prefix}𝑛𝑢𝑙𝑖𝑠𝑘𝑖𝑟𝑖 _<𝑡𝑒𝑥𝑡>_
❒➥${prefix}𝑓𝑜𝑙𝑖𝑜𝑘𝑎𝑛𝑎𝑛 _<𝑡𝑒𝑥𝑡>_
❒➥${prefix}𝑓𝑜𝑙𝑖𝑜𝑘𝑖𝑟𝑖 _<𝑡𝑒𝑥𝑡>
┗
  
❍── [ 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷𝐸𝑅] ──❍ 
❒➥${prefix}𝑝𝑙𝑎𝑦
❒➥${prefix}𝑡𝑖𝑘𝑡𝑜𝑘
❒➥${prefix}𝑦𝑡𝑚𝑝4
❒➥${prefix}𝑦𝑡𝑚𝑝3
❒➥${prefix}𝑔𝑒𝑡𝑣𝑖𝑑𝑒𝑜
❒➥${prefix}𝑔𝑒𝑡𝑚𝑢𝑠𝑖𝑐
❒➥${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚
❒➥${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘
┗
  
❍── [ 𝑅𝐴𝑁𝐷𝑂𝑀] ──❍ 
❒➥${prefix}𝑞𝑢𝑜𝑡𝑒
❒➥${prefix}𝑐𝑒𝑐𝑎𝑛
❒➥${prefix}𝑐𝑜𝑔𝑎𝑛
┗
  
❍── [ 𝑆𝐸𝐴𝑅𝐶𝐻] ──❍ 
❒➥${prefix}𝑙𝑖𝑟𝑖𝑘
❒➥${prefix}𝑔𝑟𝑢𝑝𝑤𝑎
❒➥${prefix}𝑦𝑡𝑠𝑒𝑎𝑟𝑐𝒉
❒➥${prefix}𝑝𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡
┗
  
❍── [ 𝐺𝐴𝑀𝑀𝐸] ──❍ 
❒➥${prefix}𝑡𝑖𝑐𝑡𝑎𝑐𝑡𝑜𝑒
❒➥${prefix}𝑑𝑒𝑙𝑡𝑡𝑐
❒➥${prefix}𝑡𝑒𝑏𝑎𝑘𝑔𝑎𝑚𝑏𝑎𝑟
┗
  
❍── [ 𝑃𝐴𝑌𝑀𝐸𝑇 ] ──❍ 
❒➥${prefix}𝑏𝑢𝑦𝑙𝑖𝑚𝑖𝑡
❒➥${prefix}𝑏𝑢𝑦𝑔𝑙𝑖𝑚𝑖𝑡
❒➥${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟
❒➥${prefix}𝑙𝑖𝑚𝑖𝑡
❒➥${prefix}𝑏𝑎𝑙𝑎𝑛𝑐𝑒
┗

❍── [ 𝐺𝐿𝑂𝐵𝐴𝐿 𝐼𝑁𝐹𝑂] ──❍ 
❒➥${prefix}𝑖𝑛𝑓𝑜𝑔𝑒𝑚𝑝𝑎
❒➥${prefix}𝑐𝑜𝑟𝑜𝑛𝑎𝑖𝑛𝑑𝑜
❒➥${prefix}𝑐𝑜𝑟𝑜𝑛𝑎𝑔𝑙𝑜𝑏𝑎𝑙
┗
 
❍── [ 𝐺𝑅𝑂𝑈𝑃 𝑀𝐸𝑁𝑈] ──❍ 
❒➥${prefix}𝑙𝑖𝑛𝑘𝑔𝑟𝑢𝑝
❒➥${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑢𝑝
❒➥${prefix}𝑠𝑒𝑡𝑛𝑎𝑚𝑒𝑔𝑐
❒➥${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐
❒➥${prefix}𝑔𝑟𝑜𝑢𝑝
❒➥${prefix}𝑟𝑒𝑣𝑜𝑘𝑒
❒➥${prefix}𝒉𝑖𝑑𝑒𝑡𝑎𝑔
┗
  
❍── [ 𝑇𝑂𝐿𝐿𝑆 ] ──❍ 
❒➥${prefix}𝑠𝑠𝑤𝑒𝑏 _<𝑙𝑖𝑛𝑘>_
┗

❍── [ 𝑇𝐸𝑋𝑇𝑃𝑅𝑂𝑀𝐸 ] ──❍ 
❒➥${prefix}𝑝𝑜𝑟𝑛𝒉𝑢𝑏 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑔𝑙𝑖𝑡𝑐𝒉 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑎𝑣𝑒𝑛𝑔𝑒𝑟 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑠𝑝𝑎𝑐𝑒 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑛𝑖𝑛𝑗𝑎𝑙𝑜𝑔𝑜 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑚𝑎𝑟𝑣𝑒𝑙𝑠𝑡𝑢𝑑𝑖𝑜 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑙𝑖𝑜𝑛𝑙𝑜𝑔𝑜 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑤𝑜𝑙𝑓𝑙𝑜𝑔𝑜 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑠𝑡𝑒𝑒𝑙3𝑑 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑤𝑎𝑙𝑙𝑔𝑟𝑎𝑣𝑖𝑡𝑦 _<𝑡𝑒𝑥𝑡 1>_ _<𝑡𝑒𝑥𝑡 2>_
❒➥${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘 _<𝑡𝑒𝑥𝑡 1>_
❒➥${prefix}𝑛𝑒𝑜𝑛 _<𝑡𝑒𝑥𝑡 1>_
❒➥${prefix}𝑡𝒉𝑢𝑛𝑑𝑒𝑟 _<𝑡𝑒𝑥𝑡 1>_
┗
    
❍── [ 𝑃𝐻𝑂𝑇𝑂𝑋𝑌 ] ──❍ 
❒➥${prefix}𝑐𝑜𝑓𝑓𝑒 _<𝑡𝑒𝑥𝑡 1>_
❒➥${prefix}𝑠𝒉𝑎𝑑𝑜𝑤 _<𝑡𝑒𝑥𝑡 1>_
┗
    
❍── [ 𝐼𝑆𝐿𝐴𝑀 𝑀𝐸𝑁𝑈] ──❍ 
❒➥${prefix}𝑗𝑎𝑑𝑤𝑎𝑙𝑠𝒉𝑜𝑙𝑎𝑡 _<𝑑𝑎𝑒𝑟𝑎𝒉>_
❒➥${prefix}𝑎𝑠𝑚𝑎𝑢𝑙𝒉𝑢𝑠𝑛𝑎 
❒➥${prefix}𝑎𝑙𝑞𝑢𝑟𝑎𝑛𝑎𝑢𝑑𝑖𝑜 _<𝑒𝑥𝑎𝑚𝑝𝑙𝑒 𝑑𝑖 𝑟𝑒𝑝𝑙𝑦>_
❒➥${prefix}𝑘𝑖𝑠𝑎𝒉𝑛𝑎𝑏𝑖 _<𝑞𝑢𝑒𝑟𝑦>_
┗
  
❍── [ 𝑂𝑊𝑁𝐸𝑅 𝑀𝐸𝑁𝑈] ──❍ 
❒➥ > 𝑒𝑣𝑎𝑙𝑐𝑜𝑑𝑒
❒➥ 𝑥 𝑒𝑣𝑎𝑙𝑐𝑜𝑑𝑒-2
❒➥${prefix} 𝑒𝑥𝑒𝑐𝑢𝑡𝑜𝑟
❒➥${prefix}𝑠𝑒𝑡𝑝𝑝𝑏𝑜𝑡
❒➥${prefix}𝑒𝑥𝑖𝑓
❒➥${prefix}𝑙𝑒𝑎𝑣𝑒
❒➥${prefix}𝑎𝑑𝑑𝑝𝑟𝑒𝑚
❒➥${prefix}𝑑𝑒𝑙𝑝𝑟𝑒𝑚
┗
`+'𝐻𝑜𝑠𝑡 𝑛𝑜𝑑𝑒𝑗𝑠'
}

