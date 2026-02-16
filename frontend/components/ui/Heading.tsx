import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

const styles = {
  h1: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-navy tracking-tight',
  h2: 'text-2xl sm:text-3xl font-bold text-cozy-navy tracking-tight',
  h3: 'text-xl sm:text-2xl font-semibold text-cozy-navy',
};

export function Heading({ children, as: Tag = 'h2', className = '' }: HeadingProps) {
  return <Tag className={`${styles[Tag]} ${className}`}>{children}</Tag>;
}
