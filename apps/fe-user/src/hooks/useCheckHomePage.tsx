import { useLocation } from "react-router-dom";

const useCheckHomePage = (): boolean => {
  const { pathname } = useLocation();
  return pathname === "/";
};

export default useCheckHomePage;
