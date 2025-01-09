import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { queryClient } from "../lib/queryClient";
import { trpc } from "../lib/trpc";
export default function Counter() {
  const { data: counterData } = useQuery({
    queryKey: ['counter'],
    queryFn: () => trpc.getCounter.query(),
  });

  const { mutate } = useMutation({
    mutationFn: () => trpc.incrementCounter.mutate(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['counter'] });
    },
  });

  return (
    <Button onClick={() => mutate()}>
      counter is {counterData?.count ?? 0}
    </Button>
  );
} 