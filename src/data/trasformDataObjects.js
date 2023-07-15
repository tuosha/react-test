const _extractId = (item) => {
	const idRegExp = /\/([0-9]*)\/$/;
	return item.url.match(idRegExp)[1];
};

const _trasformPersonData = (person) => {
	return {
		id: _extractId(person),
		birth_year: person.birth_year,
		eye_color: person.eye_color,
		films: person.films,
		gender: person.gender,
		hair_color: person.hair_color,
		height: person.height,
		homeworld: person.homeworld,
		mass: person.mass,
		name: person.name,
		skin_color: person.skin_color,
		species: person.species,
		starships: person.starships,
		vehicles: person.vehicles
	}
}

export {
	_trasformPersonData
}

