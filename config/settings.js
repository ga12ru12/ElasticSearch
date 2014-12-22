/**
 * Created by qgs on 11/24/14.
 */
var elasticsearch = require('elasticsearch');
var clientElastic = new elasticsearch.Client({
    host: 'localhost:9200'
    //host: 'https://Ihkl5henvkmLs3GUuzE6wgHb2i0Sm0C0:@ga.east-us.azr.facetflow.io'
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
                "max_gram": 25
            }
        }
    }
};

clientElastic.indices.create({
    index: 'blog1',
    body: {
        settings: settings,
        mapping: {
            "_all" : {
                "enabled" : true,
                "store": "yes",
                "term_vector":"with_positions_offsets"
            },
            'mytype': {
                'properties': {
                    'title': {
                        type: 'string',
                        "term_vector":"with_positions_offsets"
                    },
                    'date' : {
                        type: 'date'
                    },
                    'content': {
                        type: 'string',
                        "term_vector":"with_positions_offsets"
                    }
                }
            }
        }
    }
}, function(err){
    if(err) console.log(err);
    console.log('Settings finished');
});

module.exports = {
    clientElastic: clientElastic
}