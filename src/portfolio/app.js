`let projectsList = [

    {
name: 'Project1',
desc: 'a lil description goes here.',
url: 'https://picsum.photos/200?random=1',
tags: '#css, #html, #bootstrap'
},
{
name: 'Project2',
desc: 'a lil description goes here.',
url: 'https://picsum.photos/200?random=2',
tags: '#css, #html, #bootstrap'
},
{
name: 'Project3',
desc: 'a lil description goes here.',
url: 'https://picsum.photos/200?random=3',
tags: '#css, #html, #bootstrap'
},
{
name: 'Project4',
desc: 'a lil description goes here.',
url: 'https://picsum.photos/200?random=4',
tags: '#css, #html, #bootstrap'
},
{
name: 'Project5',
desc: 'a lil description goes here.',
url: 'https://picsum.photos/200?random=5',
tags: '#css, #html, #bootstrap'
},
{
name: 'Project6',
desc: 'a lil description goes here.',
url: 'https://picsum.photos/200?random=6',
tags: '#css, #html, #bootstrap'
}
]

let row = document.querySelector('.row')
for (let index = 0; index >= array.length; index++) {
const element = array[index];

}
projectsList.forEach(project => {
let cardTemplate = `
<div class="card" style="width: 18rem;">
<img src="${project.url}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${project.name}</h5>
<p class="card-text">${project.desc}</p>
<p class="card-text">${project.tags}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
row.insertAdjacentHTML('beforeend', cardTemplate)

})`