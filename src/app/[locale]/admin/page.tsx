import DashboardSection from '@sections/Admin/Dashboard/dashboard'
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Admin.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

interface IAdminPage {}

const AdminPage: NextPage = async (): Promise<JSX.Element> => {
  return (
    <main className=" flex gap-[28px] overflow-y-scroll bg-[#1E1E30] p-[1px]">
      <section className="w-full">
        <DashboardSection />
      </section>
    </main>
  );
};

export default AdminPage;
