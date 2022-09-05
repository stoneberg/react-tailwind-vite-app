import cat1 from "../../assets/carousel/cat1.jpeg";
import cat2 from "../../assets/carousel/cat2.jpeg";
import cat3 from "../../assets/carousel/cat3.jpeg";
import cat4 from "../../assets/carousel/cat4.jpeg";
import cat5 from "../../assets/carousel/cat5.jpeg";

export const media = [cat1, cat2, cat3, cat4, cat5];
export const mediaByIndex = (index) => media[index % media.length];
