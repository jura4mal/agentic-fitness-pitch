import React from "react";

interface SlideProps {
  children: React.ReactNode;
  image: string;
  id?: string;
  className?: string;
}

export function Slide({ 
  children, 
  image, 
  id, 
  className = "" 
}: SlideProps) {
  
  const slideClass = [
    "relative min-h-[90vh]",
    "flex flex-col justify-center items-start",
    "rounded-3xl p-16 mb-24",
    "bg-white/90 backdrop-blur-xl shadow-2xl",
    "border-4 border-green-200/50",
    "hover:shadow-green-500/30 hover:scale-[1.02]",
    "transition-all duration-700",
    "dark:bg-slate-900/90 dark:border-green-800/50",
    className
  ].join(" ");

  return (
    <section id={id} className={slideClass}>
      {/* Фоновая картинка */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(/images/${image})` }}
      />
      
      {/* Контент */}
      <div className="relative z-20 max-w-6xl mx-auto w-full">
        {children}
      </div>
      
      {/* Glow эффект */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-amber-500/5 rounded-3xl blur-xl" />
    </section>
  );
}