import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactElement;
}

interface ContextValueShape {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>; //setter fn type in typescript
}

const MenuContext = createContext<ContextValueShape>({
  menuOpened: false,
  setMenuOpened: () => {},
});

export default function MenuContextProvider({ children }: Props) {
  // to keep track menu is open or not
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

// custome hook
export function useMenuContext() {
  const value = useContext(MenuContext);
  return value;
}
