import type { ReactNode } from "react";
import styles from "./contact-section.module.css";

export function ContactSection({ children }: { children: ReactNode }) {
  return <section className={styles.contactSection}>{children}</section>;
}
