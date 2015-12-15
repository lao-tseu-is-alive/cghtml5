/**
 * Created by cgil on 07.12.15.
 * based on OpenLayers 3 closure tutorial :
 * http://openlayers.org/en/v3.11.2/doc/tutorials/closure.html
 *
 *
 * to compile :
 *
 *
 */

/* next lines are for JSHint */
/* global goog */
/* global ol */

goog.provide('app');

goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.layer.Tile');
goog.require('ol.source.OSM');


/**
 * @type {ol.Map}
 */
app.map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([6.62925, 46.51735]),
        zoom: 12
    })
});