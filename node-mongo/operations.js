const assert = require ('assert');

exports.insertDocument =(db,document,collection,callback) =>{
    const coll = db.collection(collection);
    coll.insert(document,(err,result)=>
  {
    assert.equal(err,null);
      console.log("inserted"+result.result.n+"document inserted"+collection);
      callback(result);

  });

};

exports.findDocuments = (db,collection,callback) =>{
  const coll = db.collection(collection);
   coll.find({}).toArray((err,result)=>
 {
   assert.equal(err,null);
   callback(docs);

 })
};

exports.removeDocument =(db,document,collection,callback) =>{
  const coll = db.collection(collection);
  coll.insertOne(doucument,(err,result)=>{
    assert.equal(err,null);
    console.log("document is deleted",collection);
  });

};

exports.updateDocument =(db,document,collection,callback) =>{
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => {
       assert.equal(err, null);
       console.log("Updated the document with ", update);
       callback(result);        
  });
};
