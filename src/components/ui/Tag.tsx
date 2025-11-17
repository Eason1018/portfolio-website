interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  const styles = {
    display: 'inline-block',
    padding: 'var(--space-2) var(--space-3)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-text-secondary)',
    backgroundColor: 'var(--color-hover)',
    borderRadius: 'var(--border-radius)',
    border: 'var(--border-width) solid var(--color-border)',
    transition: 'all var(--transition-fast)',
  };

  return <span style={styles}>{children}</span>;
}
