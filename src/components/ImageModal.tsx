import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export const ImageModal = ({
  children,
  className,
  src,
}: {
  children: React.ReactNode;
  className?: string;
  src?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent className="flex bg-transparent border-none max-h-[80vh] justify-center items-center">
        {children}
      </DialogContent>
    </Dialog>
  );
};
