interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  href, 
  onClick, 
  children 
}: ButtonProps) {
  const baseStyles = {
    display: 'inline-block',
    padding: 'var(--space-4) var(--space-6)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    border: 'var(--border-width) solid var(--color-text-primary)',
    borderRadius: 'var(--border-radius)',
    transition: 'all var(--transition-base)',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-bg)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
    },
  };

  const styles = { ...baseStyles, ...variantStyles[variant] };

  if (href) {
    return (
      <a href={href} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
}
