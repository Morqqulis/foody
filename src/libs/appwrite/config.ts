import { Account, Client, Databases, ID } from "appwrite";

//=============================================
const db = `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`;
const endpoint = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`;
const collection = `${process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID}`;
const apikey = `${process.env.NEXT_APPWRITE_API_KEY}`;
const projectId = `${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
//=============================================

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

//=============================================

client.setEndpoint(endpoint).setProject(projectId);
//=============================================

export { client, account, databases, db, collection, apikey, projectId, endpoint, ID };
