import { deleteEmployee } from "@/lib/action"

export const DeleteButton = ({id}:{id:string})=>{
    const DeleteEmployeeWithId = deleteEmployee.bind(null,id);
    return (
        <form action={DeleteEmployeeWithId}>
            <button className="btn btn-error">Delete</button>
        </form>
    )
}