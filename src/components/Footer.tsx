/*
 * อย่าลืมเปลี่ยน fullName และ studentId ให้เป็นของตัวเอง
 */
import type { FooterProps } from "../libs/Todolist";

export default function Footer(props: FooterProps) {
  return (
    <footer className="text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </footer>
  );
}
