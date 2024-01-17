import Link from 'next/link'
import Proveedor from '@/components/Proveedor'
import { getProveedores } from '@/lib/actions'

export default async function Proveedores() {
    // La siguiente operación tardará un poquito
    const proveedores = await getProveedores()

    return (
        <>
            {
                proveedores.map((proveedor) => (
                   
                    <Proveedor key={proveedor.id} proveedor={proveedor} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/edit', query: { id: proveedores.id } }}>
                            Editar artículo
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/delete', query: { id: proveedores.id } }}>
                            Eliminar artículo
                        </Link>
                    </Proveedor>
                
                ))
            }
        </>
    )
}
