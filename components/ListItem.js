import { usePathname } from 'next/navigation';

const ListItem = ({ children, NavLink }) => {
  const path = usePathname();
  const isActive = path.startsWith(NavLink);
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium text-primary hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2 lg:ml-12 lg:inline-flex ${
            isActive ? `font-black` : undefined
          }`}
        >
          {children}
        </a>
      </li>
    </>
  );
};
export default ListItem;
