import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto px-[20px] sm:px-[30px] md:px-[50px] lg:px-[30px]',
        'w-full',
        'lg:max-w-[1040px]',
        'xl:max-w-[1320px]',
        className,
      )}
      {...props}
    />
  );
}
