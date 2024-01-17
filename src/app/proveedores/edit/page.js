import Form from "@/components/FormProveedores"
import { db } from "@/lib/mysql"
import { editProveedor } from "@/lib/actions"


async function page({ searchParams }) {
  const [proveedores] = await db.query('select * from proveedores where id = ?', [searchParams.id]);

  return (
    <div>
      <h3>Editar proveedor {searchParams.id}</h3>
        <Form action={editProveedor}
          title='Actualizar proveedor'
          proveedores={proveedores}
          disabled={false} />
    </div>
  )
}


export default page