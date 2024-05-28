import { TaskForm } from "./_c/task-form"

function page() {
  return (
    <div className="flex justify-center items-center h-screen">
        <TaskForm task={""} />
    </div>
  )
}

export default page