// This is the plain JavaScript DOM selector
let element = document.getElementById('hello') // Without jQuery

//This is the jQuery DOM selector
let element2 = $('#hello') // hashtag = select ID; period(.) = select class

// setTimeout(function(){
//    element.setAttribute('class','center-text')
//}, 6000)


// This is the plain JavaScript way to move the text once clicked
function moveText(){
    element.setAttribute('class', 'center-text');
}

// function moveJqueryText(){
//    element2.addClass('center-text')
//}


// THis is the jQuery way to move the text once clicked
$('#seemoreButton').click(function(){
    element2.addClass('center-text');
})

// Using Jquery to access WEBAPI data we can use:
// .ajax, .get
function dataChange(){

    let year = $("#change-form input[name=Year]").val() // Telling jQuery we want the value of that input
    let lap = $("#change-form input[name=Lap]").val() // Telling jQueary we want the value of that input

    console.log(year)

    $.get('https://ergast.com/api/f1/' + year + '/' + lap + '/driverStandings.json', function (data){
        // #position0 information 
        let position = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        $("#position0").text(position) // Calling the variable from above; which represents the position key from the link he sent uss
        let name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
        $("#name0").text(name)
        let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
        $("#nationality0").text(nationality)
        let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name
        $("#sponsor0").text(sponsor)
        let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points
        $("#points0").text(points)


        // #position1 information
        let position_1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position
        $("#position1").text(position_1) 
        let name_1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName
        $("#name1").text(name_1)
        let nationality_1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality
        $("#nationality1").text(nationality_1)
        let sponsor_1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name
        $("#sponsor1").text(sponsor_1)
        let points_1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points
        $("#points1").text(points_1)


        // #position2 information
        let position_2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position
        $("#position2").text(position_2) 
        let name_2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName
        $("#name2").text(name_2)
        let nationality_2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality
        $("#nationality2").text(nationality_2)
        let sponsor_2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name
        $("#sponsor2").text(sponsor_2)
        let points_2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points
        $("#points2").text(points_2)

        // #position3 information
        let position_3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position
        $("#position3").text(position_3) 
        let name_3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName
        $("#name3").text(name_3)
        let nationality_3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality
        $("#nationality3").text(nationality_3)
        let sponsor_3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name
        $("#sponsor3").text(sponsor_3)
        let points_3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points
        $("#points3").text(points_3)



        // #position4 information
        let position_4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position
        $("#position4").text(position_4) 
        let name_4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName
        $("#name4").text(name_4)
        let nationality_4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality
        $("#nationality4").text(nationality_4)
        let sponsor_4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name
        $("#sponsor4").text(sponsor_4)
        let points_4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points
        $("#points4").text(points_4)



        // #position5 information
        let position_5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position
        $("#position5").text(position_5) 
        let name_5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName
        $("#name5").text(name_5)
        let nationality_5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality
        $("#nationality5").text(nationality_5)
        let sponsor_5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name
        $("#sponsor5").text(sponsor_5)
        let points_5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points
        $("#points5").text(points_5)


        // #position6 information
        let position_6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position
        $("#position6").text(position_6) 
        let name_6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName + ' ' + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName
        $("#name6").text(name_6)
        let nationality_6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality
        $("#nationality6").text(nationality_6)
        let sponsor_6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name
        $("#sponsor6").text(sponsor_6)
        let points_6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points
        $("#points6").text(points_6)
    })
}

