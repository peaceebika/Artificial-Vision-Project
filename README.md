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

Satellite imagery provides a powerful source of information for analyzing environmental conditions, urban development, agricultural patterns, and water resources. However, raw satellite data is typically stored in large geospatial raster formats that are not directly suitable for machine learning models. In computer vision tasks, these images must be converted into smaller standardized samples before they can be used for training algorithms such as Convolutional Neural Networks (CNNs) or classical machine learning models. The goal of this activity is therefore to build a preprocessing pipeline that acquires satellite imagery, converts it into a manageable format, visualizes its spectral bands, and splits the image into smaller tiles suitable for downstream computer vision tasks.

---

# Solution Overview

The solution implements a preprocessing pipeline that acquires Sentinel-2 satellite imagery using Google Earth Engine and exports the scene as a GeoTIFF file. The raster image is processed in Python where RGB bands are visualized and the large satellite image is divided into 256×256 tiles to generate a dataset suitable for machine learning and computer vision models.


---

# Progress Achieved in This Activity

This activity establishes the foundational stage of a computer vision pipeline for satellite imagery analysis. The following progress has been achieved:

- Acquisition of Sentinel-2 satellite imagery using Google Earth Engine
- Export of the satellite scene as GeoTIFF raster data
- Loading and processing of the satellite image using Python
- Extraction and visualization of RGB spectral bands
- Automated generation of image tiles from the satellite scene
- Creation of a structured dataset suitable for machine learning
- Manual labeling of satellite image tiles into vegetation and non-vegetation classes
- Training of a Random Forest classifier as a baseline machine learning model
- Training of a Convolutional Neural Network (CNN) for image classification
- Evaluation of model performance using prediction visualization and a confusion matrix

A total of **2809 image tiles** were generated from the original satellite image, each with a spatial size of **256 × 256 pixels**.

These results demonstrate that the preprocessing pipeline successfully converts raw satellite imagery into a structured dataset that can be used for training computer vision models for land cover classification.

---

# Methodology and Pipeline

## Satellite Data Acquisition

Satellite imagery used in this project was obtained using **Google Earth Engine**, a cloud-based platform for planetary-scale geospatial analysis. The dataset used in this activity is derived from **Sentinel-2 satellite imagery provided by the European Space Agency (ESA)**.

The Google Earth Engine script used to filter, visualize, and export the satellite imagery can be accessed here:

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
Generate Image Tiles (256 × 256)  
↓  
Inspect and Preview Tiles  
↓  
Manual Labeling of Dataset  
↓  
Train Random Forest Classifier (Baseline Model)  
↓  
Evaluate Model Performance (Accuracy + Confusion Matrix)  
↓  
Visualize Prediction Results  
↓  
Train CNN Model  
↓  
Evaluate CNN Performance  
↓  
Compare Models



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

## Libraries Used

The following Python libraries were used in the implementation of the computer vision pipeline:

- **os** – used for file and directory management.
- **numpy** – used for numerical computations and array manipulation.
- **opencv-python (cv2)** – used for image reading, resizing, and preprocessing.
- **matplotlib** – used for visualization of images, predictions, and training curves.
- **scikit-learn** – used for machine learning models including Random Forest and model evaluation metrics.
- **tensorflow / keras** – used for implementing and training the Convolutional Neural Network (CNN).
- **google.colab** – used for integrating Google Drive storage and executing the notebook environment.

These libraries  were used for data preprocessing, model training, visualization, and evaluation throughout the computer vision workflow.
 

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
├── presentation
│   └── Detecting-and-Modeling-Spatio-Temporal-Environmental-Stress-Patterns
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

- **code/** contains the main Google Colab pipeline used for preprocessing, training, and evaluation.
- **data/raw/** contains the exported GeoTIFF satellite image.
- **data/tiles/** contains the generated image tiles extracted from the satellite image.
- **data/labeled_dataset/** contains manually labeled images used for training.
- **results/** contains visual outputs including model predictions and evaluation results.

Accessed via:

Google Earth Engine  
https://earthengine.google.com/

---

# AI Tool Declaration

ChatGPT (OpenAI) was used as a programming assistant to help explain certain code segments and correct minor syntax or documentation issues. All data processing steps, implementation, and verification of results were completed by the project author.

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
