/*
This is empty on purpose! Your code to build the resume will go here.
 */



// bio JSON:

var bio = {
	"name" : "Benjamin Rotolo",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "<a href = 'mailto:benrotolo@gmail.com'>benrotolo@gmail.com</a>",
		"mobile" : "<a href = 'tel:5555555555'>555-555-5555</a>",
		"github" : "systemwide",
		"location": "Athens, GA"
	},
	"welcomeMessage" : "Life long learner with wide array of skills and a passion for technology.",
	"skills" : [
	"html5", 
	"CSS", 
	"Javascript", 
	"Personnel Management",  
	"Customer Service"
	]

}

// work JSON:
var work = {

	"jobs" : [
	{
		"employer" : "Atwood's Tavern",
		"title" : "Owner/Proprietor",
		"location" : "Cambridge MA",
		"dates" : "2006-2011",
		"description" : "Owned managed and operated a craft brew/gastro pub from 2006-2011"
	},
	{
		"employer" : "Quickschools.com",
		"title" : "Technical Support Engineer and Customer Service Engineer",
		"location" : "Remote/Telecommute",
		"dates" : "2012-Present",
		"description" : "Provide direct customer support or fulfill customer support requests for online School Management System web app."
	},
	],
	"display" : function(){
		for(j in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(formattedDescription);

		}// end of loop
	}
};

// education JSON:

 var education ={
 	"schools" : [
 	{
 		"name" : "University of Massachusetts at Amherst",
 		"location" : "Amherst MA",
 		"major" : "Computer Science",
 		"dates" : "2013 - 2015",
 		"url" : "<a href = 'http://www.umass.edu'> http://www.umass.edu/ </a>"
 	},
 	{
 		"name" : "Harvard Extension School",
 		"location" : "Cambridge MA",
 		"major" : "Undeclared",
 		"dates" : "2011 - 2012",
 		"url" : "http://www.extension.harvard.edu/"
 	},
 	{
 		"name" : "Unversity of Massachusetts at Lowell (Online)",
 		"location" : "Lowell MA",
 		"major" : "Undeclared",
 		"dates" : "2011 - 2012",
 		"url" : "https://continuinged.uml.edu/online/"
 	}

 	],
 	"onlineCourses" : [
 	{
 		"title" : "Front End Web Developer",
 		"school" : "Udalocation",
 		"dates" : "2015",
 		"url" : "http://udalocation.com/" 	
 	}
 	],
 	"display" : function(){
 		for(s in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[s].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
		var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
		var formattedMajor = HTMLschoolDegree.replace("%data%", education.schools[s].major);
		var formattedSchoolURL = " -- " + education.schools[s].url;

		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoollocation);
		$(".education-entry:last").append(formattedMajor);

		}
	}

 };

var projects = {
  "projects": [
    {
    "title" : "Interactive Resume",
    "dates": "2015-2016",
    "description" : "Interactive resume for Udacity Front End Web Developer course",
    "image" : "http://lorempixel.com/image_output/abstract-q-c-1050-350-4.jpg"
    }
    ],
  "display" : function() {
    for (p in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
      var formattedProjectDescrip = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].image);

      $(".project-entry:last").append(formattedProjectTitle);
	  $(".project-entry:last").append(formattedProjectDates);
	  $(".project-entry:last").append(formattedProjectDescrip);
	  $(".project-entry:last").append(formattedProjectImage);
      }
    }
  
};

// Begin implementation section 
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 var bioPic = HTMLbioPic.replace("%data%", "https://goo.gl/UvRE6i");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMsg);
$("#header").append(bioPic);


// bio skills
if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);

	for(s in bio.skills){

	var mySkills = HTMLskills.replace("%data%", bio.skills[s]);

	$("#header").append(mySkills);
	}// end skills for in loop
}
// implementation section
work.display();
education.display();
projects.display();
$('#mapDiv').append(googleMap);