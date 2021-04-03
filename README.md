## Create a thumbnail from an uploaded image in Azure

the goal of the project is to reduce the size of the images for our application by uploading an image to azure storage

## working environment

```bash
- node.js
- azure storage and azure function
```
![alt text](https://github.com/FaroukDev/thumbnail_azure_app/blob/main/install.png?raw=true)
## Installation

```python
First we install the dependencies in azure scm the management portal
- node-mailer
- image-thumbnail
```

## functionapp
```
creation of the function thumbnail-resize in appfunction
specifying the input container and the output container
```
![alt text](https://github.com/FaroukDev/thumbnail_azure_app/blob/main/function_thumbnail.png?raw=true)
## storageapp
```bash
we create two container img andthumbnailresize in azure storage
```
## Final result
```
we upload the image in the farouktest container and we have the result in the thumnailresize container
```
![alt text](https://github.com/FaroukDev/thumbnail_azure_app/blob/main/final.png?raw=true)
