import * as model from './model';
import * as view from './view';
import getPaginationItemComponent from './components/pagination-item';

async function changePage (pagename){
	let id;
	if (pagename == '') pagename = 'home';
	else if (!isNaN(pagename)) {
		id = pagename;
		pagename = 'team-detail';
	}

	const page = await model.getPage(pagename);
	view.renderPage(page);

	switch (pagename) {
		case 'home':
			initHomePage();
			break;
		case 'subscribed':
			initSubscribedPage();
			break;
		default:
			initTeamDetailPage(id);
	}
}

async function initSubscribedPage (){
	const teams = await model.getFavoriteTeams();
	const matches = await model.getSavedMatches();

	teams.forEach((curr) => (curr.liked = true));
	matches.forEach((curr) => (curr.saved = true));

	view.renderTeams(teams, "You haven't favorited any team");
	view.renderMatches(matches, -1, "You haven't subscribed to any match");

	const favTeamsDom = document.getElementById(view.domStringID.teams);
	const savedMatchesDom = document.getElementById(view.domStringID.matches);

	favTeamsDom.addEventListener('click', teamClickListener);
	favTeamsDom.addEventListener('click', teamLikeClickListener);
	savedMatchesDom.addEventListener('click', matchesContainerListener);
}

function initTeamDetailPage (id){
	initTeamDetailInfo(id);
	initTeamMatch(id);
}

async function initTeamMatch (id){
	const matches = await model.getTeamMatches(id);

	const itemPerPage = 5;
	initPagination(matches, itemPerPage, id);

	document.getElementById(view.domStringID.matches).addEventListener('click', matchesContainerListener);
}

function matchesContainerListener (e){
	const closestLink = e.target.closest(`.${view.domStringClass.notifyLink}`);
	if (!closestLink) return;

	const id = closestLink.dataset.id;
	toggleSavedMatch(id);
}

async function toggleSavedMatch (id){
	const res = await model.toggleSavedMatch(id);
	if (res.status) {
		view.renderNotifyButton(id, res.saved);
	} else {
		alert('Error saving match :(');
	}
}

async function initHomePage (){
	const teamsDom = document.getElementById(view.domStringID.teams);
	teamsDom.addEventListener('click', teamClickListener);

	const teams = await model.getTeams();
	view.renderTeams(teams);

	teamsDom.addEventListener('click', teamLikeClickListener);
}

function teamClickListener (e){
	const target = e.target;
	const closestTeam = target.closest('.team');
	if (closestTeam && target.tagName !== 'I' && !target.closest('.card-reveal')) {
		window.location.hash = closestTeam.dataset.id;
	}
}

function teamLikeClickListener (e){
	const closestButton = e.target.closest('.like-button');
	if (!closestButton) return;

	const id = closestButton.dataset.id;
	toggleFavoriteTeam(id, document.querySelector(`.${view.domStringClass.likeButton}[data-id="${id}"]`));
}

async function toggleFavoriteTeam (id, component){
	const res = await model.toggleFavoriteTeam(id);
	if (res.status) {
		view.renderLikeButton(component, res.liked);
	} else {
		alert('Error saving team to favorite :(');
	}
}

function initPagination (items, itemPerPage, id){
	const pagesCount = Math.ceil(items.length / itemPerPage);
	const paginationDom = document.getElementById(view.domStringID.pagination);
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
	view.renderLikeButton(document.getElementById(view.domStringID.likeButton), team.liked);

	const tabDom = document.getElementById(view.domStringID.positionTab);
	let selectedTab = document.querySelector(`#${view.domStringID.positionTab} li.active`);
	tabDom.addEventListener('click', (e) => {
		const clicked = e.target.closest('#position-tab li');
		if (!clicked) return;

		selectedTab.classList.remove('active');
		clicked.classList.add('active');
		selectedTab = clicked;

		const target = clicked.dataset.tab;
		view.renderPlayers(team.squad, target);
	});

	document.getElementById(view.domStringID.likeButton).addEventListener('click', () => {
		toggleFavoriteTeam(team.id, document.getElementById(view.domStringID.likeButton));
	});
}

export default function init (){
	view.initNav();
	changePage(window.location.hash.substring(1));
	window.addEventListener('hashchange', () => changePage(window.location.hash.substring(1)));
}
