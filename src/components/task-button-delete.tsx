import { removeTask } from "@/actions/tasks-actions";
import { Button } from "@/components/ui/button";

export default function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form action={removeTask}>
        <input type="hidden" name="taskId" value={taskId} />
        <Button variant="destructive">Delete</Button>
    </form>
  )
}