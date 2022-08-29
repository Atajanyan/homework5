//ex2,ex3

let tbody = document.querySelector('tbody')
let input = document.querySelector('input')
let addButton = document.querySelector('.add')
let MaxValue = 10
input.value = MaxValue

let x;
let count = 0;
function draw (el){
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')        
    let tdName = document.createElement('td')        
    let tdStatus = document.createElement('td')        
    let tdDescription = document.createElement('td')
    let tdDelelete = document.createElement('td')
    let button = document.createElement('button')
    button.innerText = 'Delete'
    tdDelelete.append(button)
    tdId.innerText = el.id
    tdName.innerText = el.name
    tdStatus.innerText = el.status

    if(count<MaxValue && el.status===true){
        tdDescription.innerText = el.description
        count++
    }else{tdDescription.innerText = 'N/A'}

    button.addEventListener('click',()=>{
        tdDelelete.parentElement.remove()
    })

    tr.append(tdId,tdName,tdStatus,tdDescription,tdDelelete)
    tbody.append(tr)
}

fetch('http://127.0.0.1:5502/src.js')
.then(data=>data.json())
.then(data=>{
    
    data.forEach(el => {
        draw(el);
        x = data
    });
    
});


addButton.addEventListener('click', () => {
        MaxValue = Number(input.value);
        count = 0;
        tbody.innerHTML = '';
x.forEach(draw);
})


