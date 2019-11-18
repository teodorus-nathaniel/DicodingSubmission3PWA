import moment from 'moment';

export default function getMatchComponent({ homeTeam, awayTeam, utcDate, competition, id, saved }, teamId) {
	const date = moment(new Date(utcDate));
	return `
    <li>
      <div class="card">
        <div class="card-content">
          <div class="card-title match-title">
            <p class="larger-font center-align light-bold">${competition.name}</p>
            <p class="center-align">${date.format('dddd, MMMM Do YYYY h:mm a')}</p>
          </div>
          <div class="match-item row">
            <div class="col s12 m5">
              <span class="italic">Home</span>
              <span class="larger-font ${homeTeam.id === +teamId ? 'bold' : ''}">${homeTeam.name}</span>
            </div>
            <span class="col s12 m2 center very-large-font">VS</span>
            <div class="col s12 m5">
              <span class="italic">Away</span>
              <span class="larger-font ${awayTeam.id === +teamId ? 'bold' : ''}">${awayTeam.name}</span>
            </div>
          </div>
        </div>
        <div class="card-action">
          <a class="cursor notify-link" data-id="${id}">${saved
		? 'Notification scheduled'
		: 'Notify me about this match'}</a>
          <a class="italic right hide-on-small-only">${date.fromNow()}</a>
          <a class="italic right-align block-display hide-on-med-and-up">${date.fromNow()}</a>
        </div>
      </div>
    </li>
  `;
}
