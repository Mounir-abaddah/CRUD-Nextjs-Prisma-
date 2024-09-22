export const  formDate = (dateStr:string)=>{
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat("id-ID",{
        dateStyle:'medium',
        timeStyle:'short',
    });
    return formatter.format(date)
}