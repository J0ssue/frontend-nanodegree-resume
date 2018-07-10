const model = {
	jobs: [
	{
		employer: 'Adeco', 
		title: 'Operador Producção M1', 
		location: 'Carregado, Portugal', 
		dates: '5/2018 - in progress', 
		description: 'Executa tarefas de estampagem, montagem e desmontagem de ferraments, afinação de ferramentas, montagem de subconjuntos movimentação de contentores e embalagem.'
	},
	{
		employer: 'Benz Pools Biz', 
		title: 'Pool Technician', 
		location: 'California, United States', 
		dates: '2014 - 2016', 
		description: 'Repair and maintenance of domestic pools.'
	},
	{
		employer: 'Austin\'s Roustabout Service LLC', 
		title: 'Oil Field Laborer', 
		location: 'Utah, United States', 
		dates: '2013 - 2014', 
		description: 'Building platforms for oil pump jack and tanks.'
	},
	{
		employer: 'Thacker\'s Repair Inc', 
		title: 'Mechanic Apprentice', 
		location: 'Utah, United States', 
		dates: '2011 - 2013', 
		description: 'General maintenance of cars and repairs.'
	},
	{
		employer: 'N.C.O. Group', 
		title: 'Customer Service Representative', 
		location: 'Guatemala', 
		dates: '3/2011 - 8/2011', 
		description: 'Comunicate with client via inbound phone calls, conduct sales, and customer inquiries.'
	},
	{
		employer: 'Select Staffing', 
		title: 'Warehouse Worker', 
		location: 'California, United States', 
		dates: '2009 - 2010', 
		description: 'Forklift Driver.'
	},
	]
};

let octopus = {
	init: function() {
		bio.init();
		work.display();
	},
	getWorkData: function() {
		return model.jobs;
	},
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
	jobs: octopus.getWorkData(),
	display: function() {
		// ** Work Experience:
		$('#workExperience').append(HTMLworkStart);
		this.jobs.forEach(function(job) {
			let employer = HTMLworkEmployer.replace('%data%', job.employer);			
			let title = HTMLworkTitle.replace('%data%', job.title);
			let dates = HTMLworkDates.replace('%data%', job.dates);
			let location = HTMLworkLocation.replace('%data%', job.location);
			let description = HTMLworkDescription.replace('%data%', job.description);
			$('.work-entry').append(employer + title);
			$('.work-entry').append(dates);
			$('.work-entry').append(location);
			$('.work-entry').append(description);
		});
	}
};

octopus.init();

