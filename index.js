module.exports = async function(context, myBlob) {
    context.log("function called")
    
    const imgThumbnail = require('image-thumbnail');
     
    const new_img = await imgThumbnail(myBlob);
    
    context.bindings.outputBlob = new_img;
    context.log("outputBlob", context.bindings.outputBlob);
    
}