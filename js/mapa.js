$(document).ready(cargarMapa);
var map;
function cargarMapa(){
   map = new ol.Map({
        //layers: [rasterLayer, vectorLayer],
        layers: [new ol.layer.Tile({source: new ol.source.OSM()}),puntos],               
        target: document.getElementById('mapa'),
        //target: 'mapa',
        view: new ol.View({
          //center: [0,0],
          center: ol.proj.fromLonLat([-73.6243721,4.13478]),
          zoom: 12
        })
      });
      
      
//evento de seleccionar un punto 
var element = document.getElementById('popup');
      var popup = new ol.Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
      });
      map.addOverlay(popup);

      // display popup on click
      map.on('click', function(evt) {
        
        var feature = map.forEachFeatureAtPixel(evt.pixel,
            function(feature) {
              return feature;
            });
      
        $(element).popover('destroy');   
         
         
        if (feature) {
          
          var coordinates = feature.getGeometry().getCoordinates();
          popup.setPosition(coordinates);
          
          $(element).popover({
            'placement': 'top',
            'html': true,
            'content': feature.get('name')
          });
          $(element).popover('show');
        } else {
          $(element).popover('destroy');
        }
      });
      
      
      
        map.on('pointermove', function(e) {
        if (e.dragging) {
          $(element).popover('destroy');
          return;
        }
        var pixel = map.getEventPixel(e.originalEvent);
        var hit = map.hasFeatureAtPixel(pixel);
        map.getTarget().style.cursor = hit ? 'pointer' : '';
      });
}



/*<- descomentar solo esto
function cargarMapa(){
    mapaPuntos = new ol.Map({
        layers: [
          new ol.layer.Vector({
            source: capaPuntos
          }),
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        target: 'mapa',
        controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */   /* <- descomentar solo esto({ 
            collapsible: false
          })
        }),
        view: new ol.View({
          center: ol.proj.fromLonLat([-73.6243721,4.13478]),
          zoom: 15
        })
    });
}
descomentar solo esto -->*/
      
/*
      document.getElementById('zoom-out').onclick = function() {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom - 1);
      };

      document.getElementById('zoom-in').onclick = function() {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom + 1);
      };
*/
