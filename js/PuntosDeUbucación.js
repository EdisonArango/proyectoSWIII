
var iconFeature = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.6243721,4.13478])),
        name: 'Downtown',
        population: 4000,
        rainfall: 500
    });

      var unillanos = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.5836854,4.0723717])),        
        name: 'Unilanos',
        population: 4000,
        rainfall: 500
      });
      var universidadCooperativa = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.6090871,4.1167864])),        
        name: 'Universidad Cooperativa',
        population: 4000,
        rainfall: 500
      });
      var postobon = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.628582,4.1305607])),        
        name: 'Postobón Gaseosas del Llano',
        population: 4000,
        rainfall: 500
      });
      var unicentro = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.6409047,4.1471248])),        
        name: 'Unicentro',
        population: 4000,
        rainfall: 500
      });
      var colegioCofrem = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.6228785,4.1472264])),        
        name: 'Colegio Cofrem',
        population: 4000,
        rainfall: 500
      });
      var cristoRey = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.6416109,4.1536792])),        
        name: 'Cristo Rey',
        population: 4000,
        rainfall: 500
      });
      var parqueFundadores = new ol.Feature({
        //geometry: new ol.geom.Point([0, 0]),
        geometry: new  ol.geom.Point(ol.proj.fromLonLat([-73.6444257,4.1221323])),        
        name: 'Parque los fundadores',
        population: 4000,
        rainfall: 500
      });
      var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 46],
          //size: [100, 100],
          //scale: 0.1, 
          anchorXUnits: 'fraction',
          //anchorXUnits: 'pixels',
          anchorYUnits: 'pixels',
          //src: 'https://openlayers.org/en/v3.19.0/examples/data/icon.png'
          //src: 'http://localhost/app/imagenes/png/wifi-signal-tower.png'
          src: 'imagenes/png/placeholder.png'
          
          
        }))
      });

      iconFeature.setStyle(iconStyle);
      unillanos.setStyle(iconStyle);
      universidadCooperativa.setStyle(iconStyle);
      postobon.setStyle(iconStyle);
      unicentro.setStyle(iconStyle);
      colegioCofrem.setStyle(iconStyle);
      cristoRey.setStyle(iconStyle);
      parqueFundadores.setStyle(iconStyle);
      var vectorSource = new ol.source.Vector({
        features: [iconFeature,unillanos,universidadCooperativa,postobon,unicentro,colegioCofrem,cristoRey,parqueFundadores]
      });

      var puntos = new ol.layer.Vector({
        source: vectorSource
      });



