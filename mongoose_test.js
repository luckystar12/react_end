var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_test');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title:  String,
});
var Blog = mongoose.model('Blog', blogSchema);
var blog = new Blog({title:'xxx'});
blog.save();