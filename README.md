---
title: "Satellite Image Preprocessing Pipeline for Computer Vision"
author: "Peace Chinemere Ebika"
output: github_document
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

The proposed solution implements a complete preprocessing workflow that converts large Sentinel-2 satellite images into a structured dataset of smaller image tiles. Satellite data is first acquired using Google Earth Engine and exported as a GeoTIFF file. The raster image is then loaded into Python where the RGB spectral bands are visualized and processed. Finally, the large image is divided into multiple fixed-size tiles (256 × 256 pixels) which can be used as input samples for machine learning models.

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
