import Imagen from "@/components/Imagen"
import Button from "@/components/Button"

function Form({ action, title, articulo, disabled }) {
    
    return (
        <form id="preview" >
            <Imagen img={articulo?.imagen ?? '/imagen.png'} />

            <div class="datos">
                <input type='hidden' name='id' value={articulo?.id} />
                <fieldset disabled={disabled}>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' required
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={articulo?.nombre}
                        autoFocus />
                    <label htmlFor='telefono'>Teléfono</label>
                    <input type='number'
                        id='telefono'
                        name='telefono'
                        placeholder='Teléfono'
                        defaultValue={articulo?.telefono} />
                </fieldset>
                <Button action={action} title={title} />
                {/* <button formAction={action}>{title}</button> */}
            </div>
        </form>
    )
}

export default Form