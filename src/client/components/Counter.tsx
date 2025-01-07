import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { queryClient } from "../lib/queryClient";

export default function Counter() {
  const { data: counterData } = useQuery({
    queryKey: ['counter'],
    queryFn: () => fetch('/counter').then(res => res.json()),
  });

  const { mutate } = useMutation({
    mutationFn: () => fetch('/counter', { method: 'POST' }).then(res => res.json()),
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