const domString = {
	main: 'main',
	teams: 'teams',
};

export function renderPage(page) {
	document.getElementById(domString.main).innerHTML = page;
}

export function renderTeams(teams) {
	const teamDom = document.getElementById(domString.teams);
	if (!teamDom) return;
	teamDom.innerHTML = '';
	teams.forEach(({ crestUrl, name }, idx) => {
		teamDom.innerHTML += `
    <div class="row">
      <div class="col s12 m5 ${idx % 2 == 0 ? '' : 'offset-m1'}">
        <div class="card hoverable team">
          <div class="card-image">
            <img src="${crestUrl}" alt="${name}">
          </div>
          <div class="card-content">
            <p class="large-font center">${name}</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    `;
	});
}
