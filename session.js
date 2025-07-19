//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hKU3lOc0laUEpraGdUV0VmQUUvZURnRzV5aDRzUDB6MVhDTnI4QWxYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidy9FeC9jYjRTWmlFWUlJMDZiUHBSbVpUSEg3ZkdaQU9rMjVBNDdmRWtDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRUlscjFQWTlOUTBFS3hvUEs2VmNvb2U1NlYrTVVGVkJNVzVPdjVkT21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTEM0QkFobndMUjNEeFUyUUtRSDZmUllLUTVkdlVRTWhqU3RRbE9WaUEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNUXJKbGxGRlVwNTdLUktOb3Y2eVV4NVZuWml2SzJ0bDI5V2pCdTlUbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJZFVMK3lTZytqaHZweG9oVk93b2RKYlRpV01QOWx0MUE2VFBlS1UyR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEozNG9CTDdzUWExdW50T1dRM1dSWXZIdW5CMmhhd2NJd0ZmSVp3b2lsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXZMVGxXZ1FqZlJHamJ0b1p3alNkb2JyeUEvMjFiR0p6dUxtbWxENWZXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdSM3hVZTlRQUZWQlYralNBeDR4Q3BvUUJseGN4d3NPaFg4M3U5YWxaS3YwWjNuSy9ZUjE4eHExVmpHajVwWkxxSHhrUFpWNFVobEpuVlVoTVpWZmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IkhFRUJiZVRvQitMa0JGOGFKa0s4VVZQTHY5eDdaS1Z1anB5Y05GR2UyVDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODU5MjM5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREYyNjU1MTEyNTZDNzREOTkxMTFCNTQzMkEzMTAwRUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjkwMzUyN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUUE5aFFCVnVRc0tvaVBYTlBOcEw5dyIsInBob25lSWQiOiI0MzUxMWRlNy04NzdlLTRlODUtYTQ0Zi01YjJkMzRkYjQ1MTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmcyeDd2NjNHWTIra3lDdENML0F4V3IrMXhvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhXUmhIKytsakNSS2VBL2o2K2E3dm4zazdvOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzMzVGWjVRQyIsIm1lIjp7ImlkIjoiOTQ3ODU5MjM5Mjk6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoib3duZXIiLCJsaWQiOiIxMzUxNDE3MzMyMDgyNDk6MzVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNS0wxOUlERU5MZTdNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPSnJXY3ZWbktYUnU4R2V0U3k4QnJpV1djRTRJSkRHQUxrWWQ4ZUdoTEVZPSIsImFjY291bnRTaWduYXR1cmUiOiJXdk9mY2o5WEpONk03L0cyTXRVMjhrTlZUOE8rWFdnNFY4aUZNSlRZYWdmMU4rQm5nMEZZSSsrUDkwTDM3cTZaaklHM2RSamlHK3d1a2QzaW9veW5CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmZyS29VMkFrQ3VZOFNEL0xRN0ZQblF6Mko4WnZteGxuZVQyVlZ4WUIreGxQMXl0MGE2TndoNjhGNE1aWDFDb1BpNWlXbCt5YlM0cXgrQWQrUWZFZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTkyMzkyOTozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaWExbkwxWnlsMGJ2Qm5yVXN2QWE0bGxuQk9DQ1F4Z0M1R0hmSGhvU3hHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI5MDM1MjIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzh6In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785923929",
  PASSWORD: 
    process.env.PASSWORD || "dilaksha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
