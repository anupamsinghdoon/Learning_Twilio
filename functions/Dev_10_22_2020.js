exports.handler = function(context, event, callback) {
    const result = {
        message : "Function created on dev branch on twilio 10/22/2020"
    }

    callback(null, result);
  };
