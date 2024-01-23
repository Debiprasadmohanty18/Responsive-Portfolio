function showsidebar() {
    let sidebar = document.querySelector('.dropdown-menu');
    sidebar.style.display = 'flex';
    let navbar = document.querySelector('.nav-menu-list');
    navbar.style.display = 'none';
}

function hidesidebar() {
    let sidebar = document.querySelector('.dropdown-menu');
    sidebar.style.display = 'none';
    let navbar = document.querySelector('.nav-menu-list');
    navbar.style.display = 'flex';
}