import { useState, useRef, useCallback, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TIMELINE_EVENTS } from "../../utils/data";

export function Schedule() {
  const ref = useScrollReveal(0.1);
  const [activeIdx, setActiveIdx] = useState(0);
  const isDragging = useRef(false);
  const trackRef = useRef(null);

  const thumbPercent = (activeIdx / (TIMELINE_EVENTS.length - 1)) * 100;

  // Shared: given a clientX, compute which index we're at
  const idxFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return null;
    const rect = track.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    return Math.round(pct * (TIMELINE_EVENTS.length - 1));
  }, []);

  // Click on track (not dragging)
  const handleTrackClick = useCallback((e) => {
    if (isDragging.current) return;
    const idx = idxFromClientX(e.clientX);
    if (idx !== null) setActiveIdx(idx);
  }, [idxFromClientX]);

  // Pointer down on thumb — start drag with pointer capture
  const onThumbPointerDown = useCallback((e) => {
    e.preventDefault();
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  // Pointer move on thumb (captured, so fires even outside)
  const onThumbPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const idx = idxFromClientX(e.clientX);
    if (idx !== null) setActiveIdx(idx);
  }, [idxFromClientX]);

  // Pointer up on thumb
  const onThumbPointerUp = useCallback((e) => {
    isDragging.current = false;
  }, []);

  // Keyboard navigation on track
  const onKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight") setActiveIdx((p) => Math.min(p + 1, TIMELINE_EVENTS.length - 1));
    if (e.key === "ArrowLeft") setActiveIdx((p) => Math.max(p - 1, 0));
    if (e.key === "Home") setActiveIdx(0);
    if (e.key === "End") setActiveIdx(TIMELINE_EVENTS.length - 1);
  }, []);

  const event = TIMELINE_EVENTS[activeIdx];

  return (
    <section
      id="schedule"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      aria-label="Hackathon schedule"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionLabel className="text-center block">
          Hackathon Schedule
        </SectionLabel>

        {/* Active event card */}
        <div
          key={activeIdx}
          className="mt-6 sm:mt-8 mb-8 sm:mb-12 p-4 sm:p-6 glass-card rounded-2xl border border-purple-700/40 transition-all duration-300"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest font-display mb-1">
                Event {activeIdx + 1} of {TIMELINE_EVENTS.length}
              </p>
              <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                {event.label}
              </h3>
            </div>
            <div className="text-purple-300 font-display text-sm font-semibold whitespace-nowrap">
              {event.date}
            </div>
          </div>
        </div>

        {/* Timeline tabs — horizontally scrollable on mobile */}
        <div className="relative mb-6 overflow-x-auto pb-2 -mx-2 px-2">
          <div className="flex min-w-max gap-0">
            {TIMELINE_EVENTS.map((ev, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`flex-1 min-w-[120px] sm:min-w-[144px] text-left px-2 sm:px-3 pb-4 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-purple-400 rounded-t-lg ${
                  i === activeIdx ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
                aria-pressed={i === activeIdx}
                aria-label={`${ev.label} - ${ev.date}`}
              >
                <p
                  className={`text-xs font-semibold leading-snug mb-2 transition-colors ${
                    i === activeIdx ? "text-[#7C3AED]" : "text-[#FFFFFF]"
                  }`}
                >
                  {ev.label}
                </p>
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i <= activeIdx ? "bg-purple-500" : "bg-purple-900/40"
                  }`}
                />
                <p className="text-xs text-gray-500 mt-2">{ev.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Slider track */}
        <div className="relative mt-2 py-3">
          <div
            ref={trackRef}
            className="relative h-2 rounded-full bg-purple-900/50 cursor-pointer select-none"
            onClick={handleTrackClick}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={TIMELINE_EVENTS.length - 1}
            aria-valuenow={activeIdx}
            aria-valuetext={`${event.label} - ${event.date}`}
            aria-label="Timeline slider"
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            {/* Filled bar */}
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-purple-700 to-purple-400 transition-all duration-300 pointer-events-none"
              style={{ width: `${thumbPercent}%` }}
              aria-hidden="true"
            />

            {/* Dot markers */}
            {TIMELINE_EVENTS.map((_, i) => {
              const pct = (i / (TIMELINE_EVENTS.length - 1)) * 100;
              return (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx(i);
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-purple-400 z-10 ${
                    i === activeIdx
                      ? "w-5 h-5 bg-purple-400 border-purple-300 shadow-lg shadow-purple-500/50"
                      : i < activeIdx
                      ? "w-3 h-3 bg-purple-600 border-purple-500"
                      : "w-3 h-3 bg-purple-900/60 border-purple-700/50"
                  }`}
                  style={{ left: `${pct}%` }}
                  aria-label={`Go to event: ${TIMELINE_EVENTS[i].label}`}
                  tabIndex={-1}
                />
              );
            })}

            {/* Draggable thumb — pointer capture handles all drag events */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-purple-500 shadow-lg shadow-purple-500/50 z-20 cursor-grab active:cursor-grabbing touch-none"
              style={{
                left: `${thumbPercent}%`,
                transition: isDragging.current ? "none" : "left 0.3s ease",
              }}
              onPointerDown={onThumbPointerDown}
              onPointerMove={onThumbPointerMove}
              onPointerUp={onThumbPointerUp}
              onPointerCancel={onThumbPointerUp}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
