const TWITCHUSER = "{{username}}"
const OAUTH_USER = "{{ouath}}"

const container = document.getElementById("parade-container");

function parade() {
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("burgdayWrapper");
  const newImg = document.createElement("img");
  newImg.src = "{{imageSource}}";
  newImg.classList.add("burgday");
  setTimeout(() => newImg.remove(), {{horizPeriod}} * 1000);
  imgWrapper.appendChild(newImg);
  container.appendChild(imgWrapper);
}


ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if ("{{privileges}}" === "everybody" && command.toLowerCase() === "{{chatCommand}}".toLowerCase()) {
    parade();
      }
  if ("{{privileges}}" === "subs" && ( flags.subscriber && command.toLowerCase() === "{{chatCommand}}".toLowerCase())) {
    parade();
      }
  if ("{{privileges}}" === "vips" && ( ( flags.subscriber || flags.vip ) && command.toLowerCase() === "{{chatCommand}}".toLowerCase())) {
    parade();
      }
  if ("{{privileges}}" === "mods" && ( flags.mod && command.toLowerCase() === "{{chatCommand}}".toLowerCase())) {
    parade();
      }
  if( flags.broadcaster && command.toLowerCase() === "{{chatCommand}}".toLowerCase() ) {
    parade();
  }
}

ComfyJS.onReward = ( user, reward, cost, extra ) => {
  if ( reward.toLowerCase() === "{{redemptionName}}".toLowerCase() ) {
    parade();  
  }
}

ComfyJS.Init(TWITCHUSER, OAUTH_USER);
