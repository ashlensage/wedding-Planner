const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM `
pool
  .query(queryText, [])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const queryText = `SELECT * FROM `
pool
  .query(queryText, [])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.put('/', (req, res) => {
  const queryText = `SELECT * FROM `
pool
  .query(queryText, [])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.delete('/', (req, res) => {
  const queryText = `SELECT * FROM `
pool
  .query(queryText, [])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

module.exports = router;
