// Hey Andy; awesome job on this assignment! Everything works really smoothly and you did it in very little code, which is the the goal of every good programmer.

// HW below this
// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city
// Use $.on(submit) or $.click to figure out when the user clicks the 'submit' button
// Create if / else if / else conditionals to control the flow of your application
// Write at least six different lines of pseudocode and display them inline as JavaScript comments
// Prevent a form submission using the event.preventDefault() function
// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
// Get the first element from an attribute name using $.attr()
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code

// If a user submits:
//
// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg


$(document).ready(function(){

    $('form').submit(function() {
        var city = $('input:text').val().trim().toLowerCase();

        $('body').removeClass();

        // Good job using .removeClass() to smoothly remove every class from the body element! This only works assuming you have no other classes applied to the body element, though, so keep that in mind. In that case you would just have to create another function that removes the specific classes that might have been applied and call that function inside each conditional statement.

        if (city === 'new york' || city === 'new york city' || city === 'nyc') {
            $('body').addClass('nyc');
        }
        else if (city === 'san francisco' || city === 'bay area' || city === 'sf') {
            $('body').addClass('sf');
        }
        else if (city === 'los angeles' || city === 'la' || city === 'lax') {
            $('body').addClass('la');
        }
        else if (city === 'austin' || city === 'atx') {
            $('body').addClass('austin');
        }
        else if (city === 'sydney' || city === 'syd') {
            $('body').addClass('sydney');
        }

        $('form')[0].reset();

        // Whoa, this is an interesting piece of code! I've never seen this before, but it works great. Awesome job. Another way to do it would be to just set $("input[type='text']").val("");, which sets the value back to nothing.

        event.preventDefault();

        });
    });
