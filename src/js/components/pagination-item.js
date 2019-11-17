export default function getPaginationItemComponent (number){
	return `
    <li data-page="${number}" class="cursor">
      <span>
        ${number}
      </span>
    </li>
  `;
}
