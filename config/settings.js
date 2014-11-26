/**
 * Created by qgs on 11/24/14.
 */
var elasticsearch = require('elasticsearch');
var clientElastic = new elasticsearch.Client({
    //host: 'localhost:9200',
    //log: 'trace'
    host: 'https://Ihkl5henvkmLs3GUuzE6wgHb2i0Sm0C0:@ga.east-us.azr.facetflow.io'
});

var settings = {
    "analysis": {
        "analyzer": {
            "nGram_analyzer": {
                "alias": "default_index",
                "tokenizer": "nGram_tokenizer",
                "filter": [
                    "lowercase",
                    "asciifolding"
                ]
            }
        },
        "tokenizer": {
            "nGram_tokenizer": {
                "type": "nGram",
                "min_gram": 1,
                "max_gram": 25,
                "token_chars": [ "letter", "digit" ]
            }
        }
    }
};

clientElastic.indices.create({
    index: 'my_index3',
    body: {
        settings: settings
    }
}, function(err){
    if(err) console.log(err);
    console.log('Settings finished');
});

//clientElastic.indices.putSettings(settings, function(err){
//    if(err) console.log(err);
//    console.log('Settings finished');
//});

module.exports = {
    clientElastic: clientElastic
}