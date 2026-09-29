"use client";

import { Github } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

const getCellBg = (level: number) => {
  switch (level) {
    case 4:
      return "bg-stone-700";
    case 3:
      return "bg-stone-600";
    case 2:
      return "bg-stone-500";
    case 1:
      return "bg-stone-300";
    case 0:
    default:
      return "bg-stone-100";
  }
};

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Pre-generate 52 weeks x 7 days empty skeleton layout
const SKELETON_WEEKS = Array.from({ length: 52 }, () =>
  Array.from({ length: 7 }),
);

export function CodingActivity() {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [totalYearContributions, setTotalYearContributions] =
    useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [monthLabels, setMonthLabels] = useState<
    { month: string; weekIndex: number }[]
  >([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/adlihidayat",
        );
        if (!res.ok) throw new Error("Failed to fetch GitHub activity");

        const data: ApiResponse = await res.json();
        const allContribs = data.contributions || [];

        // Sort chronologically
        allContribs.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );

        // Filter out future dates (dates after today YYYY-MM-DD)
        const todayStr = new Date().toISOString().split("T")[0];
        const pastContribs = allContribs.filter(
          (item) => item.date <= todayStr,
        );

        // Take last 365 days ending today
        const finalContribs =
          pastContribs.length > 0
            ? pastContribs.slice(-365)
            : allContribs.slice(-365);

        // Compute total contributions in the last 1 year ending today
        const total = finalContribs.reduce((sum, item) => sum + item.count, 0);
        setTotalYearContributions(total);

        // Group into 7-day weeks
        const groupedWeeks: ContributionDay[][] = [];
        let currentWeek: ContributionDay[] = [];

        finalContribs.forEach((day) => {
          currentWeek.push(day);
          if (currentWeek.length === 7) {
            groupedWeeks.push(currentWeek);
            currentWeek = [];
          }
        });
        if (currentWeek.length > 0) {
          groupedWeeks.push(currentWeek);
        }

        setWeeks(groupedWeeks);

        // Compute month label start indices based on week columns
        const labels: { month: string; weekIndex: number }[] = [];
        let lastMonth = -1;

        groupedWeeks.forEach((week, wIdx) => {
          if (week.length > 0) {
            const midDay = week.length >= 4 ? week[3] : week[0];
            const m = new Date(midDay.date).getMonth();

            if (m !== lastMonth) {
              if (wIdx === 0 && groupedWeeks.length > 1) {
                const nextMidDay =
                  groupedWeeks[1].length >= 4
                    ? groupedWeeks[1][3]
                    : groupedWeeks[1][0];
                const nextMonth = new Date(nextMidDay.date).getMonth();
                if (nextMonth !== m) {
                  lastMonth = m;
                  return;
                }
              }

              labels.push({ month: MONTH_NAMES[m], weekIndex: wIdx });
              lastMonth = m;
            }
          }
        });

        setMonthLabels(labels);
      } catch (err) {
        console.error("Error loading GitHub contributions:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubActivity();
  }, []);

  // Auto-scroll to far right (most recent months ending today) when loaded
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth;
    }
  }, [loading, weeks]);

  return (
    <div className="w-full text-sm text-body">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 ">
        <div className="text-stone-600  flex items-center gap-1">
          {loading ? (
            <span className="w-7 h-4 bg-stone-200 animate-pulse rounded inline-block" />
          ) : (
            <span>{totalYearContributions}</span>
          )}
          <span className="font-medium text-stone-900 ">Coding activity</span>
          this year
        </div>
        <a
          href="https://github.com/adlihidayat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 hover:text-stone-900  transition-colors -translate-y-px"
        >
          Visit{" "}
          <span className="font-medium text-stone-900 underline underline-offset-2 ml-px text-link">
            <Github className="w-3 h-3 inline-block  -translate-y-px" /> github
          </span>
        </a>
      </div>

      {/* Horizontally Scrollable Window */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto custom-scrollbar pb-2.5 scroll-smooth"
      >
        <div className="w-max">
          {loading ? (
            /* Full 52-Week Grid Skeleton Loading State */
            <>
              <div className="flex gap-[3.5px]">
                {SKELETON_WEEKS.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3.5px]">
                    {week.map((_, dIndex) => (
                      <div
                        key={dIndex}
                        className="w-3.5 h-3.5 rounded-[3.5px] bg-stone-100 animate-pulse"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="relative text-xs text-stone-300 mt-2 h-4 w-full animate-pulse">
                {/* Placeholder empty row for month label height */}
                <span>Loading activity...</span>
              </div>
            </>
          ) : (
            /* Real Data Heatmap Grid */
            <>
              <div className="flex gap-[3.5px]">
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3.5px]">
                    {week.map((day, dIndex) => (
                      <div
                        key={dIndex}
                        title={`${day.date}: ${day.count} contributions`}
                        className={`w-3.5 h-3.5 rounded-[3.5px] ${getCellBg(
                          day.level,
                        )} transition-opacity hover:opacity-80`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Month Labels Bar */}
              <div className="relative text-xs text-stone-400 mt-2 h-4 w-full">
                {monthLabels.map((lbl, i) => (
                  <span
                    key={i}
                    style={{ left: `${lbl.weekIndex * (14 + 3.5)}px` }}
                    className="absolute whitespace-nowrap"
                  >
                    {lbl.month}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
