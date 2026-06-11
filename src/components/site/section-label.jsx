export function SectionLabel({ index, label }) {
  return (
    <div className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ember">
      <span className="grid size-6 place-items-center rounded-full border border-ember/40 text-[10px]">{index}</span>
      <span>{label}</span>
    </div>
  );
}
