//items
const menu = [
  {
    id: 1,
    title: "Frozen Theme Cake",
    category: "girls",
    price: 450.00,
    img: "../images/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "dragoballZ Theme cake",
    category: "boys",
    price: 450.00,
    img: "../images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "BMW theme cake",
    category: "boys",
    price: 400.00,
    img: "../images/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "white wedding",
    category: "adults",
    price: 550.00,
    img: "../images/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "mother's birthday",
    category: "adult",
    price: 550.00,
    img: "../images/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "mother's birthday rose bucket",
    category: "adults",
    price: 45.00,
    img: "../images/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "ladies birthday",
    category: "adults",
    price: 550.00,
    img: "../images/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "birthday classic drip",
    category: "girls",
    price: 450.00,
    img: "../images/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Munch Up",
    category: "shakes",
    price: 0.00,
    img: "../images/munch-logo.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
  },
  
  
];

const sectionCenter = document.querySelector('.section-center');
const filterButtons = document.querySelectorAll('.filter-btn');

//when page loads
window.addEventListener('DOMContentLoaded' , () => {
  displayMenuItems(menu)
});


//filter items
filterButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(menuItem => {

      if (menuItem.category === category) {
        return menuItem
      }
    });

    if (category === 'all') {
      displayMenuItems(menu)
    }
    else {
      displayMenuItems(menuCategory);
    }
  });
});









displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map(item => {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">R${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}