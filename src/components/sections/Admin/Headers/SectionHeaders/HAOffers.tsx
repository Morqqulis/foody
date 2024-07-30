import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import ResusableSheet from "@sections/Admin/Sheet/ReusableSheet";

interface IHAOffers {}

const HAOffers: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Offers");

  return (
    
    <ResusableSheet
      whatIs="AddOffer"
      trigger={
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded bg-pink-500 p-5 text-white">
          <Plus /> {t("addOffer")}
        </div>
      }
    />
  );
};

export default HAOffers;
