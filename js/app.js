// Let's make this cat clickable!

let cat_elem = document.getElementById('catPicture');
let clicks = 0;

// Listen for clicks on cat picture
cat_elem.addEventListener('click', function() {
    clicks += 1;
    updateClicks();
});

function updateClicks() {
    const catClicks = document.getElementById('catClicks');
    catClicks.innerHTML = `Total Clicks: ${clicks}`;
}
