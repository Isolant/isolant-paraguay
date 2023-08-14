import Link from "next/link";

const Button = ({ isExternal, src, children, classes }: {
  isExternal: boolean;
  src: string;
  children: React.ReactNode;
  classes: string;
}) => {
    const styles = `px-6 py-4 text-sm font-medium tracking-wider uppercase rounded-full inline-flex items-center gap-2 transition ease-in-out duration-75 ${classes} `;

    if(isExternal) {
      return (
        <a
          href={src}
          rel="noopener noreferrer"
          target="_blank"
          className={styles}
        >
          {children}
        </a>
      )
    } else {
      return (
        <Link
          href={src}
          className={styles}
        >
          {children}
        </Link> 
      )
    }
}

export default Button;