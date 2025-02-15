import Link from 'next/link';

type ButtonProps = {
  to: string;
  children: string;
  disabled?: boolean;
};

const Button = ({ to, children, disabled }: ButtonProps) => {
  return (
    <Link href={to} passHref legacyBehavior>
      <button
        className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300
          ${disabled ? 'bg-gray-300 text-blue-600 cursor-not-allowed' : 'hover:bg-blue-100'}`}
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
