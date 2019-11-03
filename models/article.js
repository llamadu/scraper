
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the articleSchema with our schema class
var articleSchema = new Schema({
  // article, a string, must be entered
  article: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the article model using the articleSchema
var article = mongoose.model("article", articleSchema);

// Export the article model
module.exports = article;
