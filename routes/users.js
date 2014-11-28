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
//    clientSearch.index({
//        index: 'blog4',
//        type: 'mytype',
//        body: {
//            title: '123',
//            tags: ['gà', 'rù', 'gà ri'],
//            content: "đây là cái content 1234 14576",
//            date: new Date('2014-10-20')
//        }
//    },function(err){
//        console.log('-----Index Xong------');
//        if(err){
//            console.log(err);
//        }else{
//            clientSearch.search({
//                index: 'blog4'
//
//            }, function(err, response){
//                if(err){
//                    console.log(err);
//                }else{
//                    console.log(JSON.stringify(response));
//                }
//                console.log('-----------XONG-----------')
//            });
//        }
//    });

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

    //Search hightLight
//    clientSearch.search({
//        index: 'my_index3',
//        body: {
//            query: {
//                "bool": {
//                    "should": [
//                        { "match": { "tags": "ga that" }},
//                        { "match": { "content": "content123" }}
//                    ]
//                }
//
//            },
//            "highlight" : {
//                "fields" : {
//                    "tags" : {}
//                }
//            }
//        }
//    }, function(err, response){
//        if(err){
//            console.log(err);
//        }else{
//            console.log(JSON.stringify(response));
//        }
//        console.log('-----------XONG-----------')
//    });

    //Search date
//    clientSearch.search({
//        index: 'blog4',
//        body: {
//            query: {
//                "range": {
//                    "date": {
//                        "lt": "2014-01-01"
//                    }
//                }
//            }
//        }
//
//    }, function(err, response){
//        if(err){
//            console.log(err);
//        }else{
//            console.log(JSON.stringify(response));
//        }
//        console.log('-----------XONG-----------')
//    });
    clientSearch.search({
        index: 'blog4',
        body: {
            query: {
                "bool": {
                    "must": [
                        { "match": { "content": "12" }},
                        {
                            "range": {
                                "date": {
                                    "gt": "2014-01-01"
                                }
                            }
                        }
                    ]
                }

            },
            "highlight" : {
                "fields" : {
                    "tags" : {}
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