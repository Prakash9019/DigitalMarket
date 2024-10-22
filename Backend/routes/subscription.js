// routes/subscription.js
const express = require('express');
const router = express.Router();
const { createSubscription, getSubscription, updateSubscription } = require('../controllers/subscriptionController');

router.post('/create', createSubscription);
router.get('/:id', getSubscription);
router.put('/update/:id', updateSubscription);

module.exports = router;
