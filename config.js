import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285808492274', 'Rizal', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285808492274'
global.packname = 'Ayaka - MD by'
global.author = '© Rizal'
global.namebot = '​AYAKA MD'
global.wm = '© Ayaka By Rizal'
global.stickpack = 'Ayaka - MD by'
global.stickauth = '© Rizal'
global.fotonya = 'https://telegra.ph/file/3c025e2497a5bc8f773d7.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/rizalzllk'
global.sgh = 'https://github.com/rizalfreall'
global.sgc = 'https://chat.whatsapp.com/Lunwjjmm71ZK7LnxMf5Va4'
// Donasi
global.psaweria = 'https://saweria.co/rizalzllk'
global.ptrakterr = 'https://trakteer.id/rizalzllk'
global.povo = '081916711483'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = 'apikey' //api.itsrose.life
global.xyro = 'MboBZsHdYb'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "MboBZsHdYb",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
