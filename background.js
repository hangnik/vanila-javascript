const images = [
   /*  "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg" */
    "6.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)];

// js -> html element 추가하기
const bgimage = document.createElement("img");

bgimage.src = `img/${choseImage}`;
// body에 이미지 추가
// appendChild() : 해당 태그 가장 뒤에 추가
// prepend() : 해당 태그 가장 앞에 추가
//document.body.appendChild(bgimage);
document.body.style.backgroundImage = "url(" + `img/${choseImage}` + ")";