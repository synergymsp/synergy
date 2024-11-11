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
          'vs-btn relative z-10 flex items-center justify-center overflow-hidden rounded-md border-0 px-7 py-5 text-center text-base font-medium uppercase leading-none transition-all duration-500 hover:text-white',
          className,
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
