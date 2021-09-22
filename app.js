const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const img = document.getElementById("person-img")
const charName = document.getElementById("name");
const info = document.getElementById("info");

prevBtn.addEventListener('click', function () {
  fetchCharacter();
});

nextBtn.addEventListener('click', function () {
  fetchCharacter();
});

async function fetchCharacter() {
  const response = await fetch("http://gateway.marvel.com/v1/public/characters?apikey=13044cb64bc8e85926262acc0c9e1320&ts=&hash=288e1712eea1b38c41cddc3594759d07", {
        headers: {
            Accept: "application/json",
        },
    });
  const toArray = (await response.json());
  var characterArray = [];
  var characterImgArray = [];
  var characterInfoArray = [];
  for (let i = 0; i < 20; i++) {
    characterInfoArray.push(toArray.data.results[i].description);
    characterArray.push(toArray.data.results[i].name);
    characterImgArray.push(toArray.data.results[i].thumbnail.path + '/landscape_medium.jpg')
  }

  //test for null img & description
  for (const x of characterImgArray) {
    characterImgArray.pop(characterImgArray.filter(path => path.indexOf(path.includes('image_not_available'))));
  }
  let characterImg = await characterImgArray[Math.floor(Math.random() * await characterImgArray.length)];
  let character = await characterArray[Math.floor(Math.random() * await characterArray.length)];
  let characterInfo = await characterInfoArray[Math.floor(Math.random() * await characterInfoArray.length)];
  console.log(characterInfoArray.length)
  charName.textContent = await character;
  img.src = await characterImg;
  info.textContent = await characterInfo;
}

async function convertToCharacters(jsonResponse) {
  const charArray = Object.values(jsonResponse);
  return charArray;
}

async function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}
// local reviews data
// const reviews = [
//   {
//     id: 1,
//     name: "susan smith",
//     job: "web developer",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//     text:
//       "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   },
//   {
//     id: 2,
//     name: "anna johnson",
//     job: "web designer",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//     text:
//       "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//   },
//   {
//     id: 3,
//     name: "peter jones",
//     job: "intern",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
//     text:
//       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//   },
//   {
//     id: 4,
//     name: "bill anderson",
//     job: "the boss",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
//     text:
//       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//   },
// ];
