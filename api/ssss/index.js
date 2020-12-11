//const express = require('express');
//const cors = require('cors');
//const monk = require('monk');
//const Filter = require('bad-words');
//const rateLimit = require('express-rate-limit');
//
//const app = express();
//
////const db = monk(process.env.MONGO_URI || 'localhost/meower');
const db = monk('mongodb+srv://littlemonastar:sophie339@littlemonacluster.g4guu.mongodb.net/LittleMonaCluster?retryWrites=true&w=majority');
const ssss = db.get('ssss');
//const filter = new Filter();
//
//app.enable('trust proxy');
//
//app.use(cors());
//app.use(express.json());
//
//app.get('/', (req, res) => {
//  res.json({
//    message: 'SSSS~🐍'
//  });
//});
//
//app.get('/ssss', (req, res, next) => {
//  ssss
//    .find()
//    .then(ssss => {
//      res.json(ssss);
//    }).catch(next);
//});
//
//app.get('/v2/ssss', (req, res, next) => {
//  // let skip = Number(req.query.skip) || 0;
//  // let limit = Number(req.query.limit) || 10;
//  let { skip = 0, limit = 5, sort = 'desc' } = req.query;
//  skip = parseInt(skip) || 0;
//  limit = parseInt(limit) || 5;
//
//  skip = skip < 0 ? 0 : skip;
//  limit = Math.min(50, Math.max(1, limit));
//
//  Promise.all([
//    ssss
//      .count(),
//    ssss
//      .find({}, {
//        skip,
//        limit,
//        sort: {
//          created: sort === 'desc' ? -1 : 1
//        }
//      })
//  ])
//    .then(([ total, ssss ]) => {
//      res.json({
//        ssss,
//        meta: {
//          total,
//          skip,
//          limit,
//          has_more: total - (skip + limit) > 0,
//        }
//      });
//    }).catch(next);
//});
//
//function isValidsss(sss) {
//  return sss.name && sss.name.toString().trim() !== '' && sss.name.toString().trim().length <= 50 &&
//    sss.content && sss.content.toString().trim() !== '' && sss.content.toString().trim().length <= 400;
//}
//
//app.use(rateLimit({
//  //windowMs: 30 * 1000, // 30 seconds
//  windowMs: 1 * 1000, // 1 seconds
//  max: 1
//}));
//
//const createsss = (req, res, next) => {
//  console.log(req.body);
//  if (isValidsss(req.body)) {
//    const sss = {
//      name: filter.clean(req.body.name.toString().trim()),
//      content: filter.clean(req.body.content.toString().trim()),
//      created: new Date()
//    };
//
//    ssss
//      .insert(sss)
//      .then(createdsss => {
//        res.json(createdsss);
//      }).catch(next);
//  } else {
//    res.status(422);
//    res.json({
//      message: 'Hey! Name and Comment are required! Name cannot be longer than 50 characters. Comment cannot be longer than 400 characters.'
//    });
//  }
//};
//
//app.post('/ssss', createsss);
//app.post('/v2/ssss', createsss);
//
//app.use((error, req, res, next) => {
//  res.status(500);
//  res.json({
//    message: error.message
//  });
//});
//
//app.listen(5000, () => {
//  console.log('Listening on http://localhost:5000');
//});
//module.exports = app

module.exports = (req, res, next) => {
  ssss
    .find()
    .then(ssss => {
      res.json(ssss);
    }).catch(next);
};
