const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const songTitle = document.getElementById("songTitle");

const songs = [
    {
        title: "Song 1",
        file: "auido.mp3.mp3"
    },
    {
        title: "Song 2",
        file: "audio1.mp3"
    },
    {
        title: "Song 3",
        file: "audio2.mp3"
    }
];

let currentSong = 0;

function loadSong(index){
    audio.src = songs[index].file;
    songTitle.textContent = songs[index].title;
}

loadSong(currentSong);

playBtn.addEventListener("click",()=>{

    if(audio.paused){
        audio.play();
        playBtn.textContent = "⏸";
    }
    else{
        audio.pause();
        playBtn.textContent = "▶";
    }

});

nextBtn.addEventListener("click",()=>{

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

});

prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();

});

audio.addEventListener("timeupdate",()=>{

    const percent =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percent || 0;

});

progress.addEventListener("input",()=>{

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});

volume.addEventListener("input",()=>{

    audio.volume = volume.value;

});

audio.addEventListener("ended",()=>{

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

});