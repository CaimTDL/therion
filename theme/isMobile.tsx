import { Theme, useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );
  return isMobile;
};
