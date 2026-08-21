import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    // Base interactive styles with smooth transitions and active click scaling
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    // Variants matching the school theme defined in globals.css
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-emerald-900/90 shadow-sm",
      secondary: "bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-sm",
      accent: "bg-brand-accent text-brand-dark hover:bg-amber-500 shadow-sm font-bold",
      outline: "border border-gray-300 bg-transparent text-brand-dark hover:bg-brand-light",
      ghost: "bg-transparent text-brand-dark hover:bg-brand-light",
    };

    // Responsive padding and typography sizes
    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
    };

    // Combine tailwind classes dynamically
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
