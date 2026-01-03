import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'soft' | 'ghost';
type Size = 'md' | 'lg';

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 via-brand-500 to-brand-600 text-white shadow-soft hover:shadow-card hover:-translate-y-[1px] active:translate-y-0 active:shadow-soft disabled:opacity-60',
  secondary:
    'border border-brand-200 text-brand-700 bg-white hover:bg-brand-50 hover:border-brand-300 active:bg-brand-100 active:border-brand-200',
  soft:
    'bg-brand-50 text-brand-700 hover:bg-brand-100 hover:shadow-soft active:bg-brand-200 active:text-brand-800',
  ghost:
    'text-slate-700 hover:bg-slate-100 active:bg-slate-200',
};

const sizeStyles: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-semibold transition duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
