const mongoose = require('mongoose');

// Replace 'mydatabase' with your actual database name
const dbURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(dbURI, {
    useNewUrlParser: true, // Optional, but safe to include for backward compatibility
    useUnifiedTopology: true // Optional, but safe to include for backward compatibility
})
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
    });
