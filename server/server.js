require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const petRouter = require('./Routes/PetRoute');
const AdoptFormRoute = require('./Routes/AdoptFormRoute');
const userRouter = require('./Routes/UserRoute');
const OtpRouter = require('./Routes/OtpRoute');
const requireAuth = require('./Middleware/requireAuth');
const DashboardRouter = require('./Routes/DashboardRoute');
const AdminRouter = require('./Routes/AdminRoute'); // Import AdminRoute

const app = express();

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', OtpRouter);
app.use(userRouter);
app.use('/dashboard', DashboardRouter);
app.use(requireAuth);
app.use(petRouter);
app.use('/form', AdoptFormRoute);
app.use('/admin', AdminRouter); // Use AdminRoute

mongoose.connect(process.env.mongooseURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB');
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });