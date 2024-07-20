import { GetServerSideProps, NextPage } from "next";

interface IUserProfilePage {
  contact: string;
  username: string;
  fullName: string;
  email: string;
  address: string;
}

const UserProfilePage: NextPage<IUserProfilePage> = ({ contact, username, fullName, email, address }) => {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Profile</h1>
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
          <button className="text-green-500">upload</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-2">Contact</label>
          <input type="text" defaultValue={contact} className="rounded border p-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Email</label>
          <input type="email" defaultValue={email} className="rounded border p-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Username</label>
          <input type="text" defaultValue={username} className="rounded border p-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Address</label>
          <input type="text" defaultValue={address} className="rounded border p-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Full Name</label>
          <input type="text" defaultValue={fullName} className="rounded border p-2" readOnly />
        </div>
      </div>
      <button className="mt-4 rounded bg-green-500 p-2 text-white">Save</button>
    </main>
  );
};

export default UserProfilePage;
