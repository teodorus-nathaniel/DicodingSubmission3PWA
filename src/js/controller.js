import * as model from './model';
import * as view from './view';
import getPaginationItemComponent from './components/pagination-item';

async function changePage (pagename){
	let id;
	if (pagename == '') pagename = 'home';
	else if (!isNaN(pagename)) {
		id = pagename;
		pagename = 'team-detail';
	} else return;

	const page = await model.getPage(pagename);
	view.renderPage(page);

	switch (pagename) {
		case 'home':
			initHomePage();
		default:
			initTeamDetailPage(id);
	}
}

function initTeamDetailPage (id){
	initTeamDetailInfo(id);
	initTeamMatch(id);
}

async function initTeamMatch (id){
	const matches = await model.getTeamMatches(id);
	console.log(matches);

	const itemPerPage = 5;
	initPagination(matches, itemPerPage, id);
}

function initPagination (items, itemPerPage, id){
	const pagesCount = Math.ceil(items.length / itemPerPage);
	const paginationDom = document.getElementById(view.domString.pagination);
	paginationDom.textContent = '';
	Array.from({ length: pagesCount }).forEach((_, idx) => {
		paginationDom.innerHTML += getPaginationItemComponent(idx + 1);
	});

	let selectedPage = paginationDom.children[0];
	selectedPage.classList.add('active');
	const itemsDisplayed = paginate(items, 1, itemPerPage);
	view.renderMatches(itemsDisplayed, id);

	paginationDom.addEventListener('click', async (e) => {
		const clickedList = e.target.closest('#pagination li');
		if (!clickedList) return;

		selectedPage.classList.remove('active');
		clickedList.classList.add('active');
		selectedPage = clickedList;

		const page = clickedList.dataset.page;

		const itemsDisplayed = paginate(items, page, itemPerPage);
		view.renderMatches(itemsDisplayed, id);
	});
}

function paginate (items, page, itemPerPage){
	const startIndex = (page - 1) * itemPerPage;
	const itemsDisplayed = items.slice(startIndex, startIndex + itemPerPage);

	return itemsDisplayed;
}

async function initTeamDetailInfo (id){
	const team = await model.getTeamInfo(id);
	view.renderTeam(team);
	view.renderPlayers(team.squad);

	const tabDom = document.getElementById(view.domString.positionTab);
	let selectedTab = document.querySelector(`#${view.domString.positionTab} li.active`);
	tabDom.addEventListener('click', (e) => {
		const clicked = e.target.closest('#position-tab li');
		if (!clicked) return;

		selectedTab.classList.remove('active');
		clicked.classList.add('active');
		selectedTab = clicked;

		const target = clicked.dataset.tab;
		view.renderPlayers(team.squad, target);
	});
}

async function initHomePage (){
	const teamsDom = document.getElementById(view.domString.teams);
	teamsDom.addEventListener('click', (e) => {
		const target = e.target;
		const closestTeam = target.closest('.team');
		if (closestTeam && target.tagName !== 'I' && !target.closest('.card-reveal')) {
			window.location.hash = closestTeam.dataset.id;
		}
	});

	const teams = await model.getTeams();
	view.renderTeams(teams);
}

export default function init (){
	view.initNav();
	changePage(window.location.hash.substring(1));
	window.addEventListener('hashchange', () => changePage(window.location.hash.substring(1)));
}
