---
title: "Satellite Image Preprocessing Pipeline for Computer Vision"
name: "Peace Chinemere Ebika"
course: Computer Vision
---

# Satellite Image Preprocessing Pipeline

## Overview

This repository contains the preliminary results for a computer vision pipeline designed to process satellite imagery for environmental and land analysis. The project demonstrates how remote sensing data obtained from the Sentinel-2 satellite can be acquired, processed, and transformed into a dataset suitable for machine learning and computer vision tasks. The workflow integrates Google Earth Engine for satellite data acquisition and Python-based tools for raster processing, visualization, and dataset generation.

---

# Problem Description

Satellite imagery provides a powerful source of information for analyzing environmental conditions, urban development, agricultural patterns, and water resources. However, raw satellite data is typically stored in large geospatial raster formats that are not directly suitable for machine learning models. In computer vision tasks, images must often be converted into smaller standardized samples before they can be used for training algorithms such as Convolutional Neural Networks (CNNs) or classical machine learning models.

The goal of this activity is therefore to build a preprocessing pipeline that acquires satellite imagery, converts it into a manageable format, visualizes its spectral bands, and splits the image into smaller tiles suitable for downstream computer vision tasks.

---

# Solution Overview

The solution implements a preprocessing pipeline that acquires Sentinel-2 satellite imagery using Google Earth Engine and exports the scene as a GeoTIFF file. The image is then processed in Python where RGB bands are visualized and the large raster image is split into 256×256 tiles to generate a dataset suitable for machine learning.

---

# Progress Achieved in This Activity

This activity establishes the foundational stage of a computer vision pipeline for satellite imagery analysis. The following progress has been achieved:

- Acquisition of Sentinel-2 satellite imagery using Google Earth Engine  
- Export of satellite imagery as GeoTIFF raster data  
- Loading and processing of satellite imagery using Python  
- Visualization of RGB spectral bands from the raster data  
- Automated generation of image tiles from the satellite scene  
- Creation of a dataset consisting of thousands of image samples suitable for training computer vision models  
- Visualization of randomly selected tiles to verify dataset quality

A total of **2809 image tiles** were generated from the original satellite image, each with a spatial size of **256 × 256 pixels**.

These results demonstrate that the preprocessing pipeline successfully converts raw satellite data into a structured dataset that can later be used for training machine learning models.

---

# Methodology and Pipeline

## Satellite Data Acquisition

Satellite imagery used in this project was obtained using **Google Earth Engine**, a cloud-based platform for planetary-scale geospatial analysis. The dataset used in this activity is derived from **Sentinel-2 satellite imagery provided by the European Space Agency (ESA)**.

The Earth Engine script used to filter, visualize, and export the satellite imagery can be accessed at the following link:

**Google Earth Engine Script**

[View the Earth Engine Code](https://code.earthengine.google.com/ed452eed789f12fa058f102ea639b09e?noload=1)

This script performs the following operations:

- Defines the geographic region of interest  
- Filters Sentinel-2 imagery by date and cloud coverage  
- Selects the RGB spectral bands (B4, B3, B2)  
- Generates a median composite image  
- Exports the processed satellite scene as a GeoTIFF file for further processing in Python

The processing pipeline implemented in this project follows the workflow below:

Satellite Data Acquisition (Google Earth Engine)

↓

Export Satellite Scene as GeoTIFF

↓

Load Raster Image in Python

↓

Extract RGB Spectral Bands

↓

Visualize Satellite Image

↓

Split Image into Fixed-Size Tiles

↓

Generate Dataset for Machine Learning

---

# Tools and Technologies Used

The following tools and libraries were used to implement the pipeline:

## Satellite Data

Sentinel-2 satellite imagery  
European Space Agency (ESA)

Accessed through:

Google Earth Engine

---

## Programming Environment

Python 3  
Google Colab

---

## Python Libraries

- NumPy  
- Matplotlib  
- Pillow (PIL)  
- Rasterio  
- OS / File utilities  

These libraries were used for raster processing, visualization, and dataset generation.

---

# Repository Structure

The project is organized as follows:
```text
satellite-image-preprocessing
│
├── README.md
├── requirements.txt
│
├── data
│   ├──raw
│   ├── titles
│
├── code
│   └── satellite_pipeline.ipynb
│
├── scripts.js
│   ├── sentinel2_export.js
│   ├── visualize_tiles.py
│
└── results
    └── tile_preview.png
```


---

# Preliminary Results

The preprocessing pipeline successfully generated a dataset of image tiles derived from the Sentinel-2 satellite scene. Each tile represents a smaller spatial portion of the original satellite image and can serve as an input sample for machine learning algorithms.

To verify the quality of the dataset, several randomly selected tiles were visualized. These samples confirm that the tiling process correctly preserved the spatial patterns present in the original satellite imagery.

The generated dataset is suitable for future tasks such as:

- Land cover classification  
- Environmental monitoring  
- Water resource detection  
- Agricultural pattern analysis  
- Urban development detection  

---

# Future Work

Future work will focus on applying machine learning algorithms to the generated dataset. Potential next steps include:

- Training Convolutional Neural Networks (CNNs) for image classification  
- Applying classical machine learning models such as Random Forest or Support Vector Machines  
- Detecting vegetation using spectral indices such as NDVI  
- Performing land cover segmentation  
- Developing predictive models for environmental monitoring

---

# Code and Material Attribution

Satellite data used in this project originates from:

Sentinel-2 Mission  
European Space Agency (ESA)

Accessed via:

Google Earth Engine  
https://earthengine.google.com/

The Python libraries used in this repository are open-source and widely used in the scientific computing community.

---

# AI Tool Declaration

Portions of the code structure, workflow explanations, and documentation were developed with the assistance of an AI language model (ChatGPT by OpenAI). The AI tool was used as a programming assistant to support code explanation, formatting, and documentation preparation. All implementation steps were executed and verified by the project author.

---

# Conclusion

This project successfully demonstrates the initial stage of a satellite image computer vision pipeline. By integrating remote sensing data acquisition with Python-based image processing, the project converts large satellite images into a structured dataset of smaller samples suitable for machine learning applications. The results provide a strong foundation for future work involving automated analysis of satellite imagery using artificial intelligence techniques.

# References

European Space Agency. (2023). *Sentinel-2 User Handbook*.  
https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi

Google Earth Engine Team. (2023). *Google Earth Engine: Planetary-scale geospatial analysis platform*.  
https://earthengine.google.com/

Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D., & Moore, R. (2017).  
Google Earth Engine: Planetary-scale geospatial analysis for everyone.  
*Remote Sensing of Environment*, 202, 18–27.  
https://doi.org/10.1016/j.rse.2017.06.031

Rasterio Developers. (2023). *Rasterio: Access to geospatial raster data*.  
https://rasterio.readthedocs.io/

Hunter, J. D. (2007).  
Matplotlib: A 2D graphics environment.  
*Computing in Science & Engineering*, 9(3), 90–95.  
https://doi.org/10.1109/MCSE.2007.55

NumPy Developers. (2023). *NumPy: The fundamental package for scientific computing in Python*.  
https://numpy.org/

Python Software Foundation. (2023). *Python Language Reference*.  
https://www.python.org/
