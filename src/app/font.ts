import { Poppins, Montaga } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "400", "700"],
  }); 
  
export const montaga = Montaga({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
  });