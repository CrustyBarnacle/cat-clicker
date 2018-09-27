// Listen for clicks on cat picture

let cat_elem = document.getElementById('catPicture');
let clicks = 0;

cat_elem.addEventListener('click', function() {
    clicks += 1;
    updateClicks();
    console.log('Clicks: `${clicks}`');
});

function updateClicks() {
    const catClicks = document.getElementById('catClicks');
    catClicks.innerHTML = `Total Clicks: ${clicks}`;
}
