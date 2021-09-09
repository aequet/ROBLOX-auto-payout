const noblox = require("noblox.js")
const id = 6531843
const sleep = require("sleep")
const keep_alive = require('./Keepalive.js')
const config = require("./config.json")


async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    const currentUser = await noblox.setCookie(config.cookie)
   console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
   
   const robux = await noblox.getGroupFunds(id)
   
   console.log(robux)
   while (robux < config.maximum_robux) {
   if (robux > config.minimum_robux) {
     console.log("giving..")
     noblox.groupPayout(id, currentUser.UserID, robux)
     console.log("Paid", robux, "Robux to", currentUser.UserName, "!")
   }
   else {
     console.log("You don't have enough Robux. Waiting", config.wait_time, "seconds")
   }
   sleep.sleep(config.wait_time)
   
}
}

startApp()
