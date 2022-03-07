# burgday-parade
A streamelements custom widget for parading an image across the screen. It can be tied to channel point redemptions and/or chat commands.
Widget written by Thistle (thistle_dew)

The following setup instructions provided by Ky (cozyKyra)

## Instructions

- Create a new overlay on StreamElements
- Create a Custom Widget (under Static/Custom)
- Copy/Paste the code blocks found below for HTML, CSS, JS, and JSON/Fields code in their respective tabs (replacing anything there by default)

## ComfyJS Setup

This widget requires the use of ComfyJS in order to connect to Twitch Chat and read redemptions. The main requirement is that you need to generate an OUATH key, but to obtain this, you will need to create an app in the Twitch Developers website.
STEP-BY-STEP:

- Go to this website and log in (this is an official Twitch website): https://dev.twitch.tv/
- Go to "Your Console" at the top right
- Click "Register Your Application"
- Name the application however you wish
- Enter this address under OAuth Redirect URLs: https://twitchapps.com/tokengen/
- Choose "Chat Bot" for Category, and click Create
- Click "Manage" to enter your app
- Copy the Client ID string
- Go to https://twitchapps.com/tokengen/ and enter your Client ID in the first box
- Enter this under "Scopes": `channel:manage:redemptions channel:read:redemptions user:read:email chat:edit chat:read`
- Press Connect. You will be given an OAuth key
- Paste the OAuth key in the Widget settings (under OAuth Key), and enter your channel name, and the channel redemption you want this tied to. You're done! This should now be connected!

NOTE: Every few months Twitch will require re-authorization of these keys. If the bot stops working after some time, you likely need to repeat this process

READ COMFYJS DOCUMENTATION HERE: https://github.com/instafluff/ComfyJS#channel-point-reward-redemptions
