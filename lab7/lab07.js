const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
for(let i = 0;i < works.length;i++){
    //item
    let item = document.createElement("div");
    item.className = "item";
    //h4
    let h4 = document.createElement("h4");
    let h4node = document.createTextNode("Genre : " + works[i].tips);
    h4.appendChild(h4node);
    item.appendChild(h4);
    //box1
    let box1 = document.createElement("div");
    box1.className = "inner-box";
    let box1h3 = document.createElement("h3");
    let box1h3node = document.createTextNode(works[i].author);
    box1h3.appendChild(box1h3node);
    box1h3.style.display = "inline";
    box1.appendChild(box1h3);
    let box1h5 = document.createElement("h5");
    let box1h5node = document.createTextNode("lifetime:" + works[i].lifetime);
    box1h5.appendChild(box1h5node);
    box1h5.style.display = "inline";
    box1h5.style.marginLeft = "1em";
    box1.appendChild(box1h5);
    item.appendChild(box1);
    //box2
    let box2 = document.createElement("div");
    box2.className = "inner-box";
    let box2h3 = document.createElement("h3");
    let box2h3node = document.createTextNode("Popular Photos");
    box2h3.appendChild(box2h3node);
    box2.appendChild(box2h3);
    for (let j = 0;j < works[i].photos.length;j++){
        let photo = document.createElement("img");
        photo.className = "photo";
        photo.src = works[i].photos[j];
        box2.appendChild(photo);
    }
    item.appendChild(box2);
    //button
    let button = document.createElement("button");
    let buttonvalue = document.createTextNode("Visit");
    button.appendChild(buttonvalue);
    item.appendChild(button);
    //finally
    document.getElementsByClassName("header")[0].appendChild(item);
}