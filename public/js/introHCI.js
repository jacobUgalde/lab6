'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

//  commented out below
//	$('#colorBtn').click(randomizeColors);
}

$.get("http://URL", callBackFn)

$.post("http://URL", {"json":"json"}, callBackFn)

function callBackFn() {

}

$("testjs").click(function(e) {
	$.get("/project/random", addProject);
})

function addProject(result) {
	console.log(result);
  	var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>';

	$("#project-container").html(projectHTML);
	$("project-description").html(result['summary']);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

  	var projectHTML = '/project/' + idNumber;

	console.log("User clicked on project " + idNumber);
}
