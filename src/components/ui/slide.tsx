import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  image: string;
  id?: string;  // ✅ Добавили optional id
  className?: string;
}

export function Slide({ children, image, id, className }: SlideProps) {
  return (
    <section 
      id={id}  // ✅ Теперь работает
      className={cn(/* ... */)}
    >
      {/* остальной код */}
    </section>
  );
}