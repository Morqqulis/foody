import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";


const DeleteModal: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Products.Modal");

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2 size={20} color="red" className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("text")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancelBtn")}</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600">{t("deleteBtn")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
