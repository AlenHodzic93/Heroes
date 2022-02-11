
var heroji = [
    {
        id: 1,
        name: `Goku`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        img: `data:image/jpeg;base64,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`
    },
    {
        id: 2,
        name: `Hulk`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCM9w1cwSsoMka5A73n9ksy31g9c1bxxNdw&usqp=CAU`
    },
    {
        id: 3,
        name: `Flash`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        img: `https://cdn.europosters.eu/image/750/posters/flash-solo-i34994.jpg`
    }
];

function displayTable(data) {
    var table = document.createElement(`table`);
    table.border = 1;
    var theadTr = document.createElement(`tr`);
    var idCell = document.createElement(`th`);
    idCell.innerHTML = `ID`;
    var nameCell = document.createElement(`th`);
    nameCell.innerHTML = `Name`;
    var descCell = document.createElement(`th`);
    descCell.innerHTML = `Desctription`;
    var imgCell = document.createElement(`th`);
    imgCell.innerHTML = `Image`;


    for (var i = 0; i < data.length; i++) {
        var heroj = data[i];
        var tbodyTr = document.createElement(`tr`);
        var idTd = document.createElement(`td`);
        idTd.innerHTML = heroj.id;
        var nameTd = document.createElement(`td`);
        nameTd.innerHTML = heroj.name;
        var descTd = document.createElement(`td`);
        descTd.innerHTML = heroj.description;
        var imgTd = document.createElement(`td`);
        var herojImg = document.createElement(`img`);
        herojImg.src = heroj.img;
        herojImg.style.width = "100px";
        imgTd.appendChild(herojImg);
        tbodyTr.appendChild(idTd);
        tbodyTr.appendChild(nameTd);
        tbodyTr.appendChild(descTd);
        tbodyTr.appendChild(imgTd);
        table.appendChild(tbodyTr);
    }
    theadTr.appendChild(idCell);
    theadTr.appendChild(nameCell);
    theadTr.appendChild(descCell);
    theadTr.appendChild(imgCell);
    table.appendChild(theadTr);
    document.body.appendChild(table);
}

function createThCell(text) {
    var cell = document.createElement(`th`);
    cell.innerHTML = text;
}

displayTable(heroji);