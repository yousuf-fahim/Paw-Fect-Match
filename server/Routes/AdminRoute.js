// filepath: /c:/Users/admin/OneDrive/Documents/Paw-Fect-Match/server/Routes/AdminRoute.js
const express = require('express');
const router = express.Router();
const requireAdminAuth = require('../Middleware/requireAdminAuth');

router.use(requireAdminAuth);

router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

module.exports = router;