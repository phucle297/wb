import { z } from "zod";

export const NavBarEnum = z.enum(["home", "short_reviews", "about_us", "blogs", "donate", "contact_us"]);

export type ENavBar = z.infer<typeof NavBarEnum>;
