const searchIcon = document.querySelector('.magnifierimg');
const searchBar = document.querySelector('.search-bar-container');

// searchIcon.addEventListener('click', () => {
//     searcBar.classList.toggle('active')
// })

function searchBox() {
    searchBar.classList.remove('active')
};

document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target)) {
        searchBar.classList.add('active');
    }
});