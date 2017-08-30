module.exports.users = {
  show: function(event, context, callback) {
    var response = {
      message: "Your Serverless function ran successfully!"
    };
    return cb(null, response);
  }
}
