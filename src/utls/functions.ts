import { avatarId, collections, databases, dbId, ID, storage } from "@libs/appwrite/config";

import axios from "axios";

interface IMultiFn {
  (method: "get" | "post" | "put" | "delete", api: string, data?: any, token?: string): any | void;
}

export const multiFn: IMultiFn = async (method, api, data, token) => {
  let response: any;
  if (token) {
    response = await axios({
      method,
      url: `${api}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    response = await axios({
      method,
      url: `${api}`,
      data,
    });
  }
  console.log(await response.data);
  return await response.data;
};

export const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(avatarId, ID.unique(), file);
  // @ts-ignore

  const image = storage.getFilePreview(avatarId, fileUploaded.$id, 200, 200);

  const imageId = fileUploaded.$id;

  return { image, imageId };
};

export const deleteImage = async (id: string) => {
  if (!id) return;
  await storage.deleteFile(avatarId, id);
};

export const addDocuments = async (collectionsId: string, v: any, file: File) => {
  const fileUrl = await uploadImage(file);
  const aa = await databases.createDocument(dbId, collectionsId, ID.unique(), { ...v, ...fileUrl });
  return aa;
};

export const addUsers = async (id: string, v: any) => {
  const aa = await databases.createDocument(dbId, collections.userId, id, v);
  return aa;
};

export const editDocuments = async (collectionsId: string, v?: any, file?: File, id?: string) => {
  const { imageId } = await databases.getDocument(dbId, collectionsId, id);

  if (file) imageId && (await deleteImage(imageId));
  const fileUrl = await uploadImage(file);
  databases.updateDocument(dbId, collectionsId, id, { ...v, ...fileUrl });
};

export const getListDocuments = async (collectionsId: string) => {
  const list = await databases.listDocuments(dbId, collectionsId);
  return list;
};

export const getDocuments = async (collectionsId: string, docId: string) => {
  const document = await databases.getDocument(dbId, collectionsId, docId);
  return document;
};

export const deleteDocument = async (collectionsId: string, deletedId: string) => {
  await databases.deleteDocument(dbId, collectionsId, deletedId);
};

export const checkUser = async (email: string, password?: string) => {

  const users:any = await databases.listDocuments(dbId, collections.userId);
  
  const isExist = users.documents.some( async (user: any) => JSON.parse(await user.info).email === email);

  let $id: any;
  // if (isExist) {
  //   $id = users.documents.find((user: any) => user.password === password && user.email === email).$id;
  // }

  return { isExist, $id };
};
