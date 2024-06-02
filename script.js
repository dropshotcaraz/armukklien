// Create the script element
var script = document.createElement('script');

// Set the source attribute
script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';

// Set the async attribute
script.async = true;

// Append the script element to the document body
document.body.appendChild(script);

// Define the WhatsApp button settings
var wa_btnSetting = {
    "btnColor": "#16BE45",
    "ctaText": "WhatsApp Us",
    "cornerRadius": 40,
    "marginBottom": 20,
    "marginLeft": 20,
    "marginRight": 20,
    "btnPosition": "right",
    "whatsAppNumber": "911234567890",
    "welcomeMessage": "Saya Mau Memesan Produk Anda!",
    "zIndex": 999999,
    "btnColorScheme": "light"
};

// Execute _waEmbed function after window is loaded
window.onload = function() {
    _waEmbed(wa_btnSetting);
};
