import { useEffect } from "react";
export default function useTitle(title) {
  const defaultTitle = "Wangel Yohannes | Wandering Yonko | ITIS 3135";
  useEffect(() => {
    document.title = title ? `${defaultTitle} | ${title}` : defaultTitle;
  }, [title]);
}
