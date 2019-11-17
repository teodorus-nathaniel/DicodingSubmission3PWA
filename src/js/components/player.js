export default function getPlayerComponent ({ name, shirtNumber, nationality }){
	return `
    <li class="player-item large-font">
      <div>
        <span class="player-number">
          <span>
            ${shirtNumber ? shirtNumber : ''}
          </span>
        </span>
        <span class="bold">${name}</span>
      </div>
      <span class="italic">${nationality}</span>
    </li>
  `;
}
