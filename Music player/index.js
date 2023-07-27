console.log("playing music");

// Variable Declaration 
let masterPlay = document.getElementById("master-play");
let seeking = document.getElementById("seeking");
let imgs = Array.from(document.getElementsByClassName("track"));
let gif = Array.from(document.getElementsByClassName("gif"));
let masterAudioElement = new Audio("songs/uptown.mp3");
let songName = document.getElementById("player-song-name");
let itemPlay = document.getElementsByClassName("item-play");
let songItems = Array.from(document.getElementsByClassName("song-items"));
let selected;
const selectedSong = ()=>{
    songs.forEach((el,ind)=>{
        if((el.fileName)==(songName.innerText)){
            selected = ind;
        }
    })
    Array.from(itemPlay).forEach((e,i)=>{
        itemPlay[selected].classList.remove("fa-play");
        itemPlay[selected].classList.add("fa-pause");
    })
}
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let CurrentSongIndex=0;
const changeByLeftRight = ()=>{
    masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
}
let songs = [
    {filePath:"songs/uptown.mp3",
     fileCover:"song cover/uptown.jpg",
     fileName:"Uptown Funk"},
    {filePath:"songs/cvrtoon.mp3",
     fileCover:"song cover/cvrtoon.jpg",
     fileName:"Cvrtoon"},
    {filePath:"songs/enemy.mp3",
     fileCover:"song cover/enemy.jpg",
     fileName:"Enemy"},
    {filePath:"songs/hariOm.mp3",
     fileCover:"song cover/hariOm.jpg",
     fileName:"Hari Om"},
    {filePath:"songs/heat.mp3",
     fileCover:"song cover/heatwaves.webp",
     fileName:"Heat waves"},
    {filePath:"songs/yaadSataye.mp3",
     fileCover:"song cover/mujhkoYaad.jpg",
     fileName:"Mijhko yaad sataye teri"},
    {filePath:"songs/rolex.mp3",
     fileCover:"song cover/rolex.webp",
     fileName:"Rolex-Vikram"},
    {filePath:"songs/tandoori.mp3",
     fileCover:"song cover/Tandoori.jpg",
     fileName:"Tandoori Nights"},
    {filePath:"songs/thunder.mp3",
     fileCover:"song cover/thunder.jpg" ,
     fileName:"Thunder-Imaginary dragon"},   
    {filePath:"songs/zohrazabeen.mp3",
     fileCover:"song cover/zohrazabeen.jpg",
     fileName:"Ae Meri zohrazabeen"}   
]


//      Bottom Player 

masterPlay.addEventListener('click',()=>{
    if(masterAudioElement.paused||masterAudioElement.currentTime==0){
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        masterAudioElement.play();
        console.log("Master Play");
        gif[10].style.opacity="1";
        if(CurrentSongIndex==0){
            gif[0].style.opacity="1";
            imgs[0].style.animationName="track";
        }
        else{
            gif[CurrentSongIndex].style.opacity="1";
            imgs[CurrentSongIndex].style.animationName="track";
        }
        selectedSong();
    }
    else{
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        masterAudioElement.pause();
        imgs[0].style.animationName="";
        gif.forEach((e)=>{
            e.style.opacity="0";
        })
        Array.from(itemPlay).forEach(((el)=>{
            el.classList.remove("fa-pause");
            el.classList.add("fa-play");
        }))
        imgs.forEach((e)=>{
            e.style.animationName="";
        })
    }
})


// Setting seeking 
masterAudioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((masterAudioElement.currentTime/masterAudioElement.duration)*100);
    seeking.value=progress;
    if(masterAudioElement.currentTime==masterAudioElement.duration){
        if(CurrentSongIndex==9){
            CurrentSongIndex=0;
            masterAudioElement.src=songs[CurrentSongIndex].filePath;
            masterAudioElement.currentTime=0;
            masterAudioElement.play();
            songName.innerText = songs[CurrentSongIndex].fileName;
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            Array.from(itemPlay).forEach(((el)=>{
                el.classList.remove("fa-pause");
                el.classList.add("fa-play");
            }))
            gif.forEach((e)=>{
                e.style.opacity="0";
            })
            imgs.forEach((e)=>{
                e.style.animationName="";
            })
            gif[CurrentSongIndex].style.opacity="1";
            gif[10].style.opacity="1";
            gif[CurrentSongIndex].style.animationName="track";
            selectedSong();
            setTimeout(changeByLeftRight,500);
        }
        else{
            CurrentSongIndex++;
            console.log(CurrentSongIndex);
            masterAudioElement.src=songs[CurrentSongIndex].filePath;
            masterAudioElement.currentTime=0;
            masterAudioElement.play();
            songName.innerText = songs[CurrentSongIndex].fileName;
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            gif.forEach((e)=>{
                e.style.opacity="0";
            })
            imgs.forEach((e)=>{
                e.style.animationName="";
            })
            imgs[CurrentSongIndex].style.animationName="track";
            gif[CurrentSongIndex].style.opacity="1";
            gif[10].style.opacity="1";
            Array.from(itemPlay).forEach(((el)=>{
                el.classList.remove("fa-pause");
                el.classList.add("fa-play");
            }))
            selectedSong();
            setTimeout(changeByLeftRight,500);
        }
    }
})
seeking.addEventListener('click',()=>{
    masterAudioElement.currentTime = (seeking.value*masterAudioElement.duration)/100;
})


// Making song playlist by array
songItems.forEach((element,index)=>{
    element.getElementsByTagName("img")[0].src=songs[index].fileCover;
    element.getElementsByTagName("p")[0].innerText=songs[index].fileName;
})

// Item play 
Array.from(itemPlay).forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
        Array.from(itemPlay).forEach(((el)=>{
            el.classList.remove("fa-pause");
            el.classList.add("fa-play");
        }))
        gif.forEach((e)=>{
            e.style.opacity="0";
        })
        imgs.forEach((e)=>{
            e.style.animationName="";
        })
        if(masterAudioElement.paused||masterAudioElement.currentTime>=0){
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            CurrentSongIndex = index;
            masterAudioElement.src=songs[index].filePath;
            masterAudioElement.currentTime=0;
            gif[CurrentSongIndex].style.opacity="1";
            gif[10].style.opacity="1";
            imgs[CurrentSongIndex].style.animationName="track";
            masterAudioElement.play();
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            songName.innerText=songs[index].fileName;
        }
        else{
            e.target.classList.remove("fa-pause");
            e.target.classList.add("fa-play");
            CurrentSongIndex = index;
            masterAudioElement.src=songs[index].filePath;
            masterAudioElement.currentTime=0;
            masterAudioElement.pause();
            gif[CurrentSongIndex].style.opacity="0";
            gif[10].style.opacity="0";
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            songName.innerText=songs[index].fileName;
        }
    })
})

// Next song 
next.addEventListener('click',()=>{
    if(CurrentSongIndex==9){
        CurrentSongIndex=0;
        masterAudioElement.src=songs[CurrentSongIndex].filePath;
        masterAudioElement.currentTime=0;
        masterAudioElement.play();
        songName.innerText = songs[CurrentSongIndex].fileName;
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        Array.from(itemPlay).forEach(((el)=>{
            el.classList.remove("fa-pause");
            el.classList.add("fa-play");
        }))
        gif.forEach((e)=>{
            e.style.opacity="0";
        })
        imgs.forEach((e)=>{
            e.style.animationName="";
        })
        gif[CurrentSongIndex].style.opacity="1";
        gif[10].style.opacity="1";
        gif[CurrentSongIndex].style.animationName="track";
        selectedSong();
        setTimeout(changeByLeftRight,500);
    }
    else{
        CurrentSongIndex++;
        console.log(CurrentSongIndex);
        masterAudioElement.src=songs[CurrentSongIndex].filePath;
        masterAudioElement.currentTime=0;
        masterAudioElement.play();
        songName.innerText = songs[CurrentSongIndex].fileName;
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.forEach((e)=>{
            e.style.opacity="0";
        })
        imgs.forEach((e)=>{
            e.style.animationName="";
        })
        imgs[CurrentSongIndex].style.animationName="track";
        gif[CurrentSongIndex].style.opacity="1";
        gif[10].style.opacity="1";
        Array.from(itemPlay).forEach(((el)=>{
            el.classList.remove("fa-pause");
            el.classList.add("fa-play");
        }))
        selectedSong();
        setTimeout(changeByLeftRight,500);
    }
})

// Prevoius 
previous.addEventListener('click',()=>{
    if(CurrentSongIndex==0){
        CurrentSongIndex=9;
        console.log(CurrentSongIndex);
        masterAudioElement.src=songs[CurrentSongIndex].filePath;
        masterAudioElement.currentTime=0;
        masterAudioElement.play();
        songName.innerText = songs[CurrentSongIndex].fileName;
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.forEach((e)=>{
            e.style.opacity="0";
        })
        gif[CurrentSongIndex].style.opacity="1";
        imgs.forEach((e)=>{
            e.style.animationName="";
        })
        imgs[CurrentSongIndex].style.animationName="track";
        gif[10].style.opacity="1";
        Array.from(itemPlay).forEach(((el)=>{
            el.classList.remove("fa-pause");
            el.classList.add("fa-play");
        }))
        selectedSong();
        setTimeout(changeByLeftRight,500);
    }
    else{
        CurrentSongIndex--;
        console.log(CurrentSongIndex);
        masterAudioElement.src=songs[CurrentSongIndex].filePath;
        masterAudioElement.currentTime=0;
        masterAudioElement.play();
        songName.innerText = songs[CurrentSongIndex].fileName;
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.forEach((e)=>{
            e.style.opacity="0";
        })
        imgs.forEach((e)=>{
            e.style.animationName="";
        })
        imgs[CurrentSongIndex].style.animationName="track";
        gif[CurrentSongIndex].style.opacity="1";
        gif[10].style.opacity="1";
        Array.from(itemPlay).forEach(((el)=>{
            el.classList.remove("fa-pause");
            el.classList.add("fa-play");
        }))
        selectedSong();
        setTimeout(changeByLeftRight,500);
    }
})
