import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button
        ref={ref || undefined} 
        className={clsx(
          className,
          'vs-btn relative z-10 flex items-center justify-center overflow-hidden rounded-md border-0 text-center text-xs font-medium uppercase leading-none transition-all duration-500 hover:text-white  md:text-base',
          
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
