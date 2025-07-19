import Image from "next/image";

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  image?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  image,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-between w-full items-center gap-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-gradient text-4xl font-semibold">{heading}</h1>
          {text && (
            <p className="font-sans text-xl text-muted-foreground">{text}</p>
          )}
        </div>
        {image && <Image src={image} alt={heading} width={180} height={180} />}
      </div>

      {children}
    </div>
  );
}
