let ul = document.querySelector('ul');

let allPeople = got.houses.reduce((acc,cv) => {
    acc.push(cv.people);
    return acc;
},[]).flat();
console.log(allPeople);
allPeople.forEach(person => {
    let li = document.createElement('li');
    li.classList.add('flex-30','card');

    let img = document.createElement('img');
    img.src = person.image;
    img.alt = person.name;

    let h2 = document.createElement('h2');
    h2.innerText = person.name;

    let p = document.createElement('p');
    p.innerText = person.description;

    let btn = document.createElement('a');
    btn.href = person.wikiLink;
    btn.innerText = 'Learn More!';
    
    let head = document.createElement('div');
    head.classList.add('center');
    head.append(img,h2);

    let footer = document.createElement('div');
    footer.classList.add('text-center');
    footer.append(btn);

    li.append(head,p,footer);
    ul.append(li);
});