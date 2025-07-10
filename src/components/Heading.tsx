import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode; // O tipo React.ReactNode aceita tudo que o react aceita com children.
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}