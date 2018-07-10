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
	],
	projects: [
	{
		title: 'Arcade Game', 
		dates: '2018',
		description: 'This is a Udacity assignment built with vanilla Javascript, CSS, HTML and Bootstrap. To load the game type this link into your search bar https://j0ssue.github.io/Memory-Card-Game/',
		images: ['images/project1.png', 'images/project2.png'] 
	}
	],
	schools: [
	{
		name: 'Rancho Verde High School',
		location: 'California, United States',
		degree: 'High School Diploma',
		majors: ['General Education'],
		dates: '2004 - 2008',
		// url: ''
	}
	],
	onlineCourses: [
	{
		title: 'Front End Nanodegree',
		school: 'Udacity',
		dates: '2017 - in progress',
		url: 'https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001',
	}
	],
};

let octopus = {
	init: function() {
		bio.init();
		work.display();
		projects.display();
		education.display();
	},
	getWorkData: function() {
		return model.jobs;
	},
	getProjectData: function() {
		return model.projects;
	},
	getSchoolData: function() {
		return model.schools;
	},
	getOnlineCourseData: function() {
		return model.onlineCourses;
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

// ** Projects ** //
let projects = {
	// gets projects data from model
	projects: octopus.getProjectData(),	
	display: function() { 
		// appends div element which holds all project entries
		$('#projects').append(HTMLprojectStart);
		this.projects.forEach(function(project) {
			let title = HTMLprojectTitle.replace('%data%', project.title);
			let dates = HTMLprojectDates.replace('%data%', project.dates);
			let description = HTMLprojectDescription.replace('%data%', project.description);

			// appends each element to the project entry div
			$('.project-entry').append(title);
			$('.project-entry').append(dates);
			$('.project-entry').append(description);

			// appends two images per project
			for (let i = 0; i < 2; i++) {
				let image = HTMLprojectImage.replace('%data%', project.images[i]);
				$('.project-entry').append(image);
			}
		});
	}
}

// ** Education ** //
let education = {
	schools: octopus.getSchoolData(),
	onlineCourses: octopus.getOnlineCourseData(),
	display: function() {
			// ** displaying School:
			$('#education').append(HTMLschoolStart);
			this.schools.forEach(function(school) {
				const name = HTMLschoolName.replace('%data%', school.name);
				const degree = HTMLschoolDegree.replace('%data%', school.degree);
				const dates = HTMLschoolDates.replace('%data%', school.dates);
				const location = HTMLschoolLocation.replace('%data%', school.location);
				$('.education-entry').append(name + degree);
				$('.education-entry').append(dates);
				$('.education-entry').append(location);

				for (let i = 0; i < 1; i++) {
					let major = HTMLschoolMajor.replace('%data%', school.majors[i]);
					$('.education-entry').append(major);
				}
			});

			// ** display Online courses:
			$('.education-entry').append(HTMLonlineClasses);
			this.onlineCourses.forEach(function(course) {
				const title = HTMLonlineTitle.replace('%data%', course.title);
				const school = HTMLonlineSchool.replace('%data%', course.school);
				const date = HTMLonlineDates.replace('%data%', course.dates);
				const url = HTMLonlineURL.replace('%data%', course.url);
				$('.education-entry').append(title + school);
				$('.education-entry').append(date);
				$('.education-entry').append(url);
			});
		}
};

octopus.init();

