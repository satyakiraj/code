const searchbox = document.querySelector('input');
const searchbtn = document.querySelector('.search-btn');
const menu_icon = document.getElementById("menu");
const music_icons = document.querySelectorAll('.music-icons');
const music_name1 = document.querySelectorAll('.music-name');
const music_name2 = document.querySelectorAll('.music-name-2');
const play = document.querySelectorAll('.play');
const mega_playbtn = document.getElementById("maga-play-btn");
const playbtn1 = document.getElementById("playbtn1");
const playbtn2 = document.getElementById("playbtn2");
const playbtn3 = document.getElementById("playbtn3");
const playbtn4 = document.getElementById("playbtn4");
const playbtn5 = document.getElementById("playbtn5");
const playbtn6 = document.getElementById("playbtn6");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const music4 = document.getElementById("music4");
const music5 = document.getElementById("music5");
const music6 = document.getElementById("music6");
const box1_text = document.getElementById("box1").innerText.toLowerCase().replace("▶", "").trim();
const box2_text = document.getElementById("box2").innerText.toLowerCase().replace("▶", "").trim();
const box3_text = document.getElementById("box3").innerText.toLowerCase().replace("▶", "").trim();
const box4_text = document.getElementById("box4").innerText.toLowerCase().replace("▶", "").trim();
const box5_text = document.getElementById("box5").innerText.toLowerCase().replace("▶", "").trim();
const box6_text = document.getElementById("box6").innerText.toLowerCase().replace("▶", "").trim();
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const showallbtn = document.getElementById("showbtn");
const music_list = document.querySelector('.show-music-list');
const audio_duration = document.getElementById("duration");
const audio_played = document.getElementById("audio-played");
const progress_bar = document.getElementById("progress-bar");
const forwardbtn = document.querySelector('.forward');
const backwardbtn = document.querySelector('.back');
const playlistbtn = document.getElementById("adding-playlist");
const gif = document.getElementById("gif");
let arr_music = ["believer", "bones", "enemy", "love your voice", "shape of you", "way down we go"];
music_icons.forEach(Element => {
    Element.onmouseover = displaybtn;
    Element.onmouseout = hidebtn;
});
function show() {
    showallbtn.style.display = "none";
    music_icons.forEach(Element => {
        searchbox.value = "";
        Element.style.display = "block";
    })
};
function displaybtn() {
    play.forEach(Element => {
        Element.style.display = "block";
    })
};
function hidebtn() {
    play.forEach(Element => {
        Element.style.display = "none";
    })
};

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
playbtn1.addEventListener("click", () => {

    if (music1.paused) {
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();
        music1.play();
        playbtn1.innerHTML = "⏸";
        mega_playbtn.innerHTML = "⏸";

        gif.style.display = "block";
        document.querySelector('.image-area').textContent = document.querySelector('.image-area').textContent.replace("Music Paused", "").trim();
        const image = document.createElement('img');
        image.setAttribute("src", "images/believer.png");
        image.setAttribute("class", "image2");
        document.querySelector('.image-area').appendChild(image);
        progress_bar.addEventListener('input', () => {
            const progress = parseFloat(progress_bar.value);
            const duration = music1.duration;
            const currentTime = (progress / 100) * duration;
            music1.currentTime = currentTime;
        });
        music1.addEventListener('timeupdate', () => {
            const currentTime = music1.currentTime;
            const duration = music1.duration;
            const progress = (currentTime / duration) * 100;
            progress_bar.value = progress;
            audio_played.textContent = formatTime(currentTime);
            audio_duration.textContent = formatTime(duration);
        });
        forwardbtn.addEventListener('click', () => {
            music1.currentTime += 15;
        });
        backwardbtn.addEventListener('click', () => {
            music1.currentTime -= 15;
        });
    } else {
        music1.pause();
        playbtn1.innerHTML = "▶";
        gif.style.display = "none";
        mega_playbtn.innerHTML = "▶";
        document.querySelector('.image-area').innerHTML = "Music Paused";
    }
});
playbtn2.addEventListener("click", () => {
    if (music2.paused) {
        music1.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();
        music2.play();
        playbtn2.innerHTML = "⏸";
        mega_playbtn.innerHTML = "⏸";

        gif.style.display = "block";
        document.querySelector('.image-area').textContent = document.querySelector('.image-area').textContent.replace("Music Paused", "").trim();
        const image = document.createElement('img');
        image.setAttribute("src", "images/bones.png");
        image.setAttribute("class", "image2");
        document.querySelector('.image-area').appendChild(image);
        progress_bar.addEventListener('input', () => {
            const progress = parseFloat(progress_bar.value);
            const duration = music2.duration;
            const currentTime = (progress / 100) * duration;
            music2.currentTime = currentTime;
        });
        music2.addEventListener('timeupdate', () => {
            const currentTime = music2.currentTime;
            const duration = music2.duration;
            const progress = (currentTime / duration) * 100;
            progress_bar.value = progress;
            audio_played.textContent = formatTime(currentTime);
            audio_duration.textContent = formatTime(duration);
        });
        forwardbtn.addEventListener('click', () => {
            music2.currentTime += 15;
        });
        backwardbtn.addEventListener('click', () => {
            music2.currentTime -= 15;
        });
    } else {
        music2.pause();
        playbtn2.innerHTML = "▶";
        mega_playbtn.innerHTML = "▶";
        gif.style.display = "none";
        document.querySelector('.image-area').innerHTML = "Music Paused";
    }
});
playbtn3.addEventListener("click", () => {
    if (music3.paused) {
        music2.pause();
        music1.pause();
        music4.pause();
        music5.pause();
        music6.pause();
        music3.play();
        playbtn3.innerHTML = "⏸";
        mega_playbtn.innerHTML = "⏸";

        gif.style.display = "block";
        document.querySelector('.image-area').textContent = document.querySelector('.image-area').textContent.replace("Music Paused", "").trim();
        const image = document.createElement('img');
        image.setAttribute("src", "images/way-down-we-go.png");
        image.setAttribute("class", "image2");
        document.querySelector('.image-area').appendChild(image);
        progress_bar.addEventListener('input', () => {
            const progress = parseFloat(progress_bar.value);
            const duration = music3.duration;
            const currentTime = (progress / 100) * duration;
            music3.currentTime = currentTime;
        });
        music3.addEventListener('timeupdate', () => {
            const currentTime = music3.currentTime;
            const duration = music3.duration;
            const progress = (currentTime / duration) * 100;
            progress_bar.value = progress;
            audio_played.textContent = formatTime(currentTime);
            audio_duration.textContent = formatTime(duration);
        });
        forwardbtn.addEventListener('click', () => {
            music3.currentTime += 15;
        });
        backwardbtn.addEventListener('click', () => {
            music3.currentTime -= 15;
        });
    } else {
        music3.pause();
        playbtn3.innerHTML = "▶";
        mega_playbtn.innerHTML = "▶";
        gif.style.display = "none";
        document.querySelector('.image-area').innerHTML = "Music Paused";
    }
});
playbtn4.addEventListener("click", () => {
    if (music4.paused) {
        music2.pause();
        music3.pause();
        music1.pause();
        music5.pause();
        music6.pause();
        music4.play();
        playbtn4.innerHTML = "⏸";
        mega_playbtn.innerHTML = "⏸";

        gif.style.display = "block";
        document.querySelector('.image-area').textContent = document.querySelector('.image-area').textContent.replace("Music Paused", "").trim();
        const image = document.createElement('img');
        image.setAttribute("src", "images/love-your-voice.png");
        image.setAttribute("class", "image2");
        document.querySelector('.image-area').appendChild(image);
        progress_bar.addEventListener('input', () => {
            const progress = parseFloat(progress_bar.value);
            const duration = music4.duration;
            const currentTime = (progress / 100) * duration;
            music4.currentTime = currentTime;
        });
        music4.addEventListener('timeupdate', () => {
            const currentTime = music4.currentTime;
            const duration = music4.duration;
            const progress = (currentTime / duration) * 100;
            progress_bar.value = progress;
            audio_played.textContent = formatTime(currentTime);
            audio_duration.textContent = formatTime(duration);
        });
        forwardbtn.addEventListener('click', () => {
            music4.currentTime += 15;
        });
        backwardbtn.addEventListener('click', () => {
            music4.currentTime -= 15;
        });
    } else {
        music4.pause();
        playbtn4.innerHTML = "▶";
        mega_playbtn.innerHTML = "▶";
        gif.style.display = "none";
        document.querySelector('.image-area').innerHTML = "Music Paused";
    }
});
playbtn5.addEventListener("click", () => {
    if (music5.paused) {
        music2.pause();
        music3.pause();
        music4.pause();
        music1.pause();
        music6.pause();
        music5.play();
        playbtn5.innerHTML = "⏸";
        mega_playbtn.innerHTML = "⏸";

        gif.style.display = "block";
        document.querySelector('.image-area').textContent = document.querySelector('.image-area').textContent.replace("Music Paused", "").trim();
        const image = document.createElement('img');
        image.setAttribute("src", "images/shape-of-you.png");
        image.setAttribute("class", "image2");
        document.querySelector('.image-area').appendChild(image);
        progress_bar.addEventListener('input', () => {
            const progress = parseFloat(progress_bar.value);
            const duration = music5.duration;
            const currentTime = (progress / 100) * duration;
            music5.currentTime = currentTime;
        });
        music5.addEventListener('timeupdate', () => {
            const currentTime = music5.currentTime;
            const duration = music5.duration;
            const progress = (currentTime / duration) * 100;
            progress_bar.value = progress;
            audio_played.textContent = formatTime(currentTime);
            audio_duration.textContent = formatTime(duration);
        });
        forwardbtn.addEventListener('click', () => {
            music5.currentTime += 15;
        });
        backwardbtn.addEventListener('click', () => {
            music5.currentTime -= 15;
        });
    } else {
        music5.pause();
        playbtn5.innerHTML = "▶";
        mega_playbtn.innerHTML = "▶";
        gif.style.display = "none";
        document.querySelector('.image-area').innerHTML = "Music Paused";
    }
});
playbtn6.addEventListener("click", () => {
    if (music6.paused) {
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music1.pause();
        music6.play();
        playbtn6.innerHTML = "⏸";
        mega_playbtn.innerHTML = "⏸";     
        gif.style.display = "block";
        document.querySelector('.image-area').textContent = document.querySelector('.image-area').textContent.replace("Music Paused", "").trim();
        const image = document.createElement('img');
        image.setAttribute("src", "images/enemy.png");
        image.setAttribute("class", "image2");
        document.querySelector('.image-area').appendChild(image);
        progress_bar.addEventListener('input', () => {
            const progress = parseFloat(progress_bar.value);
            const duration = music6.duration;
            const currentTime = (progress / 100) * duration;
            music6.currentTime = currentTime;
        });
        music6.addEventListener('timeupdate', () => {
            const currentTime = music6.currentTime;
            const duration = music6.duration;
            const progress = (currentTime / duration) * 100;
            progress_bar.value = progress;
            audio_played.textContent = formatTime(currentTime);
            audio_duration.textContent = formatTime(duration);
        });
        forwardbtn.addEventListener('click', () => {
            music6.currentTime += 15;
        });
        backwardbtn.addEventListener('click', () => {
            music6.currentTime -= 15;
        });
    } else {
        music6.pause();
        playbtn6.innerHTML = "▶";
        mega_playbtn.innerHTML = "▶";
        gif.style.display = "none";
        document.querySelector('.image-area').innerHTML = "Music Paused";
    }
});
searchbtn.addEventListener("click", () => {
    let music = searchbox.value.toLowerCase();
    let music_found;

    if (music.length === 0) {
        searchbox.value = "Enter the name of a music";
    } else {
        music_found = arr_music.find(Element => {
            return Element === music;
        });

        if (music_found === undefined) {
            searchbox.value = `${music} music couldn't be found`;
            searchbox.style.color = "red";
            setTimeout(() => {
                searchbox.value = "";
                searchbox.style.color = "rgb(0, 253, 0)";
            }, 3000);
        } else if (music === box1_text) {
            showallbtn.style.display = "block";
            box1.style.display = "block";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";
        } else if (music === box2_text) {
            showallbtn.style.display = "block";
            box2.style.display = "block";
            box1.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";
        } else if (music === box3_text) {
            showallbtn.style.display = "block";
            box3.style.display = "block";
            box2.style.display = "none";
            box1.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";
        } else if (music === box4_text) {
            showallbtn.style.display = "block";
            box4.style.display = "block";
            box2.style.display = "none";
            box3.style.display = "none";
            box1.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";
        } else if (music === box5_text) {
            showallbtn.style.display = "block";
            box5.style.display = "block";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box1.style.display = "none";
            box6.style.display = "none";
        } else if (music === box6_text) {
            showallbtn.style.display = "block";
            box6.style.display = "block";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box1.style.display = "none";
        }
    }
});