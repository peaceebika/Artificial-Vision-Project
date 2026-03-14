// Define region
var region = ee.Geometry.Rectangle([-100, 18, -97, 21]);

// Load Sentinel-2 image collection
var dataset = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(region)
  .filterDate('2023-01-01', '2023-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Take median image
var image = dataset.median();

// Visualization parameters
var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000
};

// Display image
Map.centerObject(region, 8);
Map.addLayer(image, visParams, 'Sentinel-2 Image');

// Export image
Export.image.toDrive({
  image: image,
  description: 'Sentinel2_Mexico',
  scale: 10,
  region: region,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e13
});