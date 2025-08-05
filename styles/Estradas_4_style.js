var size = 0;
var placement = 'point';

var style_Estradas_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11.700000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#982828";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("ROAD_ID") !== null) {
        labelText = String(feature.get("ROAD_ID"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,96,17,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.316157}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
