ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([1031186.500605, -3425910.381390, 2139675.468316, -2700368.939672]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Inhambane_1 = new ol.format.GeoJSON();
var features_Inhambane_1 = format_Inhambane_1.readFeatures(json_Inhambane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Inhambane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inhambane_1.addFeatures(features_Inhambane_1);
var lyr_Inhambane_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inhambane_1, 
                style: style_Inhambane_1,
                popuplayertitle: 'Inhambane',
                interactive: true,
                title: '<img src="styles/legend/Inhambane_1.png" /> Inhambane'
            });
var format_distritos_2 = new ol.format.GeoJSON();
var features_distritos_2 = format_distritos_2.readFeatures(json_distritos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_distritos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_2.addFeatures(features_distritos_2);
var lyr_distritos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distritos_2, 
                style: style_distritos_2,
                popuplayertitle: 'distritos',
                interactive: true,
                title: '<img src="styles/legend/distritos_2.png" /> distritos'
            });
var format_solos_3 = new ol.format.GeoJSON();
var features_solos_3 = format_solos_3.readFeatures(json_solos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_solos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solos_3.addFeatures(features_solos_3);
var lyr_solos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_solos_3, 
                style: style_solos_3,
                popuplayertitle: 'solos',
                interactive: true,
    title: 'solos<br />\
    <img src="styles/legend/solos_3_0.png" /> Je<br />\
    <img src="styles/legend/solos_3_1.png" /> Jt<br />\
    <img src="styles/legend/solos_3_2.png" /> Qc<br />\
    <img src="styles/legend/solos_3_3.png" /> Qf<br />\
    <img src="styles/legend/solos_3_4.png" /> Ql<br />\
    <img src="styles/legend/solos_3_5.png" /> Re<br />\
    <img src="styles/legend/solos_3_6.png" /> WR<br />\
    <img src="styles/legend/solos_3_7.png" /> <br />' });
var format_Estradas_4 = new ol.format.GeoJSON();
var features_Estradas_4 = format_Estradas_4.readFeatures(json_Estradas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Estradas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_4.addFeatures(features_Estradas_4);
var lyr_Estradas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradas_4, 
                style: style_Estradas_4,
                popuplayertitle: 'Estradas',
                interactive: true,
                title: '<img src="styles/legend/Estradas_4.png" /> Estradas'
            });
var format_Rios_5 = new ol.format.GeoJSON();
var features_Rios_5 = format_Rios_5.readFeatures(json_Rios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Rios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_5.addFeatures(features_Rios_5);
var lyr_Rios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_5, 
                style: style_Rios_5,
                popuplayertitle: 'Rios',
                interactive: true,
                title: '<img src="styles/legend/Rios_5.png" /> Rios'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Inhambane_1.setVisible(true);lyr_distritos_2.setVisible(true);lyr_solos_3.setVisible(true);lyr_Estradas_4.setVisible(true);lyr_Rios_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Inhambane_1,lyr_distritos_2,lyr_solos_3,lyr_Estradas_4,lyr_Rios_5];
lyr_Inhambane_1.set('fieldAliases', {'ADM1_PT': 'ADM1_PT', });
lyr_distritos_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_PT': 'ADM2_PT', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1PT': 'ADM2ALT1PT', 'ADM2ALT2PT': 'ADM2ALT2PT', 'ADM1_PT': 'ADM1_PT', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PT': 'ADM0_PT', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_solos_3.set('fieldAliases', {'SNUM': 'SNUM', 'FAOSOIL': 'FAOSOIL', 'DOMSOI': 'DOMSOI', 'PHASE1': 'PHASE1', 'PHASE2': 'PHASE2', 'MISCLU1': 'MISCLU1', 'MISCLU2': 'MISCLU2', 'PERMAFROST': 'PERMAFROST', 'CNTCODE': 'CNTCODE', 'CNTNAME': 'CNTNAME', 'SQKM': 'SQKM', 'COUNTRY': 'COUNTRY', });
lyr_Estradas_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'LINK_ID': 'LINK_ID', 'LINK_ID_NE': 'LINK_ID_NE', 'ROAD_ID': 'ROAD_ID', 'SEQ_NUM': 'SEQ_NUM', 'ODO_LENGTH': 'ODO_LENGTH', 'RMASTR_LEN': 'RMASTR_LEN', 'GIS_LENGTH': 'GIS_LENGTH', 'START_LOC': 'START_LOC', 'STA_POINT': 'STA_POINT', 'END_LOC': 'END_LOC', 'END_POINT': 'END_POINT', 'ROAD_CLASS': 'ROAD_CLASS', 'SURF_TYPE': 'SURF_TYPE', 'PAVE_WIDTH': 'PAVE_WIDTH', 'AVG_COND': 'AVG_COND', 'DISTRICT': 'DISTRICT', 'PROVINCE': 'PROVINCE', 'REMARKS': 'REMARKS', 'START_X': 'START_X', 'START_Y': 'START_Y', 'END_X': 'END_X', 'END_Y': 'END_Y', 'LenthRM__m': 'LenthRM__m', 'LenGIS_km': 'LenGIS_km', 'ROAD_NAME': 'ROAD_NAME', 'Shape_Leng': 'Shape_Leng', });
lyr_Rios_5.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH_M': 'LENGTH_M', 'HID250G_': 'HID250G_', 'HID250G_ID': 'HID250G_ID', 'TIPO_RIO': 'TIPO_RIO', 'ORDEM': 'ORDEM', 'TOPONIMO': 'TOPONIMO', 'ID_OPER': 'ID_OPER', });
lyr_Inhambane_1.set('fieldImages', {'ADM1_PT': 'TextEdit', });
lyr_distritos_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_PT': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1PT': 'TextEdit', 'ADM2ALT2PT': 'TextEdit', 'ADM1_PT': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PT': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_solos_3.set('fieldImages', {'SNUM': 'Range', 'FAOSOIL': 'TextEdit', 'DOMSOI': 'TextEdit', 'PHASE1': 'TextEdit', 'PHASE2': 'TextEdit', 'MISCLU1': 'TextEdit', 'MISCLU2': 'TextEdit', 'PERMAFROST': 'TextEdit', 'CNTCODE': 'TextEdit', 'CNTNAME': 'TextEdit', 'SQKM': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_Estradas_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_ID_NE': 'TextEdit', 'ROAD_ID': 'TextEdit', 'SEQ_NUM': 'TextEdit', 'ODO_LENGTH': 'TextEdit', 'RMASTR_LEN': 'TextEdit', 'GIS_LENGTH': 'TextEdit', 'START_LOC': 'TextEdit', 'STA_POINT': 'TextEdit', 'END_LOC': 'TextEdit', 'END_POINT': 'TextEdit', 'ROAD_CLASS': 'TextEdit', 'SURF_TYPE': 'TextEdit', 'PAVE_WIDTH': 'TextEdit', 'AVG_COND': 'TextEdit', 'DISTRICT': 'TextEdit', 'PROVINCE': 'TextEdit', 'REMARKS': 'TextEdit', 'START_X': 'TextEdit', 'START_Y': 'TextEdit', 'END_X': 'TextEdit', 'END_Y': 'TextEdit', 'LenthRM__m': 'TextEdit', 'LenGIS_km': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Rios_5.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH_M': '', 'HID250G_': '', 'HID250G_ID': '', 'TIPO_RIO': '', 'ORDEM': '', 'TOPONIMO': '', 'ID_OPER': '', });
lyr_Inhambane_1.set('fieldLabels', {'ADM1_PT': 'inline label - always visible', });
lyr_distritos_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_PT': 'inline label - always visible', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1PT': 'no label', 'ADM2ALT2PT': 'no label', 'ADM1_PT': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PT': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_solos_3.set('fieldLabels', {'SNUM': 'no label', 'FAOSOIL': 'inline label - always visible', 'DOMSOI': 'inline label - always visible', 'PHASE1': 'no label', 'PHASE2': 'no label', 'MISCLU1': 'no label', 'MISCLU2': 'no label', 'PERMAFROST': 'no label', 'CNTCODE': 'no label', 'CNTNAME': 'no label', 'SQKM': 'no label', 'COUNTRY': 'no label', });
lyr_Estradas_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'inline label - always visible', 'LINK_ID': 'no label', 'LINK_ID_NE': 'no label', 'ROAD_ID': 'inline label - always visible', 'SEQ_NUM': 'no label', 'ODO_LENGTH': 'no label', 'RMASTR_LEN': 'no label', 'GIS_LENGTH': 'no label', 'START_LOC': 'no label', 'STA_POINT': 'no label', 'END_LOC': 'no label', 'END_POINT': 'no label', 'ROAD_CLASS': 'no label', 'SURF_TYPE': 'no label', 'PAVE_WIDTH': 'no label', 'AVG_COND': 'no label', 'DISTRICT': 'no label', 'PROVINCE': 'no label', 'REMARKS': 'no label', 'START_X': 'no label', 'START_Y': 'no label', 'END_X': 'no label', 'END_Y': 'no label', 'LenthRM__m': 'no label', 'LenGIS_km': 'no label', 'ROAD_NAME': 'no label', 'Shape_Leng': 'no label', });
lyr_Rios_5.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH_M': 'no label', 'HID250G_': 'no label', 'HID250G_ID': 'no label', 'TIPO_RIO': 'inline label - always visible', 'ORDEM': 'no label', 'TOPONIMO': 'inline label - always visible', 'ID_OPER': 'no label', });
lyr_Rios_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});