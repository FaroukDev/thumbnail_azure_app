module.exports = async function (context, myBlob) {
    const imageThumbnail = require('image-thumbnail');
    const fs = require("fs");
    var nodemailer = require('nodemailer');
    require('./.gitignore/node_modules/dotenv/types').config()
    
    
    async function transform(){
        try {
            const my_image = 'resources/img/goku.png'
            const thumbnail = await imageThumbnail(my_image);
            var real_name = my_image.substr(0, my_image.indexOf('.'));
            context.log(real_name)
            const thumbnail_name = real_name + '_thumb.png'
            context.log(thumbnail_name)
            fs.writeFileSync(thumbnail_name, thumbnail);
            send_thumb_mail(my_image,thumbnail)
        } catch (err) {
            console.error(err);
        }
    }
    
    function send_thumb_mail(my_pic, my_thumb){
        var mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'extramilessimplon@gmail.com',
              pass: process.env.GMAIL_PASSWORD
            }
        });
        
        var mailOptions = {
            from: 'extramilessimplon@gmail.com',
            to: 'extramilessimplon@gmail.com',
            subject: 'Thumbs Up !',
            text: "un thumbnail a été rajouté sur azure !",
            attachments: [{   // utf-8 string as an attachment
                filename: 'original.png',
                //content: 'hello world!'
                path: my_pic,
                
            },
            {   // utf-8 string as an attachment
                filename: 'thumbnail.png',
                //content: 'hello world!'
                content: my_thumb,
                
            }
            //{   // binary buffer as an attachment
            //    filename: 'thumbnail',
            //    content: new Buffer('hello world!','utf-8')
            //}
            ]
        };
    
        mail.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    
    }
    
    transform()
        
    };