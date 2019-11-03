// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the commentSchema with the schema object
var commentSchema = new Schema({
  // The article is the article associate with the comment
  _articleId: {
    type: Schema.Types.ObjectId,
    ref: "article"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the commentText
  commentText: String
});

// Create the comment model using the commentSchema
var Comment = mongoose.model("Comment", commentSchema);

// Export the Comment model
module.exports = Comment;
