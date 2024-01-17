import Form from "@/components/FormProveedores"
import { newProveedor } from "@/lib/actions"

function page() {
  return (
    <div>
      <h3>Nuevo artículo</h3>
      <Form action={newProveedor}
        title='Crear proveedor'
        articulo={null}
        disabled={false} />
    </div>
  )
}

export default page