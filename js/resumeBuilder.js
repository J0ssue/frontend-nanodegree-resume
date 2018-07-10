const model = {
	// bio data
	bio: {
		name : 'Josue Diaz',
		role : 'Web Developer',
		contact: {
			mobile: '+351-924-252-686',
			email: 'jdiaz66@icloud.com',
			github: 'https://github.com/J0ssue',
			linkedIn: 'Josue', 
			location: 'Portugal',			
		},
		welcomeMessage: 'Hello, my name is Josue, I\'m a Software Developer. Welcome to my resume', 
		skills: ['JavaScript', 'HTML', 'CSS', 'JQuery', 'jasmine', 'Gulp', 'Bootstrap', 'Linux', 'MVC'],
		biopic:'images/josue.png',
	},
	// work data
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
	// projects data
	projects: [
	{
		title: 'Arcade Game', 
		dates: '2018',
		description: 'This is a Udacity assignment built with vanilla Javascript, CSS, HTML and Bootstrap. To load the game type this link into your search bar https://j0ssue.github.io/Memory-Card-Game/',
		images: ['images/project1.png', 'images/project2.png'] 
	}
	],
	// education data
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
		bio.display();
		work.display();
		projects.display();
		education.display();
		gMap.display();
	},
	getBio: function() {
		return model.bio;
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
	bio: octopus.getBio(),
	display: function() {
		// ** Header ** //
		// name & role
		let name = HTMLheaderName.replace('%data%', this.bio.name); 
		let role = HTMLheaderRole.replace('%data%', this.bio.role); 
		$('#header').prepend(role);
		$('#header').prepend(name);

		// contacts header
		let number = HTMLmobile.replace('%data%', this.bio.contact.mobile);
		let email = HTMLemail.replace('%data%', this.bio.contact.email);
		let github = HTMLgithub.replace('%data%', this.bio.contact.github);
		let linkedIn = HTMLlinkedIn.replace('%data%', this.bio.contact.linkedIn);
		let location = HTMLlocation.replace('%data%', this.bio.contact.location);
		$('#topContacts').append(number);
		$('#topContacts').append(email);
		$('#topContacts').append(github);
		$('#topContacts').append(linkedIn);
		$('#topContacts').append(location);
		// contacts footer
		$('#footerContacts').append(number);
		$('#footerContacts').append(email);
		$('#footerContacts').append(github);
		$('#footerContacts').append(linkedIn);
		$('#footerContacts').append(location);


		// picture
		let pic = HTMLbioPic.replace('%data%', this.bio.biopic);
		$('#header').append(pic);

		// welcome
		let welcome = HTMLwelcomeMsg.replace('%data%', this.bio.welcomeMessage);
		$('#header').append(welcome);

		// skills
		$('#header').append(HTMLskillsStart);
		this.bio.skills.forEach(function(skill) {
			let newSkill= HTMLskills.replace('%data%', skill);;
			$('#skills').append(newSkill);
		});
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

let gMap = {
	display: function() {
		$('#mapDiv').append(googleMap);
	}
};

octopus.init();

