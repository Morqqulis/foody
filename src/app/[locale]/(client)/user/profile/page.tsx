import { IconUpload } from "@icons";
import ProfileSection from "@sections/Profile/ProfileSection";
import { NextPage } from "next";

interface IUserProfilePage {
  contact: string;
  username: string;
  fullName: string;
  email: string;
  address: string;
}

const UserProfilePage: NextPage<IUserProfilePage> = ({ contact, username, fullName, email, address }) => {
  return (
    <main className="">
      <ProfileSection />



      {/* <div className="mb-6 flex flex-col items-center">
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white p-4">
          <IconUpload />

          <button className="text-gray-500">upload</button>
        </div>
      </div>
      <div className="-mx-2 flex flex-wrap">
        <div className="mb-4 flex w-full flex-col px-2 md:w-1/2">
          <label className="mb-2 font-bold">Contact</label>
          <input type="text" defaultValue={contact} className="rounded border p-2 text-black" placeholder="+994 77 555 55 55" />
        </div>
        <div className="mb-4 flex w-full flex-col px-2 md:w-1/2">
          <label className="mb-2 font-bold">Email</label>
          <input type="email" defaultValue={email} className="rounded border p-2 text-black" placeholder="kamilovelvin4@gmail.com" />
        </div>
        <div className="mb-4 flex w-full flex-col px-2 md:w-1/2">
          <label className="mb-2 font-bold">Username</label>
          <input type="text" defaultValue={username} className="rounded border p-2 text-black" placeholder="elvinkamilov" />
        </div>
        <div className="mb-4 flex w-full flex-col px-2 md:w-1/2">
          <label className="mb-2 font-bold">Address</label>
          <input type="text" defaultValue={address} className="rounded border p-2 text-black" placeholder="Khocali 29 Khatai Baku" />
        </div>
        <div className="mb-4 flex w-full flex-col px-2 md:w-1/2">
          <label className="mb-2 font-bold">Full Name</label>
          <input type="text" defaultValue={fullName} className="rounded border p-2 text-black" placeholder="Kamilov Elvin" />
        </div>
        <div className="mt-8 flex w-full flex-col px-2 md:w-1/2">
          <button className="rounded bg-green-500 p-2 text-white">Save</button>
        </div>
      </div> */}
    </main>
  );
};

export default UserProfilePage;
