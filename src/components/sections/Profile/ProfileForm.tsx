"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { IconUpload } from "@icons"
import { collections, databases, dbId } from "@libs/appwrite/config"
import { Button } from "@ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form"
import { Input } from "@ui/input"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { deleteImage, getDocuments, uploadImage } from "../../../utls/functions"
import { readerFile } from "../../helper/helper"

interface IProfileForm {}

const ProfileSchema = z.object({
  avatar: z.any(),
  contacts: z.string({ message: "Please enter your contact" }),
  email: z.string({ message: "Please enter your email" }),
  userName: z.string({ message: "Please enter your username" }),
  fullName: z.string({ message: "Please enter your full name" }),
  address: z.string({ message: "Please enter your address" }),
});

const ProfileForm: React.FC = (): JSX.Element => {
  const [file, setFile] = React.useState<File | null>(null);
  const [fileUrl, setFileUrl] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      avatar: "",
      contacts: "",
      email: "",
      userName: "",
      fullName: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    const userId = localStorage.getItem("userId");
    const user = await getDocuments(collections.userId, userId);
    const userCurrentInfo = JSON.parse(user.userInfo);

    if (file) {
      const url = userCurrentInfo.avatarId;
      url != "" && deleteImage(url);
    }
    const { image, imageId } = await uploadImage(file);

    const updatedInfo = {
      email: values.email || userCurrentInfo.email,
      userInfo: JSON.stringify({
        address: values.address || userCurrentInfo.address,
        avatar: image.href || userCurrentInfo.avatar,
        avatarId: imageId || userCurrentInfo.avatarId,
        contacts: values.contacts || userCurrentInfo.contacts,
        fullName: values.fullName || userCurrentInfo.fullName,
        userName: values.userName || userCurrentInfo.userName,
      }),
    };

    await databases.updateDocument(dbId, collections.userId, userId, updatedInfo);
    const users = await getDocuments(collections.userId, userId);
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
                <Input className={`hidden`} placeholder="Upload" type={"file"} {...field} onChange={(e) => readerFile(e, setFile, setFileUrl)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={`grid h-fit grid-cols-2 gap-12`}>
          <FormField
            name={"contacts"}
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
            name={"userName"}
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
