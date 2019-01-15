document.addEventListener("DOMContentLoaded",
// Hieronder heb een functie gemaakt die .sprite stil laat staan wanneer de pijltjes naar links en rechts niet worden ingedrukt.
function() {
	var sprite = document.querySelector('.sprite'),
		key = {left: false, right: false},
		trans = 0,
		property = getTransformProperty(sprite);
// Dit zorgt ervoor dat de transities goed werken op zo goed als alle browsers (https://stackoverflow.com/a/9607205)
	function getTransformProperty(element) {
	    var properties = [
	        'transform',
	        'WebkitTransform',
	        'msTransform',
	        'MozTransform',
	        'OTransform'
	    ];
	    var p;
	    while (p = properties.shift()) {
	        if (typeof element.style[p] != 'undefined') {
	            return p;
	        }
	    }
	    return false;
	}
// Een functie waarbij de sprite automatisch door repositionering op 0 px van de x-as staat.
	function translate() {
		sprite.style[property] = 'translateX(' + trans + 'px)';
	}
// Hieronder heb ik een functie die het personage laat lopen. Ik zeg eerst dat wanneer er een keycode in wordt gedrukt (pijltje
// naar links is 37, naar rechts is 39) hij een toets eraan moet vinden en vervolgens zeg ik per toets wat de sprite moet doen. 
	function walk(e) {
		var keyCode = e.keyCode;
		if (keyCode === 39) {
			key.right = true;

		} else if (keyCode === 37) {
			key.left = true;
		}
    if (key.right === true) {
			trans += 0;
			translate();
			sprite.classList.remove('left');
			sprite.classList.add('right');
			sprite.classList.add('walk-right');
		} else if (key.left === true) {
			trans -= 0;
			translate();
			sprite.classList.remove('right');
			sprite.classList.add('left');
			sprite.classList.add('walk-left');
		}
	}
// Hier geef ik aan dat hij moet stoppen met lopen wanneer de toetsen worden losgelaten.
	function stop(e) {
		var keyCode = e.keyCode;
		if (keyCode === 39) {
			key.right = false;
		} else if (keyCode === 37) {
			key.left = false;
		}
		if (key.right === false) {
			sprite.classList.remove('walk-right');
		} if (key.left === false) {
			sprite.classList.remove('walk-left');
		}
	}

	document.addEventListener('keydown', walk, false);
	document.addEventListener('keyup', stop, false);
}
);