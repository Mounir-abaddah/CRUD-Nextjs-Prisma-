'use client'
import { saveEmployee } from "@/lib/action"
import { useFormState } from "react-dom"

const CreateEmployeePage = () => {
    const [state,formAction]=useFormState(saveEmployee,null)
  return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New Employee</h1>
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs mt-2" />
                    <div id="name-error" aria-live="polite" aria-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email ....."
                        className="input input-bordered input-primary w-full max-w-xs mt-2" />
                        <div id="name-error" aria-live="polite" aria-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number ...."
                        className="input input-bordered input-primary w-full max-w-xs mt-2" />
                        <div id="name-error" aria-live="polite" aria-atomic='true'>
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                    </div>
                </div>
                <button className="btn btn-accent">Save</button>
            </form>
        </div>
    </div>
  )
}

export default CreateEmployeePage