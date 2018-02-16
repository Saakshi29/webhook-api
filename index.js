"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/", function(req, res) {
  
 var cse='The Computer Science and Engineering Department is the most versatile department '+
' of college and caters to the needs of other departments as well.'+ 
 'The department aims at developing the fundamental conceptual knowledge along with the total'+
  'personality, which helps computer engineers to face the challenges of rapidly changing software industry.'+ 
 'Technical skills, teamwork and specialized knowledge prepare these young engineers to adopt and continuously'+
' learn new technologies. Regular updation and expansion of the labs is done as per the requirement of the industry. '+
    ' Exposure to latest developments and technologies is a mandatory exercise for both faculty and students.'
 'Continuous research work and live projects are taken up by the department. Numerous professional '+
  'activities are conducted to improve interaction between students, faculty, other academic institutions and industries.';
 var ece='The department aims to impart quality technical education to the students aspiring for a career in the field of'+
    ' electronics and communications engineering. The department also caters to the needs of other engineering disciplines'+
     'where electronics is taught either as an essential or an elective subject. The department offers subjects like basic'+
     'electronics, EMT theory, communications, VLSI, microwave engg, digital signal processing, optical communications, advanced'+
  'microprocessor and other related subjects' ;
  var it='Department of IT aims to prepare students to undertake careers involving innovation and problem solving using IT,'+
  'or to undertake advanced studies for research careers in IT. It aims to emerge as a centre of excellence in leveraging '+
  'information technology to stimulate the exchange and creation of knowledge for intellectual, social, political, moral'+
 ' and material development of the society.   The teaching pedagogy in the department aims to bridge the gap between principles'+
'  and applications with the goal to apply knowledge of computing sciences for solving real world problems.';
  var me='Besides giving a through grounding in basic sciences and engineering subjects  the curriculum  in mechanical and '+
  'automation engineering emphasises on deep understanding of applied mechanics, microprocessors, machine design, heat transfer,'+
   ' refrigeration and air conditioning, machine tools, metrology, robotics and CAD(CAM) etc.  The department has well-equipped '+
  'laboratories in related fields and'+
  'students are exposed to various modern equipment in the area of mechanical and automation .';
var aap='The Department of Architecture and Planning started in 2015 as a step towards social equity and gender parity'+
'in technical professions, having a vision that architectural education should empower students to become protagonist of positive '+
'change by exploring, learning and practicing a sustainable form of architecture. The architectural education must, besides imparting'+ 
'knowledge, also endeavor to create opportunities for students to engage with real life issues, so that they can reflect on their'+
'role in creating a better world. Further, it is also important that students are empowered to make informed choices, which are more'+
'life-sustaining. The department aims at development of the individual girl as a responsible member of peaceful, '+
'pluralist and inclusive society by learning to explore and practicing quality, sustainable form of architecture. ';
var general='Teaching in the university is achieved through various specialized departments. Each department through HOD '+
'ensures that the mechanisms are in place to promote regular contact between academics, support staff graduate/post-graduate'+
 ' students and Research Scholars. Department facilitates the availability of resources and facilities to the students for the '+
  'smooth conduction of the academics.Department builds the guidelines & policies for the effective and timely management of the'+
  'academics in the institution.  The various departments are CSE, IT, ECE, MAE, AAP.';
 var doa='A strong high-rise building can be built only on a strong foundation, which signifies the importance of the Department '+
 'of Applied Sciences. The important objective of the Department is to prepare and train the first year B. Tech students in Physics,'+
   'Chemistry, Mathematics and Communication skills with an applied approach. The Applied Sciences Department constitutes of eight '+
  ' highly qualified faculties of respective subjects. The department has two well equipped laboratories of'+
 '  Applied Chemistry Environmental Studies and '+
' Applied Physics with trained staff.'; 
  if(req.body.result.metadata.intentName=="dep"){
  if(req.body.result.parameters.stream=="CSE")
  {
  
  return res.json({
  speech: cse,
  displayText: cse,
  source: "Webhook",
  });}
  else if(req.body.result.parameters.stream=="ECE")
  {
  
  
  return res.json({
  speech: ece,
  displayText: ece,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.stream=="IT")
  {
  
  
  return res.json({
  speech: it,
  displayText: it,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="electrical")
  {
  
  
  return res.json({
  speech: ece,
  displayText: ece,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="mech")
  {
  
  
  return res.json({
  speech: me,
  displayText: me,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="ASH")
  {
  
  
  return res.json({
  speech: doa,
  displayText: doa,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="AAP")
  {
  
  
  return res.json({
  speech: aap,
  displayText: aap,
  source: "Webhook",
  });
  }
  else
  {
  
  
  
  
    
  return res.json({
  speech: general,
  displayText: general,
  source: "Webhook",
  });
  
  }
  }
  else if(req.body.result.metadata.intentName=="facilities"){
          var des='The main objective of the opening of the university dispensary was to provide primary health care mainly in the form of first aid to the university students. The dispensary is equipped with over the counter medications, bed to rest in, medical equipments, physical screening tools and first aid supplies. A team of one registered medical practitioner along with one registered nurse is available from 09:00 am to 05:00 pm.';
          var lib='Learning Resource Centre (LRC) serves as the premier source of academic information for the IGDTU community through its collections, educational and consulting services. The LRC has a highly selective collection of print, electronic, and audiovisual materials in the areas of science, engineering, technology and management to support the learning and research activities of students and faculty. A number of e- journals are being subscribed through consortia mode subscription. All these journals are available online to the member of the LRC in campus LAN. The Digital Library section has e-materials like CDs, DVDs and digital thesis of final year students and are available through an Open Source Institution Repository Software within the campus premises.';
          var cc='The university has on campus computing facility (computer lab) housed in centralized air conditioned premises, named as "Computer Center".Computer Center runs a web-server based application that automates the programming problem submission process';
          var bank=' The Punjab and Sind bank is available in the university premises.';
          var guest='The guest house within the campus has limited accomdation for the staying purpose of individuals visiting the campus. The rooms are comfortable with all modern facilities available within.';
          var common='The university has a common room for girls, equipped with fitness equipments, yoga facility and indoor games.';
          var hostel='The University has two women hostels - Krishna Hostel and Kaveri Hostel, to accommodate approximately 300 students.These two hostels are located in the University campus. These hostels provide a safe, secure and clean environment for the students to grow, learn and mature in the society away from their own homes. The hostel authorities always facilitate to create an environment for the students to study, do well in their academics and focus on their career and future. All rooms are on twin/triple sharing basis and are equipped with individual beds, chairs, built-in cupboards and study tables.';
          
    
  if(req.body.result.parameters.facili=="dispansary")
  {
  
  
  return res.json({
  speech: des,
  displayText: des,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.facili=="library")
  {
  
  
  return res.json({
  speech: lib,
  displayText: lib,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.facili=="cc")
  {
  
  
  return res.json({
  speech: cc,
  displayText: cc,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.facili=="bank")
  {
  
  
  return res.json({
  speech: bank,
  displayText: bank,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.facili=="guest house")
  {
  
  
  return res.json({
  speech: guest,
  displayText: guest,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.facili=="common room")
  {
  
  
  return res.json({
  speech: common,
  displayText: common,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.facili=="hostel")
  {
  
  
  return res.json({
  speech: hostel,
  displayText: hostel,
  source: "Webhook",
  });
  } 
    
    
          }
	else if(req.body.result.metadata.intentName=="eligibility")
	{
		var btech='A candidate securing 60% or more marks in the aggregate of Physics, Chemistry and Mathematics, and have passed English as a subject of study at the Senior School Certificate Examination Level (Core or Elective) shall be eligible for admission to the first semester of B. Tech/B.E Course provided he/she has passed in each subject separately ';
		var mtech='Candidates should be minimum 60% or equivalent in the qualifying exam as under: (i) B. Tech. /B.E. Degree in respective branch or equivalent from a recognized University (ii) AMIE/ AMIETE in relevant discipline(iii) MCA / M Sc. (Computer Science/IT) or M.Sc. (Math/ Statistics) with Computer/ IT as a major subject ';
		var barch='A candidate shall be eligible for admission to the First Year of the B. Arch. Course if she has secured 50% or more marks in aggregate, and has passed Mathematics as a subject in the Senior School Certificate Level Exam and also qualifies the JEE (Main) 2017 (Paper-2) exam ';
		var phd='Candidates should have master degree in the relevant discipline from a recognized University/Institution with 60% marks or equivalent CGPA and undergraduate degree in the relevant discipline with 60% marks in aggregate or equivalent CGPA ';
		var mca='Indian National securing at least 60% marks in aggregate or 6.5 CGPA on a 10 point scale in (i) B.Sc./B.Sc. (Hons) /BCA/ BIT of minimum three years full time (or); (ii) B.E/B.Tech or equivalent from a recognized university ';
		
		
 if(req.body.result.parameters.course=="btech")
  {
  
  
  return res.json({
  speech: btech,
  displayText: btech,
  source: "Webhook",
  });	
  }	
		
		
	
	else if(req.body.result.parameters.course=="barch")
  {
  
  
  return res.json({
  speech: barch,
  displayText: barch,
  source: "Webhook",
  });
  }	  
  else if(req.body.result.parameters.course=="mca")
  {
  
  
  return res.json({
  speech: mca,
  displayText: mca,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.course=="mtech")
  {
  
  
  return res.json({
  speech: mtech,
  displayText: mtech,
  source: "Webhook",
  });}
  else if(req.body.result.parameters.course=="phd")
  {
  
  
  return res.json({
  speech: phd,
  displayText: phd,
  source: "Webhook",
  });
  }
  
  
  
  
}
	else if(req.body.result.metadata.intentName=="procedure")
	{
		var btech='The admission to B. Tech and B. Arch shall be done through Joint Admission Counselling (JAC) portal joint hosted with DTU, NSIT, and IIITD ';
		var mtech='The admission to M. Tech (full time) program will be based on the merit of the valid GATE score secured by candidates and thereafter on the basis of the marks secured in the qualifying examination.Online activation of admission portal for all M. Tech, MCA & PhD programmes: 15th April.ast Date of submission of application form for M. Tech (full time & part time): 15th June  ';
		
		var mca='The admission to MCA program of IGDTUW is on the basis of rank secured in the entrance exam conducted by IGDTUW. 85% of the total seats are reserved for candidate belonging to Delhi Region (Students passing the qualifying exam from recognized University /College / Institution located within the NCT of Delhi) and 15% of the total seats for candidates belonging to outside Delhi Region.Online activation of admission portal for all M. Tech, MCA & PhD programmes: 15th April 2017 Last Date of submission of application form for MCA & PhD: 10th June 2017 ';
		var phd='PhD Program shall be on the basis of GATE score/ NET Score and interview IDGTUW may conduct Research Aptitude Test (RAT)** as decided by the Admission Committee.Online activation of admission portal for all M. Tech, MCA & PhD programmes: 15th April 2017 Last Date of submission of application form for MCA & PhD: 10th June 2017 ';
		
 if(req.body.result.parameters.course=="btech")
  {
  
  
  return res.json({
  speech: btech,
  displayText: btech,
  source: "Webhook",
  });	
  }	
		
		
	
	else if(req.body.result.parameters.course=="barch")
  {
  
  
  return res.json({
  speech: btech,
  displayText: btech,
  source: "Webhook",
  });
  }	  
  else if(req.body.result.parameters.course=="mca")
  {
  
  
  return res.json({
  speech: mca,
  displayText: mca,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.course=="mtech")
  {
  
  
  return res.json({
  speech: mtech,
  displayText: mtech,
  source: "Webhook",
  });}
  else if(req.body.result.parameters.course=="phd")
  {
  
  
  return res.json({
  speech: phd,
  displayText: phd,
  source: "Webhook",
  });
  }
  
  
  
  
}


















  
});





restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
