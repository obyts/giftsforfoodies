import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
};

export function Section({ children, className = '', as: Tag = 'section', id }: SectionProps) {
  return (
    <Tag id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </Tag>
  );
}
