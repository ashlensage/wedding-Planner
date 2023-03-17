const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/color-themes-page', (req, res) => {
  const queryText = `SELECT * FROM "color_themes";`
pool
  .query(queryText, [])
  .then((results) => res.send(results.rows))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.get('/venues-page', (req, res) => {
  const queryText = `SELECT * FROM "venues";`
pool
  .query(queryText, [])
  .then((results) => res.send(results.rows))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.get('/flowers-page', (req, res) => {
  const queryText = `SELECT * FROM "flowers";`
pool
  .query(queryText, [])
  .then((results) => res.send(results.rows))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.get('/hair-page', (req, res) => {
  const queryText = `SELECT * FROM "hair";`
pool
  .query(queryText, [])
  .then((results) => res.send(results.rows))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.get('/makeup-page', (req, res) => {
  const queryText = `SELECT * FROM "makeup";`
pool
  .query(queryText, [])
  .then((results) => res.send(results.rows))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.get('/wedding-dresses-page', (req, res) => {
  const queryText = `SELECT * FROM "wedding_dresses";`
pool
  .query(queryText, [])
  .then((results) => res.send(results.rows))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.get('/final-page', (req, res) => {
  const user = req.user;
  const queryText = `SELECT * FROM "user_results" WHERE "user_id" = $1;`
pool
  .query(queryText, [user.id])
  .then((results) => res.send(results.rows))
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
