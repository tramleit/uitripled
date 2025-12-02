"use client";

import { use, useMemo, Suspense } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const GITHUB_REPO = "moumen-soliman/uitripled";

interface GitHubRepo {
  stargazers_count: number;
}

function StarCount({ promise }: { promise: Promise<number> }) {
  const count = use(promise);
  return <span className="font-medium">{count.toLocaleString()}</span>;
}

function fetchStarCount(): Promise<number> {
  return fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
    next: { revalidate: 3600 },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json() as Promise<GitHubRepo>;
    })
    .then((data) => data.stargazers_count || 0)
    .catch((error) => {
      console.error("Error fetching GitHub stars:", error);
      return 0;
    });
}

export function GithubStarButton() {
  const starCountPromise = useMemo(() => fetchStarCount(), []);

  return (
    <Link
      href={`https://github.com/${GITHUB_REPO}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 min-w-[160px]"
    >
      Support with a Star <Star className="h-4 w-4" aria-hidden="true" />
      {/* <Suspense fallback={<span className="font-medium">---</span>}>
        <StarCount promise={starCountPromise} />
      </Suspense> */}
    </Link>
  );
}
