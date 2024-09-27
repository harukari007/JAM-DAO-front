import Link from "next/link";

import paths from "@/lib/paths";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-around items-center min-h-screen">
      <div className="w-36">
        <h1 className="text-xl font-semibold">刀DAO</h1>
        <nav className="grid gap-4 text-sm text-muted-foreground mt-6">
        <Link href={paths.proposals()}>提案（Proposal）</Link>
        <Link href={paths.memberJoin()}>参加会員</Link>
        <Link href={paths.members()}>JAM-DAOメンバー</Link>
          <Link href={paths.vote()}>投票</Link>
        </nav>
      </div>
      <div className="w-36">
        <h1 className="text-xl font-semibold">Lecturer</h1>
        <nav
          className="grid gap-4 text-sm text-muted-foreground mt-6"
          x-chunk="dashboard-04-chunk-0"
        >
          <Link href={paths.initialize()}>初期設定（initialize）</Link>
          <Link href={paths.propose()}>提案作成（Proposal）</Link>
          <Link href={paths.call()}>コントラクト検索（contract call）</Link>
        </nav>
      </div>
    </div>
  );
}
