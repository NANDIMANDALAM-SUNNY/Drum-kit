

{
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

	const animateCrashOrRide = () => {
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

	const animateHiHatClosed = () => {
		hiHatTop.style.top = '171px';
	};

	const playSound = e => {
		const keyCode = e.keyCode,
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

		switch(keyCode) {
			case 69:
			case 82:
				animateCrashOrRide();
				break;
			case 75:
				animateHiHatClosed();
				break;
		}

		keyElement.classList.add(playingClass);
	};

	const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;

		e.target.style.top = '166px';
	};	

	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	const drumKeys = Array.from(document.querySelectorAll('.key'));

	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	crashRide.addEventListener('transitionend', removeCrashRideTransition);
	hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

	window.addEventListener('keydown', playSound);
}
//  button
document.getElementById("myBtn1").addEventListener("click", function() {
    const audioElement1 = document.getElementById("one")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    button
document.getElementById("myBtn2").addEventListener("click", function() {
    const audioElement1 = document.getElementById("two")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    button
  document.getElementById("myBtn3").addEventListener("click", function() {
    const audioElement1 = document.getElementById("three")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//  button
  document.getElementById("myBtn4").addEventListener("click", function() {
    const audioElement1 = document.getElementById("four")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });

//    g button
document.getElementById("myBtn5").addEventListener("click", function() {
    const audioElement1 = document.getElementById("five")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    f button
document.getElementById("myBtn6").addEventListener("click", function() {
    const audioElement1 = document.getElementById("six")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    e button
document.getElementById("myBtn7").addEventListener("click", function() {
    const audioElement1 = document.getElementById("seven")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    r button
document.getElementById("myBtn8").addEventListener("click", function() {
    const audioElement1 = document.getElementById("eight")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    i button
document.getElementById("myBtn9").addEventListener("click", function() {
    const audioElement1 = document.getElementById("nine")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
//    k button
document.getElementById("myBtn10").addEventListener("click", function() {
    const audioElement1 = document.getElementById("ten")
		audioElement1.currentTime = 0;
    audioElement1.play();
    
  });
  var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
  };