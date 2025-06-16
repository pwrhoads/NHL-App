import { useEffect, useState } from 'react';
import type { SkaterStats } from '../types/view/SkaterStats';
import { getSkaterStats } from '../utils/loaders/SkaterStatsFetcher';

export function useSkaterStats(playerId: string) {
  const [data, setData] = useState<SkaterStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const stats = await getSkaterStats(playerId);
        if (isMounted) setData(stats);
      } catch (err) {
        if (isMounted) setError(err as Error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [playerId]);

  return { data, loading, error };
}