import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import Image from "next/image";
import { cn } from "@/lib/utils";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const ImageUpload = ({
  onChange,
  maxSize = 5, // Max size in MB
}: {
  onChange?: (files: File[]) => void;
  maxSize?: number;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateImage = (file: File) => {
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      toast.error("Please upload a JPEG or PNG image only");
      return false;
    }
    if (file.size > maxSize * 1024 * 1024) {
      toast.error(`File size should be less than ${maxSize}MB`);
      return false;
    }
    return true;
  };

  const handleFileChange = (newFiles: File[]) => {
    const newFile = newFiles[0];
    if (!newFile) return;
    if (validateImage(newFile)) {
      setFile(newFile);
      setPreview(URL.createObjectURL(newFile));
      if (onChange) {
        onChange([newFile]);
      }
    } else {
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    accept: { "image/jpeg": [], "image/png": [] },
    onDrop: handleFileChange,
    onDropRejected: (fileRejections) => {
      fileRejections.forEach((rejection) => {
        rejection.errors.forEach((error) => {
          switch (error.code) {
            case "file-invalid-type":
              toast.error("Please upload a JPEG or PNG image only");
              break;
            case "file-too-large":
              toast.error("File is too large");
              break;
            default:
              toast.error("Error uploading file");
          }
        });
      });
    },
  });
  console.log("image upload", file, preview);
  return (
    <div className="h-full w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="group/file relative block h-full w-full cursor-pointer overflow-hidden rounded-xl p-8 border-2 border-dashed border-primary/30 bg-background transition-shadow hover:shadow-lg"
      >
        <input
          ref={fileInputRef}
          id="img-upload-handle"
          type="file"
          accept="image/jpeg,image/png"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
          <GridPattern />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <p className="relative z-20 font-sans text-lg font-semibold text-primary dark:text-primary">
            Profile Image Upload
          </p>
          <p className="relative z-20 mt-2 font-sans text-sm text-muted-foreground">
            Drag & drop or click to select a JPEG/PNG image
          </p>
          <div className="relative mx-auto mt-8 w-full max-w-xs">
            {file || preview ? (
              <motion.div
                layoutId="img-upload"
                className={cn(
                  "relative z-40 mx-auto mt-4 flex w-38 flex-col items-center justify-center overflow-hidden rounded-full bg-white dark:bg-neutral-900 md:h-38 md:w-38 h-38 shadow-md"
                )}
              >
                <Image
                  src={preview || ""}
                  alt="Preview"
                  width={140}
                  height={140}
                  className="rounded-full object-cover h-32 w-32"
                />
              </motion.div>
            ) : (
              <motion.div
                layoutId="img-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative z-40 mx-auto mt-4 flex h-32 w-32 items-center justify-center rounded-full bg-white group-hover/file:shadow-xl dark:bg-neutral-900 border-2 border-primary/20"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-primary"
                  >
                    Drop it
                    <ImageIcon className="size-10 text-primary" />
                  </motion.p>
                ) : (
                  <ImageIcon className="size-10 text-primary/70 dark:text-primary" />
                )}
              </motion.div>
            )}
            {!file && (
              <motion.div
                variants={secondaryVariant}
                className="absolute inset-0 z-30 mx-auto mt-4 flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-primary bg-transparent opacity-0"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex shrink-0 scale-105 flex-wrap items-center justify-center gap-px bg-gray-100 dark:bg-neutral-900">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`flex size-10 shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:bg-neutral-950 dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
