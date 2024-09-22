"use client";

import { updateEmployee } from "@/lib/action";
import { Employee } from "@prisma/client";
import { useFormState } from "react-dom";

  
  
const UpdateForm = ({employee}:{employee:Employee}) => {
    const UpdateEmployeeWithId = updateEmployee.bind(null,employee.id)
    const [state,formAction]=useFormState(UpdateEmployeeWithId,null);
   
    return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Full Name..."
            defaultValue={employee.name}
            
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500"></p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Email..."
            defaultValue={employee.email}
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500"></p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Phone Number..."
            defaultValue={employee.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500"></p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500"></p>
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};
  export default UpdateForm