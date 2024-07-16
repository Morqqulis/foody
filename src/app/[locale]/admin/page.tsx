import { NextPage } from "next";

interface IAdminPage {}

const AdminPage: NextPage = async (): Promise<JSX.Element> => {
  return <main>Admin</main>;
};

export default AdminPage;
