// Let's make this cat clickable!

let cat0 = document.getElementById('catPicture0');
let cat1 = document.getElementById('catPicture1');
let clicks0 = clicks1 = 0;

const cats = [cat0, cat1];

// Listen for clicks on cat picture
cat0.addEventListener('click', function() {
    clicks0 += 1;
    updateClicks();
});

cat1.addEventListener('click', function() {
    clicks1 += 1;
    updateClicks1();
});

function updateClicks() {
    const catClicks = document.getElementById('catClicks0');
    catClicks.innerHTML = `Cat 1 Clicks: ${clicks0}`;
};

function updateClicks1() {
    const catClicks = document.getElementById('catClicks1');
    catClicks.innerHTML = `Cat 2 Clicks: ${clicks1}`;
};