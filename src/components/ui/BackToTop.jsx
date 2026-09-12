export default function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background-dark shadow-glow transition-all hover:-translate-y-1 hover:shadow-glow-lg"
    >
      <span className="material-icons-outlined text-xl">arrow_upward</span>
    </a>
  );
}
