const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const img = document.getElementById("person-img")
const charName = document.getElementById("name");
const description = document.getElementById("description");

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
  let characterObject = [{
    name: {},
    img: {},
    description: {}
  }];

  characterObjectArray = [];

  for (let i = 0; i < 20; i++) {
    characterObject['description'] = toArray.data.results[i].description;
    characterObject['name'] = toArray.data.results[i].name;
    let imgPath = toArray.data.results[i].thumbnail.path;

    if (imgPath.includes('image_not_available')) {
      characterObject['img'] = 'dummy.png';
    }
    else {
      characterObject['img'] = toArray.data.results[i].thumbnail.path + '/landscape_medium.jpg';
    }
    
    characterObjectArray.push(characterObject);
    
    console.log('Character added' + characterObject['name'] + "" +
      characterObject['description'] + "" + characterObject['img']);
  }

  setCharacter();
}

async function setCharacter() {
  let size = characterObjectArray.length;
  let num = Math.floor(Math.random() * await size);

  charName.textContent = await characterObjectArray[num].name;
  img.src = await characterObjectArray[num].img;
  description.textContent = await characterObjectArray[num].description
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
