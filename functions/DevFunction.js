exports.handler = function(context, event, callback) {
    const result = {
        message : "Function created on dev branch on twilio"
    }

    callback(null, result);
  };
