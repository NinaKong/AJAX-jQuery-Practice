$("document").ready(function() {
	readData();
});
function readData() {
	$.ajax({
		url: "data/data.txt",
		type: "GET",
		dataType: "text"
	})
	.done(successData)
	.fail(errorData)
	.always(function (data) {
        console.log("Done!");
    });
}
function successData(data) {
	console.log("Success!");
	$("#readData").append(data);
}
function errorData(data) {
	console.log("Error!");
}

