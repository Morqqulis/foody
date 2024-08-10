"use client";
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
import { deleteDocument } from "../../../../utls/functions";
interface IProps {
  collectionId: string;
  deletedId: string;
}

const DeleteModal: React.FC<IProps> = ({ collectionId, deletedId }): JSX.Element => {
  const t = useTranslations("Admin.Products.Modal");

  const deleting = async () => {
    await deleteDocument(collectionId, deletedId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={`hover:scale-110`}>
        <Trash2 size={24} color="red" className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent className="mmd:w-[90%] rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("text")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancelBtn")}</AlertDialogCancel>
          <AlertDialogAction onClick={deleting} className="bg-red-600">
            {t("deleteBtn")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
