// test-db.js
const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  try {
    console.log('🔗 Attempting to connect to MongoDB Atlas...');
    console.log('Connection string:', process.env.MONGODB_URI ? 'Found' : 'Missing');
    
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI is not defined in .env file');
      return;
    }
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Successfully connected to MongoDB Atlas!');
    
    // Check database name
    console.log('📊 Database name:', mongoose.connection.db.databaseName);
    
    // List collections (might be empty initially)
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📁 Collections:', collections.map(c => c.name));
    
    await mongoose.connection.close();
    console.log('✅ Connection test completed!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('💡 Troubleshooting tips:');
    console.log('1. Check your .env file exists and has MONGODB_URI');
    console.log('2. Verify MongoDB Atlas network access settings');
    console.log('3. Check your username and password in the connection string');
    console.log('4. Make sure your IP is allowed in Network Access');
  }
};

testConnection();