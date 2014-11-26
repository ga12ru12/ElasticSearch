var express = require('express');
var router = express.Router();
var clientSearch = require('../config/settings').clientElastic;

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;

setTimeout(function () {
    console.log('-------------------Start---------------------');
    //clientSearch.index({
    //    index: 'my_index3',
    //    type: 'mytype',
    //    body: {
    //        title: 'my titile',
    //        tags: ['gà', 'rù', 'gà ri'],
    //        content: 'đây là cái content'
    //    }
    //},function(err){
    //    console.log('-----Index Xong------');
    //    if(err){
    //        console.log(err);
    //    }else{
    //        clientSearch.search({
    //            index: 'my_index3',
    //            body: {
    //                query: {
    //                    match: {
    //                        tags: 'ga'
    //                    }
    //                }
    //            }
    //
    //        }, function(err, response){
    //            if(err){
    //                console.log(err);
    //            }else{
    //                console.log(JSON.stringify(response));
    //            }
    //            console.log('-----------XONG-----------')
    //        });
    //    }
    //});
    //Search multi field
    //clientSearch.search({
    //    index: 'my_index3',
    //    body: {
    //        query: {
    //            "multi_match" : {
    //                "query":    "cai",
    //                "fields": [ "tags", "content" ]
    //            }
    //        }
    //    }
    //}, function(err, response){
    //    if(err){
    //        console.log(err);
    //    }else{
    //        console.log(JSON.stringify(response));
    //    }
    //    console.log('-----------XONG-----------')
    //});
    clientSearch.search({
        index: 'my_index3',
        body: {
            query: {
                "bool": {
                    "should": [
                        { "match": { "tags": "ga that" }},
                        { "match": { "content": "content123" }}
                    ]
                }

            }
        }
    }, function(err, response){
        if(err){
            console.log(err);
        }else{
            console.log(JSON.stringify(response));
        }
        console.log('-----------XONG-----------')
    });
}, 4000);