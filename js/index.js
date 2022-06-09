const sectionImg = document.querySelectorAll('.section-img');
const gnb = document.querySelector('#gnb');
const gnbList = document.querySelectorAll('#gnb li');
const downBtn = document.querySelector('.downBtn');
const sectionThumb = document.querySelector('.section-thumb');
const section = document.querySelectorAll('.section');
const topBg = document.querySelector('.bg');

console.log(sectionImg);
console.log(section)

new fullpage('#fullpage', {
	licenseKey: 'OPEN_SOURCE_GPLv3_LICENSE',
	autoScrolling:true,
	scrollHorizontally: true,
	menu: '#gnb',
	anchors: ['section0', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],

	afterRender: function(){
		var pluginContainer = this;
		topBg.classList.add('zoom')
	},

	afterLoad: function(origin, destination, direction){
		let num = destination.index;

		if(num == 0) {
			gnbList.forEach((ele) => {
				console.log(ele)
				gnb.classList.remove('go')
			})
			downBtn.classList.remove('go')

		} else if(num>=1 && num<=6) {
			gnb.classList.add('go')
			downBtn.classList.add('go')
		} else {
			gnb.classList.remove('go')
			downBtn.classList.remove('go')
		}

		if(num == 1) {
			sectionThumb.classList.add('on')
		} else {
			sectionThumb.classList.remove('on')
		}

		if(num == 2) {
			sectionImg.forEach((ele) => {
				console.log(ele)
				ele.classList.remove('focus');
				ele.classList.remove('start');
			})
			sectionImg[0].classList.add('focus')
		} else if(num == 3) {
			sectionImg[1].classList.add('focus')
		} else if(num == 4) {
			sectionImg[2].classList.add('focus')
		} else if (num == 5) {
			sectionImg[3].classList.add('start')
		} else {
			sectionImg[4].classList.add('focus')
		}


	},

});