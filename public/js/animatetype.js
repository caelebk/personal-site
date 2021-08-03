
function waitingTime(speed){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, speed)
    })
}

async function typeWriter(query, text, speed = 50) {
    let display = document.querySelector(query);
    for(let x = 0; x < text.length; x++) {
        console.log(display.innerHTML);
        await waitingTime(speed);
        display.innerHTML += text[x];
    }
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 500);
    });
}

async function response(query, text){
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            document.querySelector(query).innerHTML = text;
            resolve();
        }, 100)
    })
}

function fadein(){
    let profile = document.querySelector('.profile');
    profile.classList.add('fadein');
}

typeWriter("#typetext1", ">  console.log(caeleb.name)").then(()=>{
    response("#typetext1A", '>  Caeleb Koharjo').then(()=>{
        typeWriter('#typetext2', '>  console.log(caeleb.age)').then(()=>{
            response('#typetext2A', '>  20').then(()=>{
                typeWriter('#typetext3', '>  console.log(caeleb.location)').then(()=>{
                    response('#typetext3A', '>  Vancouver, British Columbia').then(()=>{
                        typeWriter('#typetext4', '>  console.log(caeleb.email)').then(()=>{
                            response('#typetext4A', '>  khocaeleb@gmail.com').then(()=>{
                                typeWriter('#typetext5', '>  console.log(caeleb.hobbies)').then(()=>{
                                    response('#typetext5A', '>  ["gaming", "anime", "cooking", "video editing", "coding"]');
                                }).then(()=>{
                                    fadein();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})