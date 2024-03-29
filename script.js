
// Function to add leading zeros to single-digit numbers
function addLeadingZero(number) {
    return (number < 10 ? '0' : '') + number;
}

// Get the current date and time
var currentDate = new Date();

// Extract the components: year, month, day, hours, minutes, seconds
var year = currentDate.getFullYear();
var month = addLeadingZero(currentDate.getMonth() + 1); // Month is 0-indexed
var day = addLeadingZero(currentDate.getDate());
var hours = addLeadingZero(currentDate.getHours());
var minutes = addLeadingZero(currentDate.getMinutes());
var seconds = addLeadingZero(currentDate.getSeconds());

// Construct the date and time string
var dateTimeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

// Update the HTML element with the current date and time
document.getElementById('currentDateTime').innerText = 'Current Date and Time: ' + dateTimeString;

// Update every second
setInterval(function () {
    // Get the updated current date and time
    var currentDate = new Date();
    var seconds = addLeadingZero(currentDate.getSeconds());
    var minutes = addLeadingZero(currentDate.getMinutes());

    // Update the HTML element with the current time
    document.getElementById('currentDateTime').innerText = ' ' + dateTimeString + ' ' + hours + ':' + minutes + ':' + seconds;
}, 1000); // Update every second

// Set interval for automatic slide change
$('.carousel').carousel({
    interval: 3000 // Change slide every 2 seconds (2000 milliseconds)
});


// gallery modal coding
// Open the Modal
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close the Modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Apply Zoom In effect
function zoomIn() {
    var modalImg = document.getElementById("img01");
    modalImg.classList.toggle("zoomed");
  }


//   gallery image slider


        // Activate the carousel
        document.addEventListener("DOMContentLoaded", function () {
            var myCarousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
                interval: 2000 // Change slide every 2 seconds
            });
        });
   




