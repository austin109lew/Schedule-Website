$(function () {
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDate").text(currentDate);

  // Retrieve the saved form data from local storage
  var savedData = localStorage.getItem('savedFormData');

  // Check if there is saved form data
  if (savedData) {
    // Parse the saved form data from JSON to an object
    var formData = JSON.parse(savedData);

    // Loop through each time block
    $('.time-block').each(function () {
      var timeBlockId = $(this).attr('id');
      var textarea = $(this).find('.description');

      // Check if the time block id exists in the saved form data
      if (formData.hasOwnProperty(timeBlockId)) {
        // Set the textarea value to the saved form data for this time block
        textarea.val(formData[timeBlockId]);
      }
    });
  }

  // Add event listener to the save buttons
  $('.saveBtn').on('click', function () {
    var timeBlockId = $(this).closest('.time-block').attr('id');
    var textarea = $(this).siblings('.description');
    var value = textarea.val();

    // Save the form data to an object
    var formData = JSON.parse(localStorage.getItem('savedFormData')) || {};
    formData[timeBlockId] = value;

    // Save the updated form data to local storage
    localStorage.setItem('savedFormData', JSON.stringify(formData));
  });
});