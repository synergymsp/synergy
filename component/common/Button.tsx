import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, ...props }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button
        ref={ref || undefined}
        className={clsx(
          className,
          'relative z-10 flex items-center justify-center overflow-hidden rounded-md border-0 text-center text-xs font-medium uppercase leading-none transition-all duration-500 hover:bg-black hover:text-white md:text-base',
          {
            'opacity-50 cursor-not-allowed hover:bg-smoke hover:text-title': disabled,
          }
        )}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
