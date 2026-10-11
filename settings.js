const fs = require('fs')

// >~~~~~~~~~~ Owner Setting ~~~~~~~~~~~< //
global.owner = "6282145438653"
global.ownername = "JOSSAY"
global.botname = "🄽🄸🄺🄾🄻🄰s̠҉͍͊ͅ"
global.footer = "JOSSAYTAMVN"
global.packname = "VERSEKasep"

// >~~~~~~~~~~ System Setting ~~~~~~~~~~~< //
global.version = "BERBAYAR VERSI😋"
global.idch = "120363333258337680@newsletter"
global.prefa = ["", "/"]

// >~~~~~~~~~~ Thumbnail Setting ~~~~~~~~~~~< //
global.thumb = "https://files.catbox.moe/7o7v79.jpg"

// >~~~~~~~~~~ Message Setting ~~~~~~~~~~~< //
global.mess = {
owner: "-[ *AKSES DITOLAK* ]-\n> *_Anda Tidak Dapat Menggunakan Fitur Ini Karena Anda Bukanlah Owner!_*", 
ownerprem: "-[ *AKSES DITOLAK* ]-\n> *_Anda Tidak Dapat Menggunakan Fitur Ini Karena Anda Bukanlah Owner & User Premium!_*"
}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
