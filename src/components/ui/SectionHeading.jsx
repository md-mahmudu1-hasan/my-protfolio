export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : "justify-start"}`}
      >
        {!isCenter && <span className="h-px w-10 bg-primary/60" />}
        <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-gray-400 leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
