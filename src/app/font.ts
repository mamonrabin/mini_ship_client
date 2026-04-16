import { Playfair_Display, Montserrat, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});
