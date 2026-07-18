import type { ReactNode } from "react";
import styles from "./body.module.css";

export function Body({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>;
}
