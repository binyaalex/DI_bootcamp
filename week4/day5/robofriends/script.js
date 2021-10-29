let body = document.body
let section = document.getElementById('all')
let nav = document.createElement(`nav`)
section.appendChild(nav)
let container = document.createElement(`div`)
container.classList.add(`container`)
section.appendChild(container)

const robots = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
      }
      ];

class Robot {
  constructor(id, name, username, email, image) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.image = image;
  }
};


robot0 = new Robot(robots[0].id, robots[0].name, robots[0].username, robots[0].email, robots[0].image);
robot1 = new Robot(robots[1].id, robots[1].name, robots[1].username, robots[1].email, robots[1].image);
robot2 = new Robot(robots[2].id, robots[2].name, robots[2].username, robots[2].email, robots[2].image);
robot3 = new Robot(robots[3].id, robots[3].name, robots[3].username, robots[3].email, robots[3].image);
robot4 = new Robot(robots[4].id, robots[4].name, robots[4].username, robots[4].email, robots[4].image);
robot5 = new Robot(robots[5].id, robots[5].name, robots[5].username, robots[5].email, robots[5].image);
robot6 = new Robot(robots[6].id, robots[6].name, robots[6].username, robots[6].email, robots[6].image);
robot7 = new Robot(robots[7].id, robots[7].name, robots[7].username, robots[7].email, robots[7].image);
robot8 = new Robot(robots[8].id, robots[8].name, robots[8].username, robots[8].email, robots[8].image);
robot9 = new Robot(robots[9].id, robots[9].name, robots[9].username, robots[9].email, robots[9].image);

for (let i = 0; i < robots.length; i++) {
	let newD = document.createElement(`div`)
	newD.classList.add(`robot`)
	let newI = document.createElement(`img`)
	newI.setAttribute(`src`, robots[i].image) 
	let newh = document.createElement(`h3`)
	newh.textContent = robots[i].name
	let newP = document.createElement(`p`)
	newP.textContent = robots[i].email
	newD.appendChild(newI)
	newD.appendChild(newh)
	newD.appendChild(newP)
	container.appendChild(newD)
}
let h1 = document.createElement(`h1`)
h1.textContent = `ROBOFRIEND`
nav.appendChild(h1)
let search = document.createElement(`input`)
search.setAttribute(`placeholder`, `search robots`)
nav.appendChild(search)

const search1 = () => {
	for (let i = 0; i < robots.length; i++) {
		if (search.value !== ``) {
			if (robots[i].name.toLowerCase().includes(search.value)) {
				container.children[i].style.display = `block`
			} else {
				container.children[i].style.display = `none`
			}
		} else {
			container.children[i].style.display = `block`
		}
	}	
}

setInterval(search1, 100)
