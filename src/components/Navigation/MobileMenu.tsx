import { AnimatePresence, easeOut, motion } from "motion/react";
import { useState } from "react";
import { navigationLinks } from "../../utils/content";
import CaretUp from "../Icons/CaretUp";
import Close from "../Icons/Close";
import MobileDropdown from "./MobileDropdown";
import { useMenuContext } from "../../contexts/MobileMenuContext";

// for mobile design we dont using hover state for change color of links

function MobileMenu() {
  const [activeLinkId, setActiveLinkId] = useState<number>(-1); //-1 means unset
  const { menuOpened, setMenuOpened } = useMenuContext();
  console.log(menuOpened, activeLinkId);
  return (
    // div === overlay---- position= fixed => fixed relative to viewport width
    <motion.div
      onClick={() => setMenuOpened(false)} //for stop closing menu when user clicks on any links in nav, we use stopPropagtion()
      animate={menuOpened ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          display: "none",
        },
        visible: {
          opacity: 1,
          display: "flex",
        },
      }}
      className="fixed top-0 right-0 bottom-0 left-0 z-10 hidden justify-end bg-white/30 pl-30" //default is hidden
    >
      <motion.nav
        animate={menuOpened ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            x: "100%", //move nav el to 100% its width to the right
          },
          visible: {
            opacity: 1,
            x: "0", //move nav el to its original position
          },
        }}
        transition={{
          duration: 0.35,
          ease: easeOut,
        }}
        className="flex h-full w-full max-w-96 min-w-65 flex-col items-start gap-y-18 bg-white p-6 pl-7"
      >
        <Close />
        {/* animation of ul has a little delay  */}
        <motion.ul
          animate={menuOpened ? "visible" : "hidden"}
          variants={{
            hidden: {
              opacity: 0,
              x: "100%",
            },
            visible: {
              opacity: 1,
              x: "0",
            },
          }}
          transition={{
            delay: 0.05,
            ease: easeOut,
          }}
          className="flex flex-col gap-y-8"
        >
          {navigationLinks.map((link) => (
            <li
              onClick={(e) => {
                e.stopPropagation(); ////when we click on any link inside NAV el, onClick event bubbles up and also happens on div opverlay
                setActiveLinkId(activeLinkId === link.id ? -1 : link.id);
              }}
              className={`group relative flex flex-col text-base font-medium ${activeLinkId === link.id ? "gap-y-6" : "gap-y-0"} transition-all duration-300 ease-in-out`}
              key={link.id}
            >
              <div className="flex cursor-pointer items-center gap-x-1.75">
                {link.dropdown ? (
                  <button
                    className={`${activeLinkId === link.id ? "text-black" : "text-grey-600"} cursor-pointer`}
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    className={`${activeLinkId === link.id ? "text-black" : "text-grey-600"}`}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                )}
                {link.dropdown && (
                  <span
                    className={`${activeLinkId === link.id && link.dropdown && "rotate-180"} flex size-6 items-center justify-center transition-all duration-200`}
                  >
                    <CaretUp
                      className={`size-3.5 rotate-180 transition-all duration-200 ${activeLinkId === link.id ? "fill-black" : "fill-grey-600"}`}
                    />
                  </span>
                )}
              </div>

              <AnimatePresence>
                {link.dropdown && activeLinkId === link.id && (
                  <MobileDropdown links={link.dropdownLinks} />
                )}
              </AnimatePresence>
            </li>
          ))}
        </motion.ul>

        <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-base font-medium text-white transition-all duration-200">
          Join Now
        </button>
      </motion.nav>
    </motion.div>
  );
}

export default MobileMenu;
