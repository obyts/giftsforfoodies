import Link from 'next/link';
import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

type ButtonAsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: never };
type ButtonAsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary: 'bg-cozy-orange text-white hover:bg-cozy-orange-dark border-transparent',
  secondary: 'bg-cozy-gray-700 text-white hover:bg-cozy-navy border-transparent',
  outline: 'bg-transparent text-cozy-orange border-2 border-cozy-orange hover:bg-cozy-orange hover:text-white',
};

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cozy-orange focus:ring-offset-2';
  const combined = `${base} ${variantStyles[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={combined} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={combined} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
