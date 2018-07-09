let octopus = {
	init: function() {
		bio.init();
	}
};

const bio = {
	init: function() {
		this.display();
	},
	name : HTMLheaderName,
	role : HTMLheaderRole,
	contacts : {
		mobile: HTMLmobile,
		email: HTMLemail,
		github: HTMLgithub,
		linkedIn: HTMLlinkedIn, 
		location: HTMLlocation,
	},
	welcomeMessage: HTMLwelcomeMsg, 
	skillTitle: HTMLskillsStart,
	skillLi: HTMLskills,
	skills: ['JavaScript', 'HTML', 'CSS', 'JQuery', 'jasmine', 'Gulp', 'Bootstrap', 'Linux', 'MVC'],
	biopic: HTMLbioPic,
	display: function() {
		// ** Header ** //
		$('#header').prepend(this.role);
		$('#header').prepend(this.name);

		// Contacts/header
		Object.values(this.contacts).forEach(function(contact) {
			$('#topContacts').append(contact);
		});

		// Pic/header 
		$('#header').append(this.biopic);

		// welcome/header
		$('#header').append(this.welcomeMessage);

		// Skills/header
		$('#header').append(this.skillTitle);
		for (let i = 0; i < this.skills.length; i++) {
		let replaceSkill = this.skillLi.replace('%data%', this.skills[i]);;
			$('#skills').append(replaceSkill);
		}
	},
}; 

octopus.init();

