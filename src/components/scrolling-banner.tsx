import Link from 'next/link';

export default function ScrollingBanner() {
  return (
    <Link href="/initiation/process" className="block bg-primary text-primary-foreground overflow-hidden whitespace-nowrap group cursor-pointer">
      <div className="inline-block py-2 animate-scroll-left group-hover:[animation-play-state:paused]">
        <span className="mx-4 text-sm font-semibold tracking-wider uppercase">
          Initiation Process Started - Click here to continue
        </span>
        <span className="mx-4 text-sm font-semibold tracking-wider uppercase">
          Initiation Process Started - Click here to continue
        </span>
        <span className="mx-4 text-sm font-semibold tracking-wider uppercase">
          Initiation Process Started - Click here to continue
        </span>
        <span className="mx-4 text-sm font-semibold tracking-wider uppercase">
          Initiation Process Started - Click here to continue
        </span>
      </div>
    </Link>
  );
}
