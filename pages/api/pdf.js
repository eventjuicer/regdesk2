// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

  // require dependencies
const PDFDocument = require('pdfkit');
const FileSystem = require('fs')

export default function handler(req, res) {

  console.log(req)
  const {src} = req.query;

// create a document the same way as above
const doc = new PDFDocument({
  size: [60 * 2.835, 100 * 2.835],
  margin: 10
});
doc.text(src);

// pipe the document to a blob
doc.pipe(res);

// add your content to the document here, as usual

// get a blob when you are done
doc.end();


  
}
