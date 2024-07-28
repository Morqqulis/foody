"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconUpload } from "@icons";
import { Button } from "@ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { Input } from "@ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface IProfileForm {}

const ProfileSchema = z.object({
  avatar: z
    .any(),
    // .refine((files) => {
    //   return files?.[0]?.size <= 1024 * 1024 * 5;
    // }, `Max image size is 5MB.`)
    // .refine(
    //   (files) => ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(files?.[0]?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported.",
    // ),
  contact: z.string({ message: "Please enter your contact" }),
  email: z.string({ message: "Please enter your email" }),
  username: z.string({ message: "Please enter your username" }),
  fullName: z.string({ message: "Please enter your full name" }),
  address: z.string({ message: "Please enter your address" }),
});

const ProfileForm: React.FC = (): JSX.Element => {
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      avatar: "",
    },
  });

  function onSubmit(values: z.infer<typeof ProfileSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className={`flex w-full flex-col`} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem className={`mb-9 flex w-full items-center justify-center`}>
              <FormLabel
                className={`flex h-[145px] w-[145px] flex-col items-center justify-center gap-4 rounded-full bg-white text-center duration-300 hover:cursor-pointer hover:bg-gray-2`}
              >
                <IconUpload />
                <span>Upload</span>
              </FormLabel>
              <FormControl>
                <Input className={`hidden`} placeholder="Upload" type={"file"} {...field} />
              </FormControl>
              {/* <FormDescription>This is your avatar image.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={`grid h-fit grid-cols-2 gap-12`}>
          <FormField
            name={"contact"}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold text-gray-2`}>Contact</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder="+994"
                    type={"tel"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={"email"}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>Email</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder="rahimlisarkhan@gmail.com"
                    {...field}
                    type={"email"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={"username"}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>username</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder="rahimlisarkhan"
                    {...field}
                    type={"text"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={"address"}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>address</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px]  placeholder:text-lg placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder="Ataturk 45 Ganclik Baku"
                    type={"text"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={"fullName"}
            control={form.control}
            render={({ field }) => (
              <FormItem className={`flex flex-col gap-1`}>
                <FormLabel className={`font-semibold capitalize text-gray-2`}>full Name</FormLabel>
                <FormControl className={``}>
                  <Input
                    className={`px-5 py-[25px] placeholder:text-lg placeholder:text-foreground placeholder:duration-300 focus-visible:ring-mainRed focus-visible:placeholder:text-opacity-0`}
                    placeholder="Sarkhan Rahimli"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={`self-end bg-[#6FCF97] py-[25px] text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-mainRed`}
            variant={"ghost"}
            type="submit"
          >
            Save
          </Button>
        </div>
        {/* <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
      </form>
    </Form>
  );
};

export default ProfileForm;
