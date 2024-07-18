import { NextPage } from "next";
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "Admin.Metadata" });
  
    return {
      title: t("title"),
      description: t("description"),
    };
  }


interface IAdminPage {}

const AdminPage: NextPage = async (): Promise<JSX.Element> => {
  return <main>Admin</main>;
};

export default AdminPage;
