import { useScrollIntoView } from '@mantine/hooks';

export type NavbarHandler = {
  about: () => void;
  contact: () => void;
  home: () => void;
  projects: () => void;
};
type NavbarRef = {
  about: React.MutableRefObject<HTMLDivElement>;
  contact: React.MutableRefObject<HTMLDivElement>;
  home: React.MutableRefObject<HTMLDivElement>;
  projects: React.MutableRefObject<HTMLDivElement>;
};
type NavbarConfig = {
  handler: NavbarHandler;
  ref: NavbarRef;
};

const NAV_SECTIONS = ['home', 'about', 'projects', 'contact'];

function useNavbar(): NavbarConfig {
  let handler = {};
  let ref = {};

  NAV_SECTIONS.forEach((section) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
    handler = {
      ...handler,
      [section]: scrollIntoView,
    };
    ref = {
      ...ref,
      [section]: targetRef,
    };
  });

  return { handler, ref } as NavbarConfig;
}

export { useNavbar };
