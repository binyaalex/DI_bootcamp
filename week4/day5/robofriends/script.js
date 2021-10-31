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


for (let i = 0; i < robots.length; i++) {
  let robot = new Robot(robots[i].id, robots[i].name, robots[i].username, robots[i].email, robots[i].image)
  console.log(robot)
	let newD = document.createElement(`div`)
	newD.classList.add(`robot`)
	let newI = document.createElement(`img`)
	newI.setAttribute(`src`, robot.image) 
	let newh = document.createElement(`h3`)
	newh.textContent = robot.name
	let newP = document.createElement(`p`)
	newP.textContent = robot.email
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
