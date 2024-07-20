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
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <button className="text-green-500">upload</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-2">Contact</label>
          <input
            type="text"
            defaultValue={contact}
            className="border p-2 rounded"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Email</label>
          <input
            type="email"
            defaultValue={email}
            className="border p-2 rounded"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Username</label>
          <input
            type="text"
            defaultValue={username}
            className="border p-2 rounded"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Address</label>
          <input
            type="text"
            defaultValue={address}
            className="border p-2 rounded"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Full Name</label>
          <input
            type="text"
            defaultValue={fullName}
            className="border p-2 rounded"
            readOnly
          />
        </div>
      </div>
      <button className="bg-green-500 text-white p-2 rounded mt-4">
        Save
      </button>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<IUserProfilePage> = async () => {
  const profile = {
    contact: "+994 557777777",
    username: "kamilovelvin",
    fullName: "Kamilov Elvin",
    email: "kamilovelvincode27developer@gmail.com",
    address: "Khocali 29 Khatai Baku"
  };

  return {
    props: profile
  };
};

export default UserProfilePage;
