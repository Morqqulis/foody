import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { HTMLInputTypeAttribute } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";
import { useTranslations } from "next-intl";

interface IFormLabel {
  name: string;
  form: any;
  inputType?: HTMLInputTypeAttribute;
  options?: IOption[];
  whatIs: string;
}
interface IOption {
  name: string;
  id: string;
}

const MyFormLabel: React.FC<IFormLabel> = ({ form, name, inputType, options, whatIs }): JSX.Element => {
  let str: string;
  switch (whatIs) {
    case "EditProduct":
      str = `Products.EditProduct.Sheet`;
      break;
    case "AddProduct":
      str = `Header.Sheet`;
      break;
    case "EditCategory":
      str = `Category.EditCategory.Sheet`;
      break;
    case "AddRestaurant":
      str = `Restaurants.AddRestaurant.Sheet`;
      break;
    case "EditRestaurant":
      str = `Restaurants.EditRestaurant.Sheet`;
      break;
    case "AddOffer":
      str = `Offers.AddOffer.Sheet`;
      break;
    case "EditOffer":
      str = `Offers.EditOffer.Sheet`;
      break;
    default:
      str = `Header.Sheet`;
      break;
  }

  const t = useTranslations(`Admin.${str}`);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex w-[450px] flex-col gap-1 text-[16px] font-medium leading-[24px] text-[#C7C7C7]">
            {t(`InfoBlock.${name}`)}
          </FormLabel>
          <FormControl>
            {name === "description" ? (
              <Textarea
                placeholder={t(`InfoBlock.${name}`)}
                {...field}
                className="h-[110px] w-[450px] resize-none rounded-[14px] border-none  bg-[#5A5B70] p-3 text-[#F2F2F2] placeholder:text-[#C7C7C7] "
              />
            ) : name === "restaurant" || name === "category" ? (
              <Select required onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <SelectTrigger className="h-[46px] w-[450px] appearance-none rounded-[14px] border-none bg-[#5A5B70] p-3 text-[#F2F2F2]">
                  <SelectValue placeholder={t(`InfoBlock.${name}`)} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                type={inputType}
                placeholder={t(`InfoBlock.${name}`)}
                {...field}
                className={`h-[46px] w-[450px] rounded-[14px] border-none bg-[#5A5B70] text-[#F2F2F2] outline-none ring-0 placeholder:text-[#C7C7C7]`}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MyFormLabel;
