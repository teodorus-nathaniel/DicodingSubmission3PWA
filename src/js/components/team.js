export default function getTeamComponent({ crestUrl, name, website, email, founded, phone, address, id }, idx) {
	return `
    <div class="col s12 m5 ${idx % 2 == 0 ? '' : 'offset-m1'}">
      <div class="card hoverable team" data-id="${id}">
        <div class="card-image">
          <a class="btn-floating hoverable halfway-fab waves-effect waves-light white"><i class="material-icons red-text">favorite_border</i></a>
          <img src="${crestUrl}" alt="${name}" class="cursor">
        </div>
        <div class="card-content">
          <i class="material-icons activator cursor">more_vert</i>
          <p class="large-font center cursor bold">${name}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
          <p>Email      : ${email}</p>
          <p>Phone      : ${phone}</p>
          <p>Address    : ${address}</p>
          <p>Founded on : ${founded}</p>
        </div>
        <div class="card-action">
          <a href="${website}" target="_blank">Visit ${name} official website</a>
        </div>
      </div>
    </div>
  `;
}
