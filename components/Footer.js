import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-primary text-sm  text-center py-4  -mx-2">
      <div className="w-full ">
        <p className="text-md font-medium">
          <FaRegCopyright className="inline" /> 2024 Millennial Wealth
        </p>
        <p className="inline  text-xs">
          Hero background photo by{' '}
          <a href="https://unsplash.com/@micheile?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            micheile henderson
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/green-plant-on-brown-round-coins-lZ_4nPFKcV8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
        <p className="text-xs">Website design and development by FiKa Studio</p>
      </div>
    </footer>
  );
}
