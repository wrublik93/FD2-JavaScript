let americanStates = {
    "AL" : "Alabama",
    "AK" : "Alaska",
    "AS" : "American Samoa",
    "AZ" : "Arizona",
    "AR" : "Arkansas",
    "CA" : "California",
    "CO" : "Colorado",
    "CT" : "Connecticut",
    "DE" : "Delaware"
};

let newValue, newKey, i, result;

function transformObject(obj) {
   newValue = Object.keys(obj);
   newKey = Object.values(obj);
   result = {};
    for (i=0; i<newKey.length; i++) {
        result[newKey[i]]=newValue[i]
    }
    return result
}

console.log(transformObject(americanStates));