import Preloader from "components/Preloader";

import cls from "utils/cls";

type IButtonTheme = "primary";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPending: boolean;
  children: React.ReactNode;
  theme: IButtonTheme;
}

const byTheme = {
  primary: "bg-black hover:bg-gray-900 text-white",
} satisfies Record<IButtonTheme, string>;

export default function Button({
  isPending,
  theme,
  children,
  type,
  ...props
}: IButtonProps) {
  return (
    <button
      disabled={isPending}
      type={type}
      className={cls(
        "w-full px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-black",
        byTheme[theme],
        isPending && "flex gap-2 items-center justify-center"
      )}
      {...props}
    >
      {isPending && <Preloader size="sm" />}
      {children}
    </button>
  );
}
