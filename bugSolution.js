```javascript
//Correct usage of $inc operator. First check if counter is a number and handle non-numeric values appropriately.
db.collection('myCollection').findOne({"_id":ObjectId("someId")}, (err, doc) => {
if (err) {console.error(err); return;} 
if (typeof doc.counter !== 'number'){
  //Handle the case where the counter is not a number (e.g., initialize it or log an error)
  db.collection('myCollection').updateOne({"_id":ObjectId("someId")}, {$set: {counter:1}});
}
else{
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
}
});
```