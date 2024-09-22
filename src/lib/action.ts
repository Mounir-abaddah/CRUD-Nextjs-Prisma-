'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; // Import correct
import { z } from 'zod';
import { prisma } from "@/lib/prisma";

// Schéma de validation pour un employé
const EmployeeSchema = z.object({
    name: z.string().min(6, { message: 'Le nom doit comporter au moins 6 caractères.' }),
    email: z.string().email({ message: 'Email non valide.' }).min(6),
    phone: z.string().min(10, { message: 'Le numéro de téléphone doit comporter au moins 10 caractères.' }),
});

export const saveEmployee = async (prevState: any, formData: FormData) => {
    // Valider les champs via Zod
    const validateFields = EmployeeSchema.safeParse(Object.fromEntries(formData.entries()));

    // Si la validation échoue, renvoyer les erreurs
    if (!validateFields.success) {
        return {
            Error: validateFields.error.flatten().fieldErrors,
        };
    }

    try {
        // Créer l'employé dans la base de données avec Prisma
        await prisma.employee.create({
            data: {
                name: validateFields.data.name, // Correction ici : 'validateFields' au lieu de 'validatedFields'
                email: validateFields.data.email,
                phone: validateFields.data.phone,
            },
        });
    } catch (error) {
        // Retourner un message d'erreur si la création échoue
        return { message: "Failed to create new employee." };
    }

    // Réactualiser et rediriger après succès
    revalidatePath('/employer');
    return redirect('/employer'); // Retourner correctement après la redirection
};

export const getEmployerList = async (query:string)=>{
    try{
        const employees = await prisma.employee.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                phone:true,
                createdAt:true,
            },
            orderBy:{
                createdAt:'desc'
            },
        });
        return employees
    }catch(error){
        throw new Error('Failed to fetch employees data')
    }
}


export const getEmployeeById = async (id:string)=>{
    try{
        const employee = await prisma.employee.findUnique({
            where:{id},
        });
        return employee;
    }catch(error){
        throw new Error ("Failed to fetch contact data")
    
}
}

export const updateEmployee = async (
    id:string,
    prevState:any,
    formData:FormData
)=>{
    const validatedFields = EmployeeSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if(!validatedFields.success){
        return {
            Error:validatedFields.error.flatten().fieldErrors,
        }
    }
    try{
        await prisma.employee.update({
            data:{
                name:validatedFields.data.name,
                email:validatedFields.data.email,
                phone:validatedFields.data.phone,
            },
            where:{id}
        }) 
    }catch(error){
        return {message:'failed to update employee',error}
    }
    revalidatePath('/employer');
    return redirect('/employer');
}


export const deleteEmployee = async (id:string)=>{
    try{
        await prisma.employee.delete({
            where:{id},
        });
    }catch(error){
        return {message:'failed to delete employee',error}
    }
    revalidatePath('/employer');
    return redirect('/employer');
}

