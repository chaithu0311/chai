var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var audio = document.getElementById("birthdayAudio");
var audioBtn = document.getElementById("audioBtn");

function toggleVideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause Video";
    } else {
        video.pause();
        btn.innerHTML = "Play Video";
    }
}

function toggleAudio() {
    if (audio.paused) {
        audio.muted = false;
        audio.play();
        audioBtn.innerHTML = "Pause Music";
    } else {
        audio.pause();
        audioBtn.innerHTML = "Play Music 🎶";
    }
}

// Animated Typing Effect
const textElement = document.getElementById("animated-text");
const message = `Hi Maa, once again Happy Birthday! 🎉

My Dearest Maa,  
Today is the most special day because it's the day you were born—the day my happiness took a form in this world.  
I feel so lucky and blessed to have you in my life. From the moment we met a year ago until now,  
every second with you has been a beautiful journey. You are not just my love, but my best friend,  
my happiness, and my everything.

Maa, your smile is the reason my heart beats faster, and your voice is the sweetest music to my ears.  
Every moment I spend with you is precious, and I can't imagine my life without you.  
You make me feel complete, and I promise to love you, care for you, and stand by your side forever.

Are you a magician? Because every time I look at you, everyone else disappears. ✨  
Do you believe in love at first sight, or should I walk by again—just like I did a year ago when we met? 😉  
If you were a song, you’d be my favorite playlist on repeat. 🎶  

Even though we are in our third year now, our love is still growing stronger each day.  
And in the future, I dream of a life where we are always together,  
building a beautiful world filled with love, laughter, and happiness.  
I can't wait for the day when I can call you mine forever.

On your birthday, I pray that all your dreams come true and that life gives you endless happiness.  
You deserve all the love and joy in the world.  

Enjoy your special day, my love, and always remember—I love you more than words can ever say. ❤️`;

let index = 0;

function typeEffect() {
    if (index < message.length) {
        if (message[index] === "\n") {
            textElement.innerHTML += "<br>";
        } else {
            textElement.innerHTML += message[index];
        }
        index++;
        setTimeout(typeEffect, 50); // Adjust speed of typing here
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
