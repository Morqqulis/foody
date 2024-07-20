import { NextPage } from 'next';
import UploadImageSvg from '../../../../../../public/userProfileClient/fileUploadProfile.svg';

interface IUserProfilePage {
  contact: string;
  username: string;
  fullName: string;
  email: string;
  address: string;
}

const UserProfilePage: NextPage<IUserProfilePage> = ({ contact, username, fullName, email, address }) => {
  return (
    <main className="p-6 bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Profile</h1>
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center justify-center rounded-full bg-white p-4">
          <UploadImageSvg className="h-14 w-16" />
          <button className="text-gray-500">upload</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-2 font-bold">Contact</label>
          <input type="text" defaultValue={contact} className="rounded border p-2" readOnly placeholder="+994 77 555 55 55" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold">Email</label>
          <input type="email" defaultValue={email} className="rounded border p-2" readOnly placeholder="kamilovelvin4@gmail.com"  />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold">Username</label>
          <input type="text" defaultValue={username} className="rounded border p-2" readOnly placeholder="elvinkamilov"  />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold">Address</label>
          <input type="text" defaultValue={address} className="rounded border p-2" readOnly placeholder="Khocali 29 Khatai Baku"  />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold">Full Name</label>
          <input type="text" defaultValue={fullName} className="rounded border p-2" readOnly placeholder="Kamilov Elvin" />
        </div>
        <div className="flex flex-col">
          <button className="mt-8 rounded bg-green-500 p-2 text-white">Save</button>
        </div>
      </div>
    </main>
  );
};

export default UserProfilePage;
