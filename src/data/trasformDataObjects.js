const _extractId = (item) => {
	const idRegExp = /\/([0-9]*)\/$/;
	return item.url.match(idRegExp)[1];
};

const _trasformPersonData = (person) => {
	return {
		id: _extractId(person),
		name: person.name,
		birth_year: person.birth_year,
		eye_color: person.eye_color,
		gender: person.gender,
		// films: person.films,
		// hair_color: person.hair_color,
		// height: person.height,
		// homeworld: person.homeworld,
		// mass: person.mass,
		// skin_color: person.skin_color,
		// species: person.species,
		// starships: person.starships,
		// vehicles: person.vehicles
	}
}

export {
	_trasformPersonData
}

