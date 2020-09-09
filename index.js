




var data1 = [];
var data2= [];
var i;

resetData();

window.addEventListener('resize', getMessage, true);


function resetData(){
  data1.length=0;
  
for(i=32;i<128;i++){
  
  var person = new Object();
  person.group = String.fromCharCode(i);
  person.value = 0;
  data1.push(person);

}

data1[95].group="OSTALO";
data1[95].value=0;



}

function resetDataHeatMap(){
  



  data2 = [
    {down: "x0", left: "y0", sign: "Y", value:0},
    {down: "x1", left: "y0", sign: "X", value:0},
    {down: "x2", left: "y0", sign: "C", value:0},
    {down: "x3", left: "y0", sign: "V", value:0},
    {down: "x4", left: "y0", sign: "B", value:0},
    {down: "x5", left: "y0", sign: "N", value:0},
    {down: "x6", left: "y0", sign: "M", value:0},
    {down: "x7", left: "y0", sign: ",", value:0},
    {down: "x8", left: "y0", sign: ".", value:0},
    {down: "x9", left: "y0", sign: "-", value:0},
    {down: "x10", left: "y0", sign: " ", value:0},
    {down: "x11", left: "y0", sign: "FREE", value:0},
 
    
    
    {down: "x0", left: "y1", sign: "A", value:0},
    {down: "x1", left: "y1", sign: "S", value:0},
    {down: "x2", left: "y1", sign: "D", value:0},
    {down: "x3", left: "y1", sign: "F", value:0},
    {down: "x4", left: "y1", sign: "G", value:0},
    {down: "x5", left: "y1", sign: "H", value:0},
    {down: "x6", left: "y1", sign: "J", value:0},
    {down: "x7", left: "y1", sign: "K", value:0},
    {down: "x8", left: "y1", sign: "L", value:0},
    {down: "x9", left: "y1", sign: "Č", value:0},
    {down: "x10", left: "y1", sign: "Ć", value:0},
    {down: "x11", left: "y1", sign: "Ž", value:0},
 
    {down: "x0", left: "y2", sign: "Q", value:0},
    {down: "x1", left: "y2", sign: "W", value:0},
    {down: "x2", left: "y2", sign: "E", value:0},
    {down: "x3", left: "y2", sign: "R", value:0},
    {down: "x4", left: "y2", sign: "T", value:0},
    {down: "x5", left: "y2", sign: "Z", value:0},
    {down: "x6", left: "y2", sign: "U", value:0},
    {down: "x7", left: "y2", sign: "I", value:0},
    {down: "x8", left: "y2", sign: "O", value:0},
    {down: "x9", left: "y2", sign: "P", value:0},
    {down: "x10", left: "y2", sign: "Š", value:0},
    {down: "x11", left: "y2", sign: "Đ", value:0},
 
    {down: "x0", left: "y3", sign: "1", value:0},
    {down: "x1", left: "y3", sign: "2", value:0},
    {down: "x2", left: "y3", sign: "3", value:0},
    {down: "x3", left: "y3", sign: "4", value:0},
    {down: "x4", left: "y3", sign: "5", value:0},
    {down: "x5", left: "y3", sign: "6", value:0},
    {down: "x6", left: "y3", sign: "7", value:0},
    {down: "x7", left: "y3", sign: "8", value:0},
    {down: "x8", left: "y3", sign: "9", value:0},
    {down: "x9", left: "y3", sign: "FREE", value:0},
    {down: "x10", left: "y3", sign: "FREE", value:0},
    {down: "x11", left: "y3", sign: "FREE", value:0},
 
 
    {down: "x0", left: "y4", sign: "!", value:0},
    {down: "x1", left: "y4", sign: "\"", value:0},
    {down: "x2", left: "y4", sign: "#", value:0},
    {down: "x3", left: "y4", sign: "$", value:0},
    {down: "x4", left: "y4", sign: "%", value:0},
    {down: "x5", left: "y4", sign: "&", value:0},
    {down: "x6", left: "y4", sign: "/", value:0},
    {down: "x7", left: "y4", sign: "(", value:0},
    {down: "x8", left: "y4", sign: ")", value:0},   
    {down: "x9", left: "y4", sign: "=", value:0},
    {down: "x10", left: "y4", sign: "?", value:0},
    {down: "x11", left: "y4", sign: "OSTALO", value:0},
    
 ];

 var char1= d3.select("#char1").property("value");
  var char2= d3.select("#char2").property("value");
  var char3= d3.select("#char3").property("value");
  var char4= d3.select("#char4").property("value");

  if(char1!=""){data2[11].sign=char1;}
  if(char2!=""){data2[45].sign=char2;}
  if(char3!=""){data2[46].sign=char3;}
  if(char4!=""){data2[47].sign=char4;}

}

function mostUsedChar(dataForCheck){
  var most= Math.max.apply(Math, dataForCheck.map(function(o) { return o.value; }));
  if(most>20)return most;
  return 20;
}

function mostUsedCharHeatMap(dataForCheck){
  var most= Math.max.apply(Math, dataForCheck.map(function(o) { return o.value; }));
  return most;
  
}






initMessage();
setBars(data1);
setHeatMap();



function updateBars(dataX){

  var mostUsed=mostUsedChar(dataX);
        
  d3.selectAll("svg").remove();
  var divWidth= document.getElementById('my_dataviz').clientWidth;
  var divHeight= document.getElementById('my_dataviz').clientHeight;
  
  
  var margin = {top: 30, right: 30, bottom: 30, left: 30};
  width = divWidth - margin.left - margin.right;
    height = divHeight - margin.top - margin.bottom;

  
  var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


  
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(dataX.map(function(d) { return d.group; }))
    .padding(0.2);

    
  var y = d3.scaleLinear()
  .domain([0, mostUsed])
  .range([ height, 0]);


  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

   

  svg.append("g")
    .attr("class", "myYaxis")
    .call(d3.axisLeft(y));

    var u = svg.selectAll("rect")
      .data(dataX)
      
      
      

      u
      .enter()
      .append("rect")
      .merge(u)
      .on("mouseover", function(){
        
        tooltip.style("display", null);
      })
      .on("mouseout", function(){
        
        
        tooltip.style("display", "none");
      })
      .on("mousemove", function(d){
        var xPos= d3.mouse(this)[0]-15;
        var yPos= d3.mouse(this)[1]-55;
        tooltip.attr("transform", "translate(" + xPos + ", "  +  yPos + ")");
        tooltip.select("text").text(d.group+": "+ d.value);

      })
      .on("click", function(){
        
      })
      .transition()
      .duration(3)
        .attr("x", function(d) { return x(d.group); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", function(d) {
          if (d.value == mostUsed) {
            
            return "red";
          } else if (d.value > 10) {
            return "orange";
          }
          return "yellow";
        })
        
        var tooltip= svg.append("g")
          .attr("class", tooltip)
          .style("display", "none")


          tooltip.append("text")
            .attr("x", 15)
            .attr("y","1.2em")
            .style("font-size", "1.25em")

        

       
    
     
       
  
  

}


 function setBars(dataX){

  var mostUsed=mostUsedChar(dataX);
        
  d3.selectAll("svg").remove();
  var divWidth= document.getElementById('my_dataviz').clientWidth;
  var divHeight= document.getElementById('my_dataviz').clientHeight;
  
  
  var margin = {top: 30, right: 30, bottom: 30, left: 30};
  width = divWidth - margin.left - margin.right;
    height = divHeight - margin.top - margin.bottom;
        
  

        
        var svg = d3.select("#my_dataviz")
          .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");


        
        var x = d3.scaleBand()
          .range([ 0, width ])
          .domain(dataX.map(function(d) { return d.group; }))
          .padding(0.2);

          
        var y = d3.scaleLinear()
        .domain([0, 20])
        .range([ height, 0]);


        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))

         

        svg.append("g")
          .attr("class", "myYaxis")
          .call(d3.axisLeft(y));

          var u = svg.selectAll("rect")
            .data(dataX)

            u
            .enter()
            .append("rect")
            .merge(u)
            .transition()
            .duration(500)
              .attr("x", function(d) { return x(d.group); })
              .attr("y", function(d) { return y(d.value); })
              .attr("width", x.bandwidth())
              .attr("height", function(d) { return height - y(d.value); })
              .attr("fill", "#69b3a2")
        
        

    }

  function initMessage() {
      
    var inputText= d3.select("#msg").property("value");
          
          
          
    resetData();
  
        
    var counts = {};
  
        
    var ch, index, len, count;
  
        
    for (index = 0, len = inputText.length; index < len; index++) {
        
        ch = inputText.charAt(index); 
        
          
          data1[ch.charCodeAt(0)-32].value++;
          
        
        
    }
   
          
        }


  function getMessage() {
      

    

          var inputText= d3.select("#msg").property("value");
          
          
          
          resetData();
          resetDataHeatMap();

        
              
          var counts = {};
        
              
          var ch, index, len, count, indexInArray,chBig;


        
              
          for (index = 0, len = inputText.length; index < len; index++) {
              
              ch = inputText.charAt(index); 
              
              
              

              chBig=ch.toUpperCase();
              indexInArray=data2.findIndex(x=>x.sign==chBig);
              
              if(indexInArray==-1){
                data2[59].value++;
                
              }
              else{
                data2[indexInArray].value++;
              }
              
               
            if(ch.charCodeAt(0)>31 && ch.charCodeAt(0)<127){
                data1[ch.charCodeAt(0)-32].value++;
              }
            else{
              data1[95].value++;
              
            }   


            
              
              
          }
          mostUsedChar(data1);
          
        
        
          updateBars(data1);
          updateHeatMap();
        }










function setHeatMap(){

  resetDataHeatMap();

  var divWidth= document.getElementById('heatmap').clientWidth;
  
  
  var divHeight= document.getElementById('heatmap').clientHeight;
  
  
  var margin = {top: 0, right: 0, bottom: 0, left: 0};
  width = divWidth - margin.left - margin.right;
    height = divHeight - margin.top - margin.bottom;
  
  
  var svg = d3.select("#heatmap")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  
  var myGroups = ["x0", "x1", "x2", "x3", "x4", "x5", "x6","x7", "x8","x9","x10","x11"]
  var myVars = ["y0","y1","y2","y3","y4"]
  
  
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(myGroups)
    .padding(0.01,);
 
    
  
  
  var y = d3.scaleBand()
    .range([ height, 0 ])
    .domain(myVars)
    .padding(0.01);
 
  
  
  var myColor = d3.scaleLinear()
    .range(["white", "red"])
    .domain([1,100])
  
  
 

    
  
    svg.selectAll()
        .data(data2, function(d) {return d.down+':'+d.left;})
        .enter()
        .append("rect")
        .on("mouseover", function(){
        
        tooltip.style("display", null);
      })
      .on("mouseout", function(){
        
        
        tooltip.style("display", "none");
      })
      .on("mousemove", function(d){
        var xPos= d3.mouse(this)[0]-95;
        var yPos= d3.mouse(this)[1]-55;
        tooltip.attr("transform", "translate(" + xPos + ", "  +  yPos + ")");
        tooltip.select("text").text("Occurrences: "+ d.value);

      })
        .attr("x", function(d,i) { return x(d.down) })
        .attr("y", function(d,i) { return y(d.left) })
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return myColor(d.value)} )


        var tooltip= svg.append("g")
          .attr("class", tooltip)
          .style("display", "none")


          tooltip.append("text")
            .attr("x", 15)
            .attr("y","1.2em")
            .style("font-size", "1.25em")




            svg.selectAll(".hourlabel")
    .data(data2)
    .enter().append("text")
    .style("font-size", "14px")
    .attr("class", "hourlabel")
    .attr("x", function(d) { return x(d.down) +10; })
    .attr("y", function(d) { return y(d.left)+20; })
    .text(function(d) {
        return d.sign;
    }); 

  }


  function updateHeatMap(){

    var divWidth= document.getElementById('heatmap').clientWidth;
    var divHeight= document.getElementById('heatmap').clientHeight;
    
    
    var margin = {top: 0, right: 0, bottom: 0, left: 0};
    width = divWidth - margin.left - margin.right;
      height = divHeight - margin.top - margin.bottom;
      
      
      var svg = d3.select("#heatmap")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
      
      
      var myGroups = ["x0", "x1", "x2", "x3", "x4", "x5", "x6","x7", "x8","x9","x10","x11"]
      var myVars = ["y0","y1","y2","y3","y4"]
      
      var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(myGroups)
        .padding(0.01,);
      var y = d3.scaleBand()
        .range([ height, 0 ])
        .domain(myVars)
        .padding(0.01);
      
        var myColor = d3.scaleLinear()
        .range(["white", "#E50914"])
        .domain([0,mostUsedCharHeatMap(data2)])
      
     
      
        svg.selectAll()
            .data(data2, function(d) {return d.down+':'+d.left;})
            .enter()
            .append("rect")
            .on("mouseover", function(){
            tooltip.style("display", null);
          })
          .on("mouseout", function(){
            
            tooltip.style("display", "none");
          })
          .on("mousemove", function(d){
            var xPos= d3.mouse(this)[0]-95;
            var yPos= d3.mouse(this)[1]-55;
            tooltip.attr("transform", "translate(" + xPos + ", "  +  yPos + ")");
            tooltip.select("text").text("Occurrences: "+ d.value);
    
          })
          .on("click", function(){
            
          })
            .attr("x", function(d,i) { return x(d.down) })
            .attr("y", function(d,i) {  return y(d.left) })
            .attr("width", x.bandwidth() )
            .attr("height", y.bandwidth() )
            .style("fill", function(d) { return myColor(d.value)} )
    
    
            var tooltip= svg.append("g")
              .attr("class", tooltip)
              .style("display", "none")
    
    
              tooltip.append("text")
                .attr("x", 15)
                .attr("y","1.2em")
                .style("font-size", "1.25em")
    
    
    
    
                svg.selectAll(".hourlabel")
        .data(data2)
        .enter().append("text")
        .style("font-size", "14px")
        .attr("class", "hourlabel")
        .attr("x", function(d) { return x(d.down)  + 10; })
        .attr("y", function(d) { return y(d.left) + 20; })
        .text(function(d) {
            return d.sign;
        }); 
    
      }
  






function removeSpaces(){
  var inputText= d3.select("#msg").property("value");
  inputText = inputText.replace(/\s+/g, '');
  document.getElementById("msg").value = inputText;
  getMessage();
}
  


function instructions(){


  alert("U lijevom gornjem uglu unosite text.\n"+
        "Sa svakom promjenom text-a grafovi se dinamički ažuriraju.\n"+
        "Graf na dnu stranice predstavlja sve ASCII znakove, \n"+
        "dok heatmap u desnom gornjem uglu predstavlja standardnu tipkovnicu, gdje su ostavljena 4 mjesta za znakove po želji.\n"+
        "koji neće biti provjeravani ukoliko već postoje na tipkovnici.\n"+
        "Funkcija Remove Spaces će obrisati sve razmake u tekstu i ne može se poništiti, stoga pažljivo.\n"+
        "Nakon što se neki znak pojavi više od 20 puta, znak koji se najčešće pojavljuje bit će označen crvenom bojom.\n"+
        "Prelaskom miša preko određenog znaka, vidljiv je njegov broj pojavljivanja.\n"+
        "created by Nikola Barbarić");


}
  



















