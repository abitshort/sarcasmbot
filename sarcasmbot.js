const Discord = require('discord.js');
const client = new Discord.Client();
let botUserID;
const switchInsult = 75
const fuckWithAaronThreshold = 75


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    botUserID = client.user.id;
});

client.on('message', msg => {
        if(botUserID === msg.author.id) return;

        if (msg.content.indexOf('/s') == msg.content.length-2) {
                const messageString = msg.content.slice(0, -2);
                const messageStringLength = messageString.length;

                // could just compare if msg.content.length > 2 in the above if but whatever.
                if (messageStringLength == 0){
                    return;
                }

                var spongeCaseString = "";
                for (let i = 0; i < messageStringLength; i++) {
                        if (i % 2 == 0 ) {
                            var  spongeCaseString = spongeCaseString + messageString[i].toLowerCase();
                        } else {
                            var  spongeCaseString = spongeCaseString + messageString[i].toUpperCase();
                        }
                }
                msg.channel.send(msg.author.username + " said: " + spongeCaseString);
                msg.delete()
        }

        if (msg.content.toLowerCase().includes("fuck you")) {
            var addressee = getFuckedAddressee(msg.author.username);
            msg.channel.send("fuck you too, " + addressee);
        }

        if (msg.content.toLowerCase().includes("bot attack")) {
            msg.channel.send("I'm not a war bot, fascist.");
        }

        if (msg.author.username.includes("rigidcherry")) {
           msg.channel.send(fuckWithAaron(fuckWithAaronThreshold));
        }

});


function getFuckedAddressee( username ){
    let opts = ['buddy','pal','friend','friendo','guy','jackass','shithead','butt-munch','lint-licker','bootlicker'];

    let x = Math.floor(Math.random() * 100);
    if (x > switchInsult){
        let index = x % opts.length;
        return opts[index];
    } else{
        return username;
    }

};

function fuckWithAaron(triggerChance) {
    let opts = ["I bet that's some bullshit you just made up","Hold on, I have something for you. *farts*","damnit aaron","I liked it better when you drank more.","That's dumb.","I'm bored","BUT WHY","I don't think I will, thanks.","http://2.bp.blogspot.com/-9yvIzbo17no/UQ4-SOZrVZI/AAAAAAAAI5o/bHVVhuAfc5U/s1600/michael-scott-disgusted.gif","Ah fuck, I can't believe you've done this.","No. Bad Aaron."]
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.getRandomInt(opts.length - 1));
    if (x > triggerChance){
        return opts[y];
    }
}

