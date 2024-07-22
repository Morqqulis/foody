import { NextPage } from "next"
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "User.Metadata" });
  
    return {
      title: t("title"),
      description: t("description"),
    };
  }

interface IUserPage {}

const UserPage: NextPage = (): JSX.Element => {
  return <main>user</main>;
};

export default UserPage;
