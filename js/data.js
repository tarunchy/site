$(document).ready(function() {
    loadEventsContent();
    loadHeaderContent();
    loadMenuContent();
});




function loadEventsContent() {
    $.get('data/events.csv', function(data) {
        var events = parseCSV(data);
        console.log(events); // Output the parsed data to the console

        // Pupulate event name
        document.getElementById('event1_name').innerHTML = events[0].event_name;
        document.getElementById('event2_name').innerHTML = events[1].event_name;
        document.getElementById('event3_name').innerHTML = events[2].event_name;
        document.getElementById('event4_name').innerHTML = events[3].event_name;
        document.getElementById('event5_name').innerHTML = events[4].event_name;
        document.getElementById('event6_name').innerHTML = events[5].event_name;


        // pupulate event name bengali
        document.getElementById('event1_name_bengali').innerHTML = events[0].event_name_bengali;
        document.getElementById('event2_name_bengali').innerHTML = events[1].event_name_bengali;
        document.getElementById('event3_name_bengali').innerHTML = events[2].event_name_bengali;
        document.getElementById('event4_name_bengali').innerHTML = events[3].event_name_bengali;
        document.getElementById('event5_name_bengali').innerHTML = events[4].event_name_bengali;
        document.getElementById('event6_name_bengali').innerHTML = events[5].event_name_bengali;

        
        // Populate event date
        document.getElementById('event1_date').innerHTML = events[0].event_date;
        document.getElementById('event2_date').innerHTML = events[1].event_date;
        document.getElementById('event3_date').innerHTML = events[2].event_date;
        document.getElementById('event4_date').innerHTML = events[3].event_date;
        document.getElementById('event5_date').innerHTML = events[4].event_date;
        document.getElementById('event6_date').innerHTML = events[5].event_date;

        // populate event address
        document.getElementById('event1_address').innerHTML = events[0].event_address;
        document.getElementById('event2_address').innerHTML = events[1].event_address;
        document.getElementById('event3_address').innerHTML = events[2].event_address;
        document.getElementById('event4_address').innerHTML = events[3].event_address;
        document.getElementById('event5_address').innerHTML = events[4].event_address;
        document.getElementById('event6_address').innerHTML = events[5].event_address;




        
       
    }).fail(function() {
        console.log('Error: could not load data from CSV file'); // Log an error message if the data could not be loaded
    });
}


function loadHeaderContent() {
        $.get('data/header.csv', function(data) {
            var headers = parseCSV(data);
            console.log(headers); // Output the parsed data to the console
    
            // Pupulate menus
            document.getElementById('header_title').innerHTML = headers[0].header_title;
            document.getElementById('header_message').innerHTML = headers[0].header_message;
   
           
        }).fail(function() {
            console.log('Error: could not load data from CSV file'); // Log an error message if the data could not be loaded
        });
}

function loadMenuContent() {
    $.get('data/menu.csv', function(data) {
        var menu = parseCSV(data);
        console.log(menu); // Output the parsed data to the console

        //menu_id,menu_name,menu_title, menu_welcome_message
        document.getElementById('menu_name1').innerHTML = menu[0].menu_name;
        document.getElementById('menu_name2').innerHTML = menu[1].menu_name;
        document.getElementById('menu_name3').innerHTML = menu[2].menu_name;
        document.getElementById('menu_name4').innerHTML = menu[3].menu_name;
        document.getElementById('menu_name5').innerHTML = menu[4].menu_name;

        //<h2 class="section-heading text-uppercase"><div id="menu1_header_name"></div></h2>
        //<h3 class="section-subheading text-muted"><div id="menu1_header_desc"></div></h3>

        document.getElementById('menu1_header_name').innerHTML = menu[0].menu_title;
        document.getElementById('menu1_header_desc').innerHTML = menu[0].menu_welcome_message;

        document.getElementById('menu2_header_name').innerHTML = menu[1].menu_title;
        document.getElementById('menu2_header_desc').innerHTML = menu[1].menu_welcome_message;

        document.getElementById('menu3_header_name').innerHTML = menu[2].menu_title;
        document.getElementById('menu3_header_desc').innerHTML = menu[2].menu_welcome_message;

        document.getElementById('menu4_header_name').innerHTML = menu[3].menu_title;
        document.getElementById('menu4_header_desc').innerHTML = menu[3].menu_welcome_message;

        document.getElementById('menu5_header_name').innerHTML = menu[4].menu_title;
        document.getElementById('menu5_header_desc').innerHTML = menu[4].menu_welcome_message;



       
    }).fail(function() {
        console.log('Error: could not load data from CSV file'); // Log an error message if the data could not be loaded
    });
}






function parseCSV(data) {
  
    var lines = data.split('\n');
    var headers = lines[0].split(',');
    var news = [];
    for (var i = 1; i < lines.length; i++) {
        var row = {};
        var cells = lines[i].split(',');
        for (var j = 0; j < cells.length; j++) {
            row[headers[j].trim()] = cells[j].trim();
        }
        news.push(row);
    }
    return news;
}