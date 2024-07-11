import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://mayonesio:2hDbIp83Zk4BkSsw@cluster0.hxx99ta.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0";
export const PORT = process.env.PORT || 4000;

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
