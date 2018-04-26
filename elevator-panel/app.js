var str = $( "button" ).text();

$( "button" ).click(function() {
    var current_floor = $("#floor-number").text();
    var target_floor = $(this).text();
    console.log('current floor', current_floor);
    console.log('target floor', target_floor);
    
    // if (target_floor > current_floor) {
    //     while (target_floor > current_floor) {
    //         current_floor ++;
    //         $("#floor-number").fadeToggle(
    //             current_floor);
    //         // $("#floor-number").fadeToggle(
    //         //     current_floor);
                
    //         }
    // }

    $("#floor-number").text(target_floor);
  });