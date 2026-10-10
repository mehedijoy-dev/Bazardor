"use client";

export default function ScrollButton({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    e.preventDefault();

    const start = window.scrollY;
    const end = el.getBoundingClientRect().top + start - 16;
    const distance = end - start;
    const duration = 800;
    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    let t0: number | null = null;
    const step = (now: number) => {
      if (t0 === null) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      window.scrollTo({ top: start + distance * ease(p), behavior: "instant" });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
