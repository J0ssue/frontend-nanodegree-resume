let octopus = {
	init: function() {
		bio.init();
		work.display();
	}
};

// ** Header ** //
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

// ** Work ** //

let work = {
	init: function() {
		this.display();
	},
	jobs: {
		workStart: HTMLworkStart,
		employer: HTMLworkEmployer, 
		title: HTMLworkTitle, 
		location: HTMLworkLocation, 
		dates: HTMLworkStart + HTMLworkDates, 
		description: HTMLworkDescription,
	},
	display: function() {
		// ** Work Experience:
		const employer = this.jobs.employer.replace('%data%', 'Adecco');
		const title = this.jobs.title.replace('%data%', 'Operador Producção M1')
		const location = this.jobs.location.replace('%data%', 'Carregado, Portugal'); 
		const dates = this.jobs.dates.replace('%data%', '5/2018 - in progress'); 
		const description = this.jobs.description.replace('%data%', 'Executa tarefas de estampagem, montagem e desmontagem de ferraments, afinação de ferramentas, montagem de subconjuntos movimentação de contentores e embalagem.');

		$('#workExperience').append(this.jobs.workStart);
		$('.work-entry').append(employer + title);	
		$('.work-entry').append(location);	
		$('.work-entry').append(dates);	
		$('.work-entry').append(description);	
	}
};

octopus.init();

