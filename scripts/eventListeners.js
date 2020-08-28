import getAncestorIDs from '../util/getAncestorIDs';

const clickEvent = (function () {
	const handleClickEvent = (e) => {
		const clickedIDs = getAncestorIDs(e.target);

		switch (true) {
			case clickedIDs.has('dropdown-trigger'):
				clickedIDs.get('dropdown-trigger').classList.toggle('is-active');
				break;
		}
	};

	document.addEventListener('click', handleClickEvent);
})();

const resizeEvent = (function () {
	const mediaQueries = () => {
		if (window.matchMedia('(min-width: 1023px)').matches) {
			document.querySelector('#dropdown-trigger').classList.add('is-active', 'is-center');
			document.querySelector('#dropdown-trigger').classList.remove('is-right');

			document.querySelectorAll('.dropdown-menu')[0].classList.add('position-relative');

			document.querySelectorAll('.dropdown-trigger')[0].classList.add('is-hidden');
		} else if (window.matchMedia('(max-width: 1023px)').matches) {
			document.querySelector('#dropdown-trigger').classList.remove('is-active');
			document.querySelector('#dropdown-trigger').classList.add('is-right');
			document.querySelectorAll('.dropdown-trigger')[0].classList.remove('is-hidden');
			document.querySelectorAll('.dropdown-menu')[0].classList.remove('position-relative');
		}
	};
	mediaQueries();
	window.addEventListener('resize', mediaQueries);
})();

export { clickEvent, resizeEvent };
