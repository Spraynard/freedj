var pictures = document.getElementsByClassName('pic');
var picturesIndex = 0;
pictures[picturesIndex].style.display = "block"
var leftarrow = document.getElementById('leftarrow');
var rightarrow = document.getElementById('rightarrow');

leftarrow.addEventListener('click', function(event) {
	picture = document.getElementsByClassName('pic')[picturesIndex];
	dot = document.getElementsByClassName('active')[0]
	dot.classList.remove('active')
	picture.style.display = "none"

	picturesIndex--
	if (picturesIndex == -1) {
		picturesIndex = pictures.length - 1;
	}

	picture = document.getElementsByClassName('pic')[picturesIndex];
	dot = document.getElementsByClassName('dot')[picturesIndex];
	dot.classList.add('active');
	picture.style.display = "block"
});

rightarrow.addEventListener('click', function(event) {

	picture = document.getElementsByClassName('pic')[picturesIndex];
	picture.style.display = "none"
	picturesIndex++

	if (picturesIndex == (pictures.length)) {
		picturesIndex = 0;
	}

	picture = document.getElementsByClassName('pic')[picturesIndex];
	picture.style.display = "block"
});