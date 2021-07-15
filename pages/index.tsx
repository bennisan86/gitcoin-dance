import { Fragment, useContext, useEffect } from "react";
import { TournamentDataContext } from "../context/TournamentDataContext";
import Round from "../components/Round";
import Layout from "../components/Layout";

//Main page of the app, displays NFT thumbnails and overall round structure
export default function Home() {
  const initialRound = parseInt(process.env.NEXT_PUBLIC_INITIAL_ROUND ?? "");
  const { tournament } = useContext(TournamentDataContext);
  if (!tournament.data) return <Fragment />;
  const { data } = tournament;
  const roundCount = initialRound + 1 - (data.currentRound?.toNumber() ?? 3);

  return (
    <Layout>
      <div>
        {/* Generates each round for tournament */}
        {Array(roundCount)
          .fill(0)
          .map((_, i) => (
            <Round roundNumber={initialRound - i} key={i} />
          ))}
      </div>
    </Layout>
  );
}
