const express = require('express');
const fileupload = require('express-fileupload')
const fs =  require('fs');
const app = express();
const cors = require('cors');
const { response } = require('express');
app.use(cors());
app.use(fileupload());
app.use(express.json());
app.post('/update',(req,res)=>{
    if(req.body === null){
        return res.status(400).json({msg: "Empty Details"});
    }
    const dirname = `${__dirname}`.split('\\');
dirname.pop();
const updatedir = dirname.join("\\");
console.log(updatedir);
fs.readFile(`${updatedir}/src/data/testimonials.json`, 'utf-8', function(err, data) {
if (err) throw err
console.log(req.body);
var arrayOfObjects = JSON.parse(data);
arrayOfObjects.push(req.body);
// console.log(arrayOfObjects);
fs.writeFileSync(`${updatedir}/src/data/testimonials.json`, JSON.stringify(arrayOfObjects, null, "\t"), 'utf-8', err =>{
    if(err){
        console.error(err);
        return res.status(500).send(err);
    }
    
});
return res.status(200).json({msg: "Testimonial Updated"});
});
});
app.post('/upload',(req, res)=>{
if(req.files === null){
    return res.status(400).json({msg: "No file uploaded"});
}
const file = req.files.file;
const dirname = `${__dirname}`.split('\\');
dirname.pop();
const uploaddir = dirname.join("\\");
console.log(uploaddir);
file.mv(`${uploaddir}/src/assets/images/testimonialImage/${file.name}`, err =>{
    if(err){
        console.error(err);
        return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `../assets/images/testimonialImage/${file.name}`});
});
});
app.listen(5000,function() {
    console.log('Express server listening on port 5000');
});