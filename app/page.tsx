import Link from "next/link";



const getData = async () => {

    const horas = []
    for (let i = 0; i < 2; i++) {


        const request = await fetch(`http://worldtimeapi.org/api/timezone/America/Santo_Domingo`,{cache:'no-store'})
            .then((resp) => resp.json())




        horas.push(request.datetime)

        if (i < 9) {
            // Esperar 3 segundos antes de la próxima iteración
            await new Promise((resolve) => setTimeout(resolve, 3000));
        }
    }
    return horas
    
  
}



export default async function page() {
    const paises = await getData()
    console.log(paises)

    return (
        <div className="flex gap-3">
        {
            paises.map((r,i)=>(
                <div key={i}>

                
               <Link prefetch={false} href={`pruebas/${i}`}>
               <p className="w-52 h-52 bg-red-50 ">{new Date(r).toLocaleTimeString()}</p>
               
               </Link>
               </div>
            ))
        }

        </div>
    )
}
