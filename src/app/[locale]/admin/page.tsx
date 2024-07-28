import DashboardSection from "@sections/Admin/Dashboard/dashboard";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";
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
    <main className=" flex basis-[calc(100%-256px)] gap-[28px] bg-[#1E1E30]">
      <section className="w-full">
        <DashboardSection />
      </section>
    </main>
  );
};

export default AdminPage;
