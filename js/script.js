// Small helper JS: set current year and enable smooth scrolling for in-page links
document.addEventListener('DOMContentLoaded', function(){
	// set current year in footer
	var yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Smooth scroll for internal anchor links
	var links = document.querySelectorAll('a[href^="#"]');
	links.forEach(function(link){
		link.addEventListener('click', function(e){
			var targetId = this.getAttribute('href').slice(1);
			var target = document.getElementById(targetId);
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior: 'smooth', block: 'start'});
				// Move focus for accessibility
				target.setAttribute('tabindex','-1');
				target.focus({preventScroll:true});
				// remove the tabindex after a short delay
				window.setTimeout(function(){
					target.removeAttribute('tabindex');
				},1000);
			}
		});
	});
});
