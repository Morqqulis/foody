import { Account, Client, Databases, ID, Storage } from "appwrite";

//=============================================
const dbId = `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`;
const endpoint = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`;
const collectionId = `${process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID}`;
const apikey = `${process.env.NEXT_APPWRITE_API_KEY}`;
const projectId = `${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
const avatarId = `${process.env.NEXT_PUBLIC_APPWRITE_AVATAR_ID}`;

//=============================================

const client = new Client().setEndpoint(endpoint).setProject(projectId);
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

//=============================================

//=============================================

export { account, apikey, client, collectionId, databases, dbId, endpoint, storage, avatarId, ID, projectId };
