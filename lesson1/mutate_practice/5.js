let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal, // warhog references animal object.
};

animal = { // animal changes its reference
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

/*
	This is an example of an object changing its reference. When menagerie is first declared,
		the warthog property is set to the object referenced by the animal variable.

	However, animal's reference changes on line 10, and is set to a different object. It has the same
		key names but different values. Afterwards, the menagerie object is mutated as a property
		meerkat is added that references this new animal object.

		As such, checking if the object at the warthog property is equal to the animal object is false
		 as that referenec was changed.

		however, animal and the object at the meerkat property share a reference, thus this returns true.
*/