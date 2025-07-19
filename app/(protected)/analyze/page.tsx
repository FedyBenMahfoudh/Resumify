"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
// import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Info, Loader } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileUpload } from "@/components/ui/file-upload";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// Define the form schema
const formSchema = z.object({
  jobTitle: z.string().min(4, "Job title is required"),
  jobDescription: z.string().min(4, "Job description is required"),
  targetCompany: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AnalyzePage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      jobDescription: "",
      targetCompany: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsProcessing(true);
    setStatusText("Analyzing your resume...");
    console.log("Form submitted with values:", values);
  };

  function handleFileUpload(files: File[]): void {
    if (!files || files.length === 0) return;
    setIsProcessing(true);
    setStatusText("Uploading resume...");
    // Example: just log the file name(s)
    files.forEach((file) => {
      console.log("Uploaded file:", file.name);
    });
    setIsProcessing(false);
    setStatusText("");
  }

  return (
    <>
      <DashboardHeader
        heading="Analyze Your Resume"
        text="Get insights and suggestions to improve your resume."
        image="/images/resume-scan.gif"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="font-sans space-y-6"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Column - Main Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Frontend Developer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="targetCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Company Name{" "}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="inline size-3.5 cursor-help text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="w-44 text-xs">
                              We&apos;ll try to tailor questions to the company
                              if data is available.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Google, Meta, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  {/* <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Seniority Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select seniority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="JUNIOR">Junior</SelectItem>
                          <SelectItem value="MID_LEVEL">Mid Level</SelectItem>
                          <SelectItem value="SENIOR">Senior</SelectItem>
                          <SelectItem value="LEAD">Lead</SelectItem>
                          <SelectItem value="PRINCIPAL">Principal</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                  {/* <FormField
                  control={form.control}
                  name="yearsOfExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Required Experience</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0_1">0-1 year</SelectItem>
                          <SelectItem value="1_3">1-3 years</SelectItem>
                          <SelectItem value="3_5">3-5 years</SelectItem>
                          <SelectItem value="5_7">5-7 years</SelectItem>
                          <SelectItem value="7_plus">7+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                </div>

                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter the job description here..."
                          className="min-h-[170px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>

            {/* Right Column - Resume Upload */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Upload Resume</Label>
              </div>
              <div className="group mt-[0.65em] h-[20em] rounded-md border border-dashed lg:h-[calc(100%-2rem)]">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button
              type="submit"
              className="w-full transition-all duration-200 hover:scale-[1.01]"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <Loader className="size-4 animate-spin" />
                  <span>Analyzing Resume...</span>
                </div>
              ) : (
                "Analyze Resume"
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </>
  );
};

export default AnalyzePage;
