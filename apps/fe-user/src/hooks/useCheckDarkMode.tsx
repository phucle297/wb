import { useTheme } from "@wb/ui/src/providers/theme-provider";

export const useCheckDarkMode = () => {
  const { theme } = useTheme();

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return systemTheme === "dark";
  }
  return theme === "dark";
};
