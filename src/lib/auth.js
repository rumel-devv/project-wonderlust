import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db("wonderlust");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session:{
     expiresIn: 60 * 60 * 24 * 7,
    cookieCache:{
      
      maxAge: 60 ,
      enabled:true ,
      strategy: 'compact',
    }
  },
  plugins:[
    jwt()
  ]
});