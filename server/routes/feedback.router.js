const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newResult = req.body;
    console.log(`Adding feedback`, newResult);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newResult.feelingReducer, newResult.understandingReducer, newResult.supportReducer, newResult.commentsReducer])
        .then(result => {
            console.log('req.body is:', result);
            res.sendStatus(201);
        })
        .catch(e => {
            console.log(`Error adding new result`, e);
            res.sendStatus(500);
        });
});

module.exports = router;