// Find all menu and submenu items
const menuItems = document.querySelectorAll('.menu_item-btn');
const submenuItems = document.querySelectorAll('.submenu_item-btn');

// Add event listeners
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', menuItemClickListener);
}

for (let i = 0; i < submenuItems.length; i++) {
    submenuItems[i].addEventListener('click', submenuItemClickListener);
}

document.addEventListener('click', outsideClickListener)

// Listeners implementation
function menuItemClickListener(e) {
    const target = e.target;
    const parent = target.closest('.menu_item');

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i].parentElement;
        if (parent !== item) {
            item.classList.remove('menu_item--active')
        }
    }

    parent.classList.toggle('menu_item--active');
}

function submenuItemClickListener(e) {
    const target = e.target;
    const menuItem = target.closest('.menu_item');
    const menuItemBtn = menuItem.querySelector('.menu_item-btn');
    alert(menuItemBtn.innerHTML)
}

function outsideClickListener(event) {
    let activeElement;

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i].parentElement;
        if (item.classList.contains('menu_item--active')) {
            activeElement = item;
        }
    }

    if (activeElement && event.target.closest('.menu_item') === null) {
        activeElement.classList.remove('menu_item--active')
    }
}
