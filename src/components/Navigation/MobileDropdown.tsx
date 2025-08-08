import { NavigationLink } from "../../utils/contentTypes";
import { motion } from "motion/react";

interface MobileDropdownProps {
  links: NavigationLink[] | undefined; //or links?: NavigationLink[];
}

function MobileDropdown({ links }: MobileDropdownProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, height: 0 }} //when ul is rendered get these styles
      animate={{ opacity: 1, height: "auto" }} //while ul is on the screen get these styles with animation
      exit={{ opacity: 0, height: 0 }} //when ul is off the screen get these styles (it dosnt get styles with animation effect)
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="text-grey-600 z-10 flex flex-col gap-y-6 overflow-hidden pl-3"
    >
      {links?.map((dropdownLink) => (
        <li key={dropdownLink.id}>
          <a href={dropdownLink.href}>{dropdownLink.text}</a>
        </li>
      ))}
    </motion.ul>
  );
}

export default MobileDropdown;
