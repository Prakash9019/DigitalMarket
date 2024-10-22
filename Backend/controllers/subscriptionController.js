// controllers/subscriptionController.js
const axios = require('axios');
const Subscription = require('../models/Subscription');


exports.createSubscription = async (req, res) => {
  const { userId, plan } = req.body;

  try {
    const response = await axios.post('https://api.lemonsqueezy.com/v1/subscriptions', {
      plan_id: plan,
      customer: {
        id: userId
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const newSubscription = new Subscription({
      userId,
      plan,
      status: 'active'
    });

    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    const subscription = await Subscription.findById(id);

    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    res.json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSubscription = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const subscription = await Subscription.findByIdAndUpdate(id, { status }, { new: true });

    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    res.json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
