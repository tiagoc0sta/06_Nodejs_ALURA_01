import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://tiagoc0sta:123@cluster0.vzic7ew.mongodb.net/alura-node?'
);

let db = mongoose.connection;

export default db;
