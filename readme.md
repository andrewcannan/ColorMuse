# Color Muse
----------------
**Color Muse** is a web application designed to inspire User projects by generating color palettes from uploaded images.

[Mockup image to go here]
<br>
[Link to deployed site to go here]

## Contents

* [User Experience](#user-experience)
    * [User Goals](#user-goals)
    * [Web App Goals](#web-app-goals)
* [Design](#design)
    * [User Stories](#phase-1-mvp---core-functionality)
* [Features](#features)
    * [Home](#home)
    * [File Upload](#file-upload)

## User Experience

### User Goals

* Effortlessly extract color palettes from existing images for use in their design projects.
* Discover new and unexpected color combinations for a fresh User spark.

###  Web App Goals

* Provide a clear and concise User interface for uploading images and managing palettes.
* Utilize image processing algorithms to accurately extract color palettes.
* Clearly display the generated color palettes in a User-friendly format (hex codes, color swatches).
* Ensure responsive design for seamless access across different devices (desktop, mobile, etc.).

## Design

### Phase 1: MVP - Core Functionality

**User Stories:**

| **User STORY #** | **AS A** | **I WANT TO BE ABLE TO...** | **SO THAT I CAN...** |
|---|---|---|---|
| 1 | User | Upload an image from my device. | Effortlessly extract colors from existing visual references. |
| 2 | User | Generate a color palette based on the uploaded image. | Discover new color combinations for my User project. |
| 3 | User | View the generated color palette in a clear format (hex codes, color swatches). | Easily identify and utilize the extracted colors. |
| 4 | User | Copy the color palette codes for use in design software. | Seamlessly integrate the extracted colors into my workflow. |


### **Phase 2: Account Functionality**

**User Stories:**

| **User STORY #** | **AS A** | **I WANT TO BE ABLE TO...** | **SO THAT I CAN...** |
|---|---|---|---|
| 6 | User | Sign up for an account. | Save my generated palettes for future reference. |
| 7 | User | Log in to my account. | Access my saved palettes across different devices. |
| 8 | User | Save a generated palette to my account. | Organize and revisit my color inspiration  for future projects. |
| 9 | User | View and manage my saved palettes within the app in a clear and concise manner. | Easily find and reuse color combinations that resonated with me. |
| 10 | User | Delete saved palettes that are no longer needed. | Declutter my saved collection and maintain a focused workspace. |

## Features

### Home

The Home component serves as the landing page for the Color Muse application, providing users with an introduction to its features and functionality.

* Hero Section: The hero section showcases a captivating image and a brief description of the application's purpose. Users are encouraged to take action with a prominent call-to-action button to get started.

* Feature Highlights: Below the hero section, feature highlights are presented in a card layout. Each card highlights a key feature of the application, such as effortless inspiration, unlocking new creativity, seamless workflow, and responsive design.

### File Upload

The FileUpload component provides users with a simple and intuitive interface for uploading images. It allows users to click on a designated area to select an image file from their device. Once an image is selected, it is displayed within the component.

* Upload Area: Users can click on the upload area to open a file selection dialog and choose an image file for upload.

* Image Display: Upon selecting an image, it is displayed within the component, allowing users to preview their selection.

* Prevent Re-uploading: Once an image is uploaded, clicking on the displayed image will not trigger the file selection dialog again, preventing accidental re-uploading.