interface HeroBackgroundProps {
  children?: React.ReactNode;
  component?: React.ReactNode;
}

export default function HeroBackground({ children, component }: HeroBackgroundProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#020203] via-[#060c1d] to-[#0d2153]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[20px] bg-gradient-to-b from-white/70 via-transparent to-transparent" />
        <div className="absolute right-[-90%] md:right-[-5%] top-[60px] w-[1700px] h-[1300px] bg-[#873AE3]/45 blur-[160px] rounded-[2000px]" />
        <div className="absolute left-[-120%] md:left-[-15%] top-[40px] w-[1600px] h-[1400px] bg-[#1146F2]/55 blur-[170px] rounded-[2000px]" />
        <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#020203] via-transparent to-transparent" />
      </div>
      <div className="px-[20px] pb-[48px] pt-[150px] md:px-[72px] md:pb-[80px] lg:pt-[240px] relative z-10">
        {children}
      </div>
      {/* Smooth gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-28 bg-gradient-to-b from-transparent via-white/50 dark:via-[#070707]/50 to-white dark:to-[#070707] pointer-events-none z-0 transition-colors" />
      {component}
    </div>
  );
}

