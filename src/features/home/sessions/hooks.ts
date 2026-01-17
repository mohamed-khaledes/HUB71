import { useEffect, useState } from "react";
import { Session } from "./type";
import { fetchSessions } from "./api";

export const useFetchSessions = () => {
  const [data, setData] = useState<Session[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        setIsLoading(true);
        const sessions = await fetchSessions();
        setData(sessions);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSessions();
  }, []);

  return { data, isLoading, error };
};
