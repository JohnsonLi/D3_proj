// center of each state on the map. Used for plotting points.
var state_centers = {'10':[840.2066179677938,255.63732126174412],'12':[755.7455589627274,507.77862074199203],'13':[724.6900955022221,421.08405926136544],'15':[294.8045564922889,563.9882785155545],'16':[195.69641319595496,144.04932750429586],'17':[605.5763832710608,265.66623033740524],'18':[655.1309047705755,264.6912334156099],'19':[531.5840559002303,223.46911250901823],'20':[449.1730262150776,304.19757566749564],'21':[677.655116118911,315.7724926729923],'22':[567.4194512748293,470.7758518227551],'23':[904.8901409133521,91.86682235977892],'24':[818.8052621621626,259.14984417158763],'25':[883.6611759972714,169.60417446521842],'26':[659.2381728731771,164.2050159543356],'27':[516.5946653249242,129.6414015896711],'28':[608.5724003479579,430.5058530941247],'29':[551.7866256428767,306.6374343984268],'30':[282.51861048889253,97.84955423272905],'31':[427.3878540702531,234.86498780130137],'32':[139.96003190313502,247.69480087851903],'33':[878.895001668018,137.77025897772197],'34':[848.2752124691982,226.3400237317859],'35':[305.79809621840445,386.95742730333643],'36':[821.0483874311232,168.85705199139625],'37':[788.6451313495172,344.85361485855384],'38':[422.4987986530495,102.22408188477799],'39':[712.6873765706466,248.7517063896311],'40':[463.4685502305517,369.98958043796404],'41':[101.04986267322434,131.70723811769813],'42':[793.3713505198033,221.84576222657273],'44':[890.783475076746,181.18284880525738],'45':[767.2927002325082,386.0424383160666],'46':[423.130656806072,169.3620783670036],'47':[663.1906107071137,355.3419995607502],'48':[427.38996674052504,461.72137863589705],'49':[223.2502814234199,264.31946020337864],'50':[859.8485575029607,133.62590954714943],'51':[790.1958748968983,299.4572677108202],'53':[122.30239154218933,57.68528887763333],'54':[754.8872268789042,279.9511484889455],'55':[585.573902034637,163.7758248372078],'56':[303.1196645277344,191.96194785876492],'06':[80.82258312576948,283.40167845343757],'04':[204.82509225786282,376.1956676070532],'08':[326.45245404671317,285.1175806413173],'05':[554.9820493311587,384.6340056909818],'01':[661.2989606456629,425.24010249738404],'09':[872.259991483655,187.21492246865907],'02':[100.87677335205404,514.8161067939221]};
var states = {"53":"Washington",
               "41":"Oregon",
               "06":"California",
               "32":"Nevada",
               "16":"Idaho",
               "49":"Utah",
               "04":"Arizona",
               "35":"New Mexico",
               "08":"Colorado",
               "56":"Wyoming",
               "30":"Montana",
               "38":"North Dakota",
               "46":"South Dakota",
               "31":"Nebraska",
               "20":"Kansas",
               "40":"Oklahoma",
               "48":"Texas",
               "27":"Minnesota",
               "19":"Iowa",
               "29":"Missouri",
               "05":"Arkansas",
               "22":"Louisiana",
               "28":"Mississippi",
               "01":"Alabama",
               "13":"Georgia",
               "12":"Florida",
               "45":"South Carolina",
               "37":"North Carolina",
               "47":"Tennessee",
               "21":"Kentucky",
               "51":"Virginia",
               "54":"West Virginia",
               "24":"Maryland",
               "10":"Delaware",
               "39":"Ohio",
               "18":"Indiana",
               "17":"Illinois",
               "42":"Pennsylvania",
               "34":"New Jersey",
               "55":"Wisconsin",
               "26":"Michigan",
               "36":"New York",
               "09":"Connecticut",
               "44":"Rhode Island",
               "25":"Massachusetts",
               "50":"Vermont",
               "33":"New Hampshire",
               "23":"Maine",
               "02":"Alaska",
               "15":"Hawaii"};

var car_accidents = {'45': 1439, '28': 929, '50': 79, '53': 795, '32': 476, '04': 1340, '24': 843, '25': 522, '26': 1570, '27': 577, '06': 5605, '21': 1204, '48': 5502, '23': 207, '46': 140, '47': 1488, '08': 901, '09': 461, '42': 1768, '29': 1322, '40': 968, '41': 678, '05': 778, '02': 110, '56': 158, '10': 183, '33': 175, '13': 2201, '01': 1455, '30': 215, '20': 564, '38': 139, '51': 1058, '39': 1683, '12': 4677, '15': 156, '22': 1103, '17': 1617, '16': 326, '55': 813, '18': 1236, '31': 308, '49': 411, '37': 2052, '36': 1495, '35': 518, '34': 875, '19': 561, '54': 368, '44': 69, 'total': 54118} // * 100

var lung_cancer_state = {'56': 50, '54': 110, '37': 80, '22': 76, '45': 82, '36': 70, '53': 62, '42': 84, '02': 47, '25': 75, '23': 101, '27': 63, '20': 69, '21': 110, '04': 59, '49': 22, '46': 69, '47': 90, '08': 44, '09': 74, '28': 86, '29': 89, '40': 81, '41': 68, '05': 95, '24': 63, '44': 86, '01': 82, '26': 80, '12': 84, '06': 44, '13': 65, '10': 89, '39': 85, '38': 67, '15': 57, '48': 50, '17': 73, '16': 56, '19': 78, '32': 61, '31': 67, '30': 72, '51': 65, '50': 83, '35': 47, '34': 67, '55': 72, '18': 83, '33': 82} //NUMBER OF CASES PER 1,000,000 people

var air_pollution = {'56': 29.0, '54': 5.7, '28': 39.0, '22': 13.9, '50': 4.2, '19': 17.0, '35': 29.0, '23': 60.0, '24': 26.0, '25': 43.0, '26': 51.5, '27': 59.0, '06': 233.0, '21': 28.0, '04': 79.0, '49': 91.0, '46': 130.0, '47': 9.6, '08': 24.0, '45': 31.0, '42': 29.7, '29': 66.0, '40': 43.0, '41': 14.0, '09': 12.0, '05': 6.0, '51': 9.6, '02': 76.0, '01': 25.0, '13': 12.0, '12': 38.0, '20': 40.0, '10': 4.4, '39': 19.2, '38': 32.0, '15': 29.0, '48': 29.4, '17': 17.5, '16': 20.0, '55': 28.0, '32': 74.0, '31': 7.0, '30': 38.0, '37': 22.0, '36': 87.0, '53': 151.0, '34': 25.0, '33': 5.0, '18': 22.0, '44': 3.0} //Measured in  µg/m³

var circles_cars = [];
var circles_lungs = [];
var width = 1300, height = 650, centered;

var path = d3.geoPath();

// add map svg to html
var svg = d3.select("#map").append("svg")
            .attr("width", width)
            .attr("height", height);

svg.append("rect")
   .attr("class", "background")
   .attr("width", width)
   .attr("height", height)
   .on("click", clicked);

var g = svg.append("g");
var detail, label;
var cd_clicked = false;
var lcr_clicked = false;
var zoomed = false;
var cars_drawn = false;
var lungs_drawn = false;

d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;

  // add states onto the svg
  g.append("g")
   .attr("id", "states")
   .selectAll("path")
   .data(topojson.feature(us, us.objects.states).features)
   .enter().append("path")
   .style('fill', (d, i) => {
                    var pollute = Math.round(Math.floor(256 * air_pollution[d.id] / (234.0)))
                    return rgb(255 - pollute);
                })
   .attr("d", path)
   .on("click", clicked)
   .on("mouseover", hovered)
   .on("mouseoff", unhovered);

  // add state borders onto svg
  g.append("path")
   .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
   .attr("id", "state-borders")
   .attr("d", path);


});

// hex to rgb
function rgb(c) {
    if(c == 255){
      c = 250
    }

    var hex = c.toString(16);
    var component = "";
    if(hex.length == 1){
      component = "0" + hex;
    }
    else{
      component = hex;
    }
    return "#" + component + component + component;
}

// remove all circles plotted for car density and lung cancer rate
function remove_circles(circles){
  for(var i = 0; i < circles.length; i ++){
    circles[i].remove();
  }
}

// function for event listener for when a state is clicked
// when a state is clicked, remove dots, if any, zoom in on the state and show the relevant info
function clicked(d) {
  unhovered();
  if (detail){
    detail.remove();
    detail = null;
  }
  var x, y, k;
  var z = zoomed;

  if (d && centered !== d) {

    // center of the state that was clicked
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;

    // remove dots
    remove_circles(circles_cars);
    remove_circles(circles_lungs);
    cars_drawn = false;
    lungs_drawn = false;
    detail = svg.append("text");

    if (zoomed)
      detail.attr("x", width / 2 - 100)
          .attr("y", height / 2);
    else
      detail.attr("x", x - states[d.id].length * 3)
          .attr("y", y - 15);

    zoomed = true;

    // add information to text
    detail.append("tspan")
        .html("State: " + states[d.id]);

    detail.append("tspan")
        .attr("dy", "20px")
        .attr("dx", (-7 - states[d.id].length) * 10 + "px")
        .html("Car Accidents: " + String(car_accidents[d.id]*100) + " deaths");

    detail.append("tspan")
        .attr("dy", "20px")
        .attr("dx", (-21 - String(car_accidents[d.id]*100).length) * 10 + "px")
        .html("Lung Cancer Cases: " + String(lung_cancer_state[d.id]*100000) + " people");

    detail.append("tspan")
        .attr("dy", "20px")
        .attr("dx", (-26 - String(lung_cancer_state[d.id]*100000).length) * 10 + "px")
        .html("Air Pollution: " + String(air_pollution[d.id]) + " µg/m³");

    if (states[d.id] == "California")
      detail.style("fill", "#FFFFFF");
    
  } else {
    if (detail){
      detail.remove();
      detail = null;
    }
    zoomed = false;
    document.getElementById("data").hidden = true;
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;

    // check for buttons for dots
    if(cd_clicked && !cars_drawn){
      car_density();
    }
    if(lcr_clicked && !lungs_drawn){
      lung_density();
    }
  }

  // code for zooming in
  g.selectAll("path")
   .classed("active", centered && function(d) { return d === centered; });

  g.transition()
   .duration(750)
   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
   .style("stroke-width", 1.5 / k + "px");

  if (detail && !z)
  detail.transition()
   .duration(750)
   .attr("transform", "translate(" + (width / 2 - 100) + "," + height / 2 + ")translate(" + -x + "," + -y + ")");
   // .style("stroke-width", 1.5 / k + "px");
}

sum = {};

// when a state is being hovered, show that states name
var hovered = function(d){
  if (!zoomed || d != centered){
    unhovered();
    var x, y;
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    label = svg.append("text")
              .html(states[d.id])
              .attr("x", x - states[d.id].length * 5)
              .attr("y", y);
    sum[d.id] = [centroid[0], centroid[1]];
    if(states[d.id] == "California"){
      label.style("fill", "#FFFFFF");
    }

    if (zoomed){
      var c = path.centroid(centered);
      var x0 = c[0];
      var y0 = c[1];
      label.transition()
           .duration(0)
           .attr("transform", "translate(" + (x - x0) * 4 + "," + (y - y0) * 4 + ")translate(" + width / 2 + "," + height / 2 + ")translate(" + -x + "," + -y + ")");
       // .style("stroke-width", 1.5 / k + "px");
    }
  }
};

// remove label when not hovering
var unhovered = function(d){
  if (label){
    label.remove();
    label = null;
  }
};


var cir = d3.symbol().type(d3.symbolCircle)();
console.log(cir);

// Color legend for air pollution
var colorScale = d3.scaleQuantize()
  .domain([233, 3])
  .range(colorbrewer.Greys[9].reverse());

var colorLegend = d3.legendColor()
  .labelFormat(d3.format(".0f"))
  .scale(colorScale)
  .shapePadding(5)
  .shapeWidth(50)
  .shapeHeight(20)
  .labelOffset(12)
  // .on("click", function(d){console.log(d)})
  .title("Air Pollution Levels in µg/m³");

svg.append("g")
  .attr("transform", "translate(900, 300)")
  .style("font-size","5px")
  .call(colorLegend);

var ordinal = d3.scaleOrdinal()
  .domain(["Car Accidents in Hundreds", "Lung Cancer Deaths per 1,000,000 People"])
  .range([ "rgb(255, 0, 0)", "rgb(0, 255, 0)"]);

svg.append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(900,225)");

var legendOrdinal = d3.legendColor()
  //d3 symbol creates a path-string, for example
  //"M0,-8.059274488676564L9.306048591020996,
  //8.059274488676564 -9.306048591020996,8.059274488676564Z"
  .shape("path", d3.symbol().type(d3.symbolCircle).size(150)())
  .shapePadding(10)
  //use cellFilter to hide the "e" cell
  .scale(ordinal);

svg.select(".legendOrdinal")
  .call(legendOrdinal);



  // .on("cellclick", function(d){alert("clicked " + d);});
// function for random dots 
var random_between = function(x, y){
  if (x >= y){
    return Math.floor(Math.random() * (x-y)) + y;
  }
  else{
    return Math.floor(Math.random() * (y-x)) + x;
  }
}

// plots dots for car density
var car_density = function(){
  remove_circles(circles_cars);
  d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
    if (error) throw error;
    stts = topojson.feature(us, us.objects.states).features;
    for (state of stts){
      var border_cors = state["geometry"]["coordinates"][0][0];
      var x, y;
      //console.log(state_centers[state["id"]])

      var x = state_centers[state["id"]][0];
      var y = state_centers[state["id"]][1];

      // dots are randomly generated based on the center of the states      
      for(i = 0; i<Math.round(car_accidents[state["id"]]/100); i++){
        var rand_border = border_cors[Math.floor(Math.random()*border_cors.length)];
        // console.log(x, rand_border[0]);
        // console.log(y, rand_border[1]);
        x = random_between(x, rand_border[0]);
        y = random_between(y, rand_border[1]);
        // console.log(x,y);
        circle = svg.append("circle");
        circles_cars.push(circle);
        var rand_x = 0//Math.floor(Math.random()*50) - 25;
        var rand_y = 0//Math.floor(Math.random()*50) - 25;

        circle.attr("stroke", "black")
            .attr("cx", x + rand_x)
            .attr("cy", y + rand_y)
            .attr("r", 3)
            .style("fill", "#FF0000");
      }
    }
  });
  cars_drawn = true;
};

// plots dots for lung density
var lung_density = function(){
  remove_circles(circles_lungs);
  d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
    if (error) throw error;
    stts = topojson.feature(us, us.objects.states).features;
    for (state of stts){
      var border_cors = state["geometry"]["coordinates"][0][0];
      //console.log(state)
      var x, y;
      //console.log(state_centers[state["id"]])

      var x = state_centers[state["id"]][0];
      var y = state_centers[state["id"]][1];

      // dots are randomly generated based on the center of the states
      for(i = 0; i<Math.round(lung_cancer_state[state["id"]]/10); i++){
        var rand_border = border_cors[Math.floor(Math.random()*border_cors.length)];
        x = random_between(x, rand_border[0]);
        y = random_between(y, rand_border[1]);
        circle = svg.append("circle");
        circles_lungs.push(circle);
        var rand_x = 0// Math.floor(Math.random()*50) - 25;
        var rand_y = 0//Math.floor(Math.random()*50) - 25;

        circle.attr("stroke", "black")
            .attr("cx", x + rand_x)
            .attr("cy", y + rand_y)
            .attr("r", 3)
            .style("fill", "#00FF00");
      }
    }
  });
  lungs_drawn = true;
};


// changes the appearance of lunch cancer and car density buttons
// to show whether they are toggled.
var cd = document.getElementById("cd");
var lcr = document.getElementById("lcr");

cd.addEventListener('click', function(){
  if(!zoomed){
    if(!cd_clicked){
      car_density();
      cd.setAttribute("class", "btn btn-primary");
    }
    else{
      remove_circles(circles_cars);
      cd.setAttribute("class", "btn btn-secondary");
      cars_drawn = false;
    }
    cd_clicked = !cd_clicked;
  }

});

lcr.addEventListener('click', function(){
  if(!zoomed){
    if(!lcr_clicked && !zoomed){
      lung_density();
      lcr.setAttribute("class", "btn btn-primary");
    }
    else{
      remove_circles(circles_lungs);
      lcr.setAttribute("class", "btn btn-secondary");
      lungs_drawn = false;
    }
    lcr_clicked = !lcr_clicked;
  }
});
