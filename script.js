// This code waits for the page to fully load before running.

document.addEventListener('DOMContentLoaded', (event) => {

    

    // Find the H1 element in the header

    const welcomeHeader = document.getElementById('welcome');

    

    // Check if the element exists and if it needs the text added

    if (welcomeHeader && !welcomeHeader.textContent.includes(' Editors')) {

        

        // Change the text!

        welcomeHeader.textContent = welcomeHeader.textContent + ' Editors';

    }

});