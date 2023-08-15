import Link from "next/link";

const Button = ({ isExternal, src, type, children, classes }: {
  isExternal?: boolean;
  src?: string;
  type?: string;
  children: React.ReactNode;
  classes: string;
}) => {
    const styles = `px-6 py-4 text-sm font-medium tracking-wider uppercase rounded-full inline-flex items-center gap-2 transition ease-in-out duration-75 ${classes} `;

    if(src && isExternal === true) {
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
    } else if(src && isExternal === false) {
      return (
        <Link
          href={src}
          className={styles}
        >
          {children}
        </Link> 
      )
    } else {
      return (
        <button
          type={type}
          className={styles}
        >
          {children}
        </button>
      )
    }
}

export default Button;