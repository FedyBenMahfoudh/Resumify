/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Delete } from "lucide-react";

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
} from "@/components/ui/alert-dialog";
import { Icons } from "@/components/shared/icons";
import { ImageUpload } from "@/components/ui/img-upload";

export default function ProfilePage() {
  const userPaidPlan = true;
  const [email] = useState("user@example.com");
  const [username, setUsername] = useState("John Doe");
  //   const [editing, setEditing] = useState(false);
  const [loading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (files: File[]) => {
    setFile(files && files.length > 0 ? files[0] : null);
  };

  //   const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setUsername(e.target.value);
  //   };

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files[0]) {
  //       const file = e.target.files[0];
  //       setProfileImg(URL.createObjectURL(file));
  //       // You should also upload the file to your server here
  //     }
  //   };

  const handleDeleteAccount = () => {
    alert("Account deleted!");
  };

  return (
    <>
      <DashboardHeader text="Manage Your Profile" heading="Profile Settings" />
      <div className="font-sans grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Profile Image */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="profile-image" className="font-medium text-sm">
            Profile Image
          </label>
          <ImageUpload onChange={handleFileSelect} />
          <Button variant="outline">Save Image</Button>
        </div>
        {/* Right Column - Main Information */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Username */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="username" className="font-medium text-sm">
                Username
              </label>
              <div className="flex w-full items-center gap-2">
                <Input
                  id="name"
                  type="text"
                  className="flex-1"
                  size={32}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <Button
                  type="submit"
                  variant={loading ? "default" : "outline"}
                  disabled={username.length === 0 || loading}
                  className="w-[67px] shrink-0 px-0 sm:w-[130px]"
                >
                  {loading ? (
                    <Icons.spinner className="size-4 animate-spin" />
                  ) : (
                    <p>
                      Save
                      <span className="hidden sm:inline-flex">
                        &nbsp;Changes
                      </span>
                    </p>
                  )}
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium text-sm">
                Email Address
              </label>
              <Input
                id="email"
                placeholder="e.g. john@example.com"
                value={email}
                disabled
              />
            </div>

            {/* Danger Zone */}
            <div className="flex flex-col gap-4 rounded-xl border border-red-400 p-4 dark:border-red-900">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium">
                    Are you sure ?
                  </span>
                  {userPaidPlan ? (
                    <div className="flex items-center gap-1 rounded-md bg-red-600/10 p-1 pr-2 text-xs font-medium text-red-600 dark:bg-red-500/10 dark:text-red-500">
                      <div className="m-0.5 rounded-full bg-red-600 p-[3px]">
                        <Delete size={10} className="text-background" />
                      </div>
                      Active Subscription
                    </div>
                  ) : null}
                </div>
                <div className="text-balance text-sm text-muted-foreground">
                  Permanently delete your account
                  {userPaidPlan ? " and your subscription" : ""}. This action
                  cannot be undone - please proceed with caution.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <Icons.trash className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="font-sans">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove all your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteAccount}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete Account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
