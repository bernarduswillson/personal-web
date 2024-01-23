const Logo = (): JSX.Element => {
 return (
    <div className="flex items-center justify-center h-[25px] w-[35px] bg-primary text-secondary text-[35px] font-bold">
      &gt;
      <span className="animate-blink translate-y-[-2px]">
        _
      </span>
    </div>
  );
};

export default Logo;
