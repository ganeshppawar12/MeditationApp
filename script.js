const mainContainer = document.getElementById('mainContainer');
const excersize = document.getElementById('excersize');
const MeditationExercize = [

{

    id : 1,
    img : "https://images.unsplash.com/photo-1571631546851-e4c964c616a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxtZWRpdGF0aW9ufGVufDB8fDB8fHww",
    para : " ",
    title : "Breathing Exercises",
    page : "Breathing"
},
{

    id : 2,
    img : "https://images.unsplash.com/photo-1571631546851-e4c964c616a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxtZWRpdGF0aW9ufGVufDB8fDB8fHww",
    para : " ",
    title : "Focus & Attention Exercises",
    page : "Focus&Attention"
},
{

    id : 3,
    img : "https://images.unsplash.com/photo-1571631546851-e4c964c616a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxtZWRpdGF0aW9ufGVufDB8fDB8fHww",
    para : " ",
    title : "Sound Awareness Exercise",
    page : "SoundAwareness"
},
{

    id : 4,
    img : "https://images.unsplash.com/photo-1571631546851-e4c964c616a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxtZWRpdGF0aW9ufGVufDB8fDB8fHww",
    para : " ",
    title : "Focus & Clarity Tasks",
    page : "Focus&ClarityTasks"
},


]

let mainContainerInnerHtml = " ";

MeditationExercize.map((value, index, array) => {

    mainContainerInnerHtml+= `
    
    <div class="card" style="width: 18rem; cursor:pointer" onclick="showExcersize(${value.id})">
  <a href="${value.page}.html">
            <img src="${value.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${value.title}</p>
              <p class="card-text">HI</p>
            </div>
            </a>
          </div>
    
    `


})

mainContainer.innerHTML = mainContainerInnerHtml;




// function showExcersize(id){
//     excersize.innerHTML = 
    
//     `
//     <div class="w-44 h-44 bg-blue-800 rounded-full flex items-center justify-center" id="breath>
//     <p class="text-center text-white">Breath in</p>
//     `
    
//     ;
// }